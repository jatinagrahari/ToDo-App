# ✅ Redux Todo App

> **A React-based Todo Application using Redux Toolkit for centralized state management — add, edit, delete, and manage todos with a predictable global state architecture**

[![React](https://img.shields.io/badge/Library-React-%2361DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/State-Redux%20Toolkit-%23764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-%23F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Build-Vite-%23646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

🐛 **[Report Bug](https://github.com/jatinagrahari/Redux-Todo/issues)** • ⭐ **[GitHub](https://github.com/jatinagrahari/Redux-Todo)**

---

# ✨ Features

- ➕ **Add Todos** — Create new tasks instantly
- ✏️ **Edit Todos** — Update existing todos without losing state
- ❌ **Delete Todos** — Remove completed or unwanted tasks
- 📋 **Global State Management** — Todos managed using Redux Toolkit
- ⚡ **Instant UI Updates** — React automatically re-renders on state changes
- 🔄 **Predictable State Flow** — Actions → Reducers → Updated Store → UI

---

# 🛠️ Tech Stack

| Layer                | Technology    |
| -------------------- | ------------- |
| **UI Library**       | React         |
| **Language**         | JavaScript    |
| **State Management** | Redux Toolkit |
| **React Binding**    | React Redux   |
| **Build Tool**       | Vite          |

---

# ⚙️ React & Redux Concepts Used

### React

- `useState`
- `useEffect`
- Component-based Architecture

### Redux Toolkit

- `configureStore()`
- `createSlice()`
- `useSelector()`
- `useDispatch()`
- Redux Store
- Actions
- Reducers
- Immutable State Updates

---

# 🚀 Quick Start

## Prerequisites

- Node.js installed
- VS Code (recommended)

---

# 📁 Project Structure

```bash
Redux-Todo/
├── src/
│   ├── app/
│   │   └── store.js            # Redux store configuration
│   ├── features/
│   │   └── todo/
│   │       └── todoSlice.js    # Slice, reducers & actions
│   ├── components/
│   │   ├── AddTodo.jsx         # Add/Edit todo form
│   │   └── Todos.jsx           # Todo list component
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Provider setup
│   └── index.css
├── public/
└── README.md
```

---

# 🎯 How It Works

1. User enters a todo and clicks **Add Todo**
2. `dispatch(addTodo())` sends an action to Redux
3. The reducer updates the global store
4. `useSelector()` automatically receives updated state
5. React re-renders the Todo List

### Editing Flow

1. Click **Edit**
2. Todo text populates the input field
3. Button changes from **Add Todo** → **Update Todo**
4. `dispatch(updateTodo())` updates the selected todo
5. UI refreshes automatically

### Delete Flow

1. Click **Delete**
2. `dispatch(removeTodo())`
3. Reducer removes the todo
4. Updated list is rendered instantly

---

# 🧠 Key Implementation

## Creating a Slice

```javascript
import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: () => {},
    removeTodo: () => {},
    updateTodo: () => {},
  },
});
```

---

## Dispatching an Action

```javascript
const dispatch = useDispatch();

dispatch(
  addTodo({
    id: Date.now(),
    text: todo,
  }),
);
```

---

## Reading State

```javascript
const todos = useSelector((state) => state.todos);
```

---

# 📸 Screenshots

<details>
<summary><b>Click to expand screenshots</b></summary>

### Home

<!-- ![Todo App](./src/assets/home.png)  -->

### Edit Todo

<!-- ![Edit Todo](./src/assets/edit.png) -->

</details>

---

# 🚧 Current Status

Completed Features:

- ✅ Add Todo
- ✅ Edit Todo
- ✅ Delete Todo
- ✅ Redux Toolkit Integration
- ✅ Global State Management

---

# 📝 Future Improvements

- 💾 Save todos in Local Storage
- ✅ Mark todos as completed
- 📅 Add due dates
- 🔍 Search todos
- 🎯 Filter Active / Completed tasks
- 📱 Improve responsive design
- 🌙 Dark Mode

---

# 🏗️ State Flow

```text
User Action
      │
      ▼
dispatch(action)
      │
      ▼
Redux Store
      │
      ▼
Reducer Updates State
      │
      ▼
Updated Store
      │
      ▼
useSelector()
      │
      ▼
React Re-renders UI
```

---

# 🙏 Acknowledgments

- Built with ❤️ using React, Redux Toolkit, and Vite.

---

# ⭐ Show your support

Give a ⭐ if this project helped you understand Redux Toolkit and React state management!
