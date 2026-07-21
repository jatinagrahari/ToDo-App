import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterStatus, setSortOrder } from '../../redux/slices/taskSlice';

const FilterBar = () => {
  const dispatch = useDispatch();
  const { filterStatus, sortOrder } = useSelector(state => state.tasks);

  const statuses = [
    { id: 'all', label: 'All Tasks' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' },
  ];

  const sortOptions = [
    { id: 'newest', label: 'Newest First' },
    { id: 'oldest', label: 'Oldest First' },
    { id: 'priority', label: 'Priority (High -> Low)' },
    { id: 'dueDate', label: 'Due Date' },
  ];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      
      {/* Filter Tabs */}
      <div className="flex items-center space-x-1 bg-gray-100 dark:bg-zinc-900 p-1 rounded-lg self-start">
        {statuses.map(status => (
          <button
            key={status.id}
            onClick={() => dispatch(setFilterStatus(status.id))}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
              filterStatus === status.id 
                ? 'bg-white dark:bg-zinc-800 text-gray-900 dark:text-white shadow-sm' 
                : 'text-gray-500 hover:text-gray-700 dark:text-zinc-500 dark:hover:text-zinc-300'
            }`}
          >
            {status.label}
          </button>
        ))}
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-500 dark:text-zinc-500">Sort by:</span>
        <select 
          value={sortOrder}
          onChange={(e) => dispatch(setSortOrder(e.target.value))}
          className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-900 dark:text-zinc-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 outline-none cursor-pointer"
        >
          {sortOptions.map(opt => (
            <option key={opt.id} value={opt.id}>{opt.label}</option>
          ))}
        </select>
      </div>

    </div>
  );
};

export default FilterBar;
