import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../redux/slices/taskSlice';
import ThemeToggle from '../ui/ThemeToggle';
import { IoSearchOutline } from 'react-icons/io5';

const Navbar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.tasks.searchQuery);

  return (
    <header className="h-16 border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-20 flex items-center justify-between px-6">
      
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="w-full bg-gray-100 dark:bg-zinc-800/50 border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-zinc-900 rounded-full py-2 pl-10 pr-4 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-zinc-500 outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4 ml-4">
        <ThemeToggle />
        
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
          <span className="text-white text-xs font-bold">JA</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
