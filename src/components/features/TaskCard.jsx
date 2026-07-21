import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskComplete, deleteTask } from '../../redux/slices/taskSlice';
import { IoCheckmark, IoTrashOutline, IoPencilOutline, IoCalendarOutline } from 'react-icons/io5';
import toast from 'react-hot-toast';
import Badge from '../ui/Badge';
import { cn } from '../../utils/cn';

const TaskCard = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTaskComplete(task.id));
    if (!task.completed) {
      toast.success('Task completed!');
    }
  };

  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(task.id));
      toast.success('Task deleted');
    }
  };

  const getPriorityBadge = (p) => {
    switch (p) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'default';
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
  };

  return (
    <div className={cn(
      "group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border transition-all duration-200",
      task.completed 
        ? "bg-gray-50 dark:bg-zinc-900/30 border-gray-100 dark:border-zinc-800 opacity-60" 
        : "bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-900/50"
    )}>
      
      <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
        
        {/* Checkbox */}
        <button 
          onClick={handleToggle}
          className={cn(
            "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors mt-0.5 sm:mt-0",
            task.completed 
              ? "bg-blue-500 border-blue-500 text-white" 
              : "border-gray-300 dark:border-zinc-600 text-transparent hover:border-blue-500 dark:hover:border-blue-500"
          )}
        >
          <IoCheckmark className="text-sm font-bold" />
        </button>

        {/* Content */}
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-center space-x-2">
            <h4 className={cn(
              "text-base font-semibold truncate transition-colors",
              task.completed ? "text-gray-500 dark:text-zinc-500 line-through" : "text-gray-900 dark:text-zinc-100"
            )}>
              {task.title}
            </h4>
          </div>
          
          {task.description && (
            <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1 line-clamp-1">
              {task.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2 mt-2">
            <Badge variant="primary">{task.category}</Badge>
            <Badge variant={getPriorityBadge(task.priority)}>{task.priority}</Badge>
            {task.dueDate && (
              <div className="flex items-center text-xs text-gray-500 dark:text-zinc-400 font-medium bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded-md">
                <IoCalendarOutline className="mr-1" />
                {formatDate(task.dueDate)}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Actions (visible on hover or focus) */}
      <div className="flex items-center space-x-2 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity self-end sm:self-center">
        <button 
          onClick={() => onEdit(task)}
          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
          aria-label="Edit task"
        >
          <IoPencilOutline className="text-lg" />
        </button>
        <button 
          onClick={handleDelete}
          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
          aria-label="Delete task"
        >
          <IoTrashOutline className="text-lg" />
        </button>
      </div>

    </div>
  );
};

export default TaskCard;
