import React from 'react';
import { useSelector } from 'react-redux';
import { IoCheckmarkDone, IoList, IoFlame, IoTrendingUp } from 'react-icons/io5';

const DashboardCards = () => {
  const tasks = useSelector(state => state.tasks.items);

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const pending = total - completed;
  const highPriority = tasks.filter(t => t.priority === 'High' && !t.completed).length;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  const stats = [
    { label: 'Total Tasks', value: total, icon: IoList, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { label: 'Completed', value: completed, icon: IoCheckmarkDone, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' },
    { label: 'Pending', value: pending, icon: IoTrendingUp, color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { label: 'High Priority', value: highPriority, icon: IoFlame, color: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900/30' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white dark:bg-zinc-900/50 p-4 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm flex items-center space-x-4 transition-all hover:shadow-md">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg}`}>
            <stat.icon className={`text-xl ${stat.color}`} />
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 dark:text-zinc-500 uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-0.5">{stat.value}</p>
          </div>
        </div>
      ))}
      
      {/* Completion Rate Progress Bar (Spans full width on mobile) */}
      <div className="col-span-2 lg:col-span-4 bg-white dark:bg-zinc-900/50 p-4 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm flex items-center space-x-6">
        <div className="flex-1">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-semibold text-gray-700 dark:text-zinc-300">Completion Rate</span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{completionRate}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-zinc-800 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
