import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, isEditingTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="py-10">
        <span className="text-3xl text-semibold"> Todos </span>
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              className="mt-4 flex justify-between items-center bg-zinc-800  px-4 py-2 rounded"
              key={todo.id}
            >
              <div className="text-white">{todo.text}</div>
              <div className=" flex gap-4">
                {/* update the todo */}
                <button
                  onClick={() => dispatch(isEditingTodo(todo))}
                  className=" px-4 py-1 cursor-pointer   text-white  border-0  bg-red-500 focus:outline-none hover:bg-red-600 rounded"
                >
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 32 32"
                    enable-background="new 0 0 32 32"
                    xml:space="preserve"
                    className="w-6 h-6"
                  >
                    <path
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      d="M22.3,6.5l0.8-0.8c0.9-0.9,2.3-0.9,3.2,0l0,0c0.9,0.9,0.9,2.3,0,3.2l-0.8,0.8"
                    />
                    <line
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      x1="18.9"
                      y1="8.8"
                      x2="23.2"
                      y2="13.1"
                    />
                    <polyline
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      points="10.8,25.6 10,22 6.4,21.2 "
                    />
                    <path
                      fill="none"
                      stroke="#fff"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      d="M10.5,25.9L5,27l1.1-5.5L21.7,5.9l4.4,4.4L10.5,25.9z"
                    />
                    <path d="M8.5,26.3L5,27l0.7-3.5L8.5,26.3z" />
                  </svg>
                </button>

                {/* remove todo */}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
