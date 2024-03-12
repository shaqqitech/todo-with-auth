import EditTopic from "@/components/EditTopic";
import axios from "axios";
import React from "react";

const getTodoById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/todos/${id}`, {
      headers: { "Cache-Control": "no-store" },
    });
    return res.data;
  } catch (error) {
    console.log("Error wile getting the single task", error);
  }
};

const UpdateTodo = async ({ params }) => {
  const { id } = params;
  const { todo } = await getTodoById(id);
  const { title, description } = todo;
  return <EditTopic id={id} title={title} description={description} />;
};

export default UpdateTodo;
