import { createSlice, nanoid } from '@reduxjs/toolkit';

// Retrieve from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('taskflow_tasks');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const initialState = {
  items: loadState(),
  filterStatus: 'all', // all, active, completed
  filterCategory: 'all', // all, personal, work, etc.
  searchQuery: '',
  sortOrder: 'newest', // newest, oldest, priority, dueDate
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        localStorage.setItem('taskflow_tasks', JSON.stringify(state.items));
      },
      prepare: ({ title, description = '', category = 'Personal', priority = 'Medium', dueDate = null }) => {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            category,
            priority, // High, Medium, Low
            completed: false,
            dueDate,
            createdAt: new Date().toISOString(),
          }
        };
      }
    },
    updateTask: (state, action) => {
      const index = state.items.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...action.payload };
        localStorage.setItem('taskflow_tasks', JSON.stringify(state.items));
      }
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload);
      localStorage.setItem('taskflow_tasks', JSON.stringify(state.items));
    },
    toggleTaskComplete: (state, action) => {
      const task = state.items.find(t => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('taskflow_tasks', JSON.stringify(state.items));
      }
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    setFilterCategory: (state, action) => {
      state.filterCategory = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { 
  addTask, 
  updateTask, 
  deleteTask, 
  toggleTaskComplete,
  setFilterStatus,
  setFilterCategory,
  setSearchQuery,
  setSortOrder
} = taskSlice.actions;

export default taskSlice.reducer;
