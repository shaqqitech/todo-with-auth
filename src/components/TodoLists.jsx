"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPenAlt } from "react-icons/fa";
import RemoveBtn from "./RemoveBtn";
import axios from "axios";

const TodoLists = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await axios.get("/api/todos");
        // console.log(res.data.todos);
        setTodos(res.data.todos);
      } catch (error) {
        console.log("Error getting Todos", error);
      }
    };
    getTodos();
  }, []);
  return (
    <>
      {todos.map((todo) => (
        <main
          key={todo._id}
          className="mt-4 w-full h-20 border-2 px-4 rounded-md flex justify-between items-center"
        >
          <div>
            <h1 className="font-semibold text-xl">{todo.title}</h1>
            <p>{todo.description}</p>
          </div>
          <div className="flex space-x-2">
            <Link href={`/updatetodo/${todo._id}`}>
              <FaPenAlt size={20} />
            </Link>
            <RemoveBtn id={todo._id} />
          </div>
        </main>
      ))}
    </>
  );
};

export default TodoLists;
