import React from 'react';
import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';
import EmptyState from './EmptyState';

const TaskList = ({ onEditTask }) => {
  const { items, filterStatus, filterCategory, searchQuery, sortOrder } = useSelector(state => state.tasks);

  // Apply filters
  let filtered = items.filter(task => {
    // Category filter
    if (filterCategory !== 'all' && task.category !== filterCategory) return false;
    
    // Status filter
    if (filterStatus === 'active' && task.completed) return false;
    if (filterStatus === 'completed' && !task.completed) return false;

    // Search query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return task.title.toLowerCase().includes(q) || 
             task.description.toLowerCase().includes(q);
    }
    return true;
  });

  // Apply sorting
  filtered.sort((a, b) => {
    if (sortOrder === 'newest') return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortOrder === 'oldest') return new Date(a.createdAt) - new Date(b.createdAt);
    if (sortOrder === 'dueDate') {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    }
    if (sortOrder === 'priority') {
      const pLevel = { 'High': 3, 'Medium': 2, 'Low': 1 };
      return pLevel[b.priority] - pLevel[a.priority];
    }
    return 0;
  });

  if (items.length === 0) {
    return <EmptyState type="empty" />;
  }

  if (filtered.length === 0 && filterStatus === 'active') {
    return <EmptyState type="completed" />;
  }

  if (filtered.length === 0) {
    return <div className="text-center py-10 text-gray-500 dark:text-zinc-500">No tasks match your filters.</div>;
  }

  return (
    <div className="space-y-3 pb-20">
      {filtered.map(task => (
        <TaskCard 
          key={task.id} 
          task={task} 
          onEdit={onEditTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
