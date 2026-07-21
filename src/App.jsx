import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { IoAdd } from 'react-icons/io5';
import AppLayout from './components/layout/AppLayout';
import DashboardCards from './components/features/DashboardCards';
import FilterBar from './components/features/FilterBar';
import TaskList from './components/features/TaskList';
import TaskModal from './components/features/TaskModal';
import Button from './components/ui/Button';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleOpenNew = () => {
    setTaskToEdit(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  return (
    <>
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
            borderRadius: '10px',
          },
        }} 
      />
      
      <AppLayout>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 mt-2">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Dashboard</h1>
            <p className="text-gray-500 dark:text-zinc-400 mt-1">Manage your tasks and boost your productivity.</p>
          </div>
          <Button onClick={handleOpenNew} className="shadow-lg shadow-blue-500/30">
            <IoAdd className="text-xl mr-1 -ml-1" />
            Add Task
          </Button>
        </div>

        <DashboardCards />
        
        <div className="mt-10 mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Your Tasks</h2>
        </div>
        
        <FilterBar />
        <TaskList onEditTask={handleOpenEdit} />
      </AppLayout>

      <TaskModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        taskToEdit={taskToEdit} 
      />
    </>
  );
}

export default App;
