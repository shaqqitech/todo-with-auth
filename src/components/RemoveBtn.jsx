"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await axios.delete(`/api/todos?id=${id}`);
      //   console.log(res.data);
      router.refresh();
    } catch (error) {
      console.log("Error deleting Todo", error);
    }
  };

  return (
    <button onClick={handleDelete} className="text-red-500">
      <FaTrashAlt size={20} />
    </button>
  );
};

export default RemoveBtn;
