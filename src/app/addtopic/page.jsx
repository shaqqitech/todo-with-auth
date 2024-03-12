"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddTopic = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/todos", { title, description });
      // console.log(res.data);
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 rounded-md outline-none text-black"
        />
        <input
          type="text"
          placeholder="Add Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 rounded-md outline-none text-black"
        />
        <button
          type="submit"
          className="w-fit px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-black font-semibold"
        >
          Add Topic
        </button>
      </form>
    </main>
  );
};

export default AddTopic;
