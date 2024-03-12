"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTopic = ({id, title, description}) => {
  const router = useRouter();
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(`/api/todos/${id}`, { newTitle, newDescription });
      // console.log(res.data);
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log("Error while creatng Todo", error);
    }
  };

  return (
    <main className="w-full flex-col space-y-3">
      <Navbar />
      <form onSubmit={handleSubmit} className="w-full h-full space-y-3">
        <input
          type="text"
          placeholder="Add Topic"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full px-3 py-2 rounded-md outline-none text-black"
        />
        <input
          type="text"
          placeholder="Add Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          className="w-full px-3 py-2 rounded-md outline-none text-black"
        />
        <button
          type="submit"
          className="w-fit px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-black font-semibold"
        >
          Update Topic
        </button>
      </form>
    </main>
  );
};

export default EditTopic;
