'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  const handleLogOut = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log("Error while logging out", error);
    }
  };
  return (
    <main className="w-full h-16 bg-blue-500 flex justify-between items-center px-6 mt-3 rounded-md">
      <Link href={"/"} className="font-bold text-black text-3xl">
        Todo
      </Link>
      <button
        onClick={handleLogOut}
        className="w-fit px-4 py-2 rounded-md bg-black text-blue-500 font-semibold"
      >
        Log Out
      </button>
    </main>
  );
};

export default Navbar;
