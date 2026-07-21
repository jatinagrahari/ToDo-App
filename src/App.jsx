import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className=" bg-gray-900 text-white min-h-screen flex justify-center items-center">
        <div className=" w-8/10    p-10 ">
          <h1 className="text-5xl text-semibold text-center py-10 my-10">
            Todos App using - Redux
          </h1>
          <AddTodo />
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;
