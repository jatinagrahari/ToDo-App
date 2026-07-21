import React from 'react';
import { IoCheckmarkCircleOutline, IoListOutline } from 'react-icons/io5';

const EmptyState = ({ type = 'empty' }) => {
  const content = {
    empty: {
      icon: <IoListOutline className="w-16 h-16 text-gray-400 dark:text-zinc-600 mb-4" />,
      title: "No tasks found",
      description: "You don't have any tasks here yet. Create one to get started."
    },
    completed: {
      icon: <IoCheckmarkCircleOutline className="w-16 h-16 text-green-400 dark:text-green-600/50 mb-4" />,
      title: "All caught up!",
      description: "You've completed all your tasks in this view."
    }
  };

  const { icon, title, description } = content[type];

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center px-4 rounded-xl border border-dashed border-gray-300 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/20">
      {icon}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-zinc-100">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-zinc-500 max-w-sm">{description}</p>
    </div>
  );
};

export default EmptyState;
