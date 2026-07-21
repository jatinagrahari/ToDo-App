import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterCategory, setFilterStatus } from '../../redux/slices/taskSlice';
import { IoListOutline, IoCalendarOutline, IoCheckmarkDoneOutline, IoBriefcaseOutline, IoBookOutline, IoPersonOutline } from 'react-icons/io5';
import { cn } from '../../utils/cn';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { filterCategory, filterStatus } = useSelector(state => state.tasks);

  const navItems = [
    { label: 'All Tasks', icon: IoListOutline, status: 'all', category: 'all' },
    { label: 'Today', icon: IoCalendarOutline, status: 'all', category: 'Today' },
    { label: 'Completed', icon: IoCheckmarkDoneOutline, status: 'completed', category: 'all' },
  ];

  const categories = [
    { label: 'Personal', icon: IoPersonOutline, category: 'Personal' },
    { label: 'Work', icon: IoBriefcaseOutline, category: 'Work' },
    { label: 'Learning', icon: IoBookOutline, category: 'Learning' },
  ];

  const handleNavClick = (status, category) => {
    dispatch(setFilterStatus(status));
    dispatch(setFilterCategory(category));
  };

  const NavButton = ({ item, isStatusCheck = false }) => {
    const isActive = isStatusCheck 
      ? filterStatus === item.status && filterCategory === item.category 
      : filterCategory === item.category && filterStatus === 'all';

    return (
      <button
        onClick={() => handleNavClick(item.status || 'all', item.category)}
        className={cn(
          "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          isActive 
            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" 
            : "text-gray-600 hover:bg-gray-100 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
        )}
      >
        <item.icon className={cn("text-lg", isActive ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-zinc-500")} />
        <span>{item.label}</span>
      </button>
    );
  };

  return (
    <aside className="w-64 h-full border-r border-gray-200 dark:border-zinc-800 bg-gray-50/50 dark:bg-[#0a0a0b]/50 p-4 flex flex-col hidden md:flex">
      <div className="flex items-center space-x-2 px-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">TaskFlow</span>
      </div>

      <div className="space-y-1 mb-8">
        {navItems.map(item => (
          <NavButton key={item.label} item={item} isStatusCheck={true} />
        ))}
      </div>

      <div className="mb-2 px-3 text-xs font-semibold text-gray-400 dark:text-zinc-500 uppercase tracking-wider">
        Lists
      </div>
      <div className="space-y-1 flex-1">
        {categories.map(item => (
          <NavButton key={item.label} item={item} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
