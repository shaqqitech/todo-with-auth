"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LogIn = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisable, setButtonDisable] = useState(false);

  useEffect(() => {
    if (user.password.length > 0 && user.email.length > 0) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/login", user);
      console.log(res.data);
      router.push("/");
    } catch (error) {
      console.log("Error creating Todo", error);
    }
  };

  return (
    <main className="w-screen mt-32 flex justify-center items-center flex-col space-y-3">
      <h1 className="font-bold text-3xl text-blue-500">Log In</h1>
      <form
        onClick={handleSubmit}
        className="w-full flex flex-col justify-center items-center space-y-2"
      >
        <label htmlFor="email" className="font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="px-4 py-1 rounded-md outline-none text-black"
        />
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="px-4 py-1 rounded-md outline-none text-black"
        />
        <button
          type="submit"
          className="w-fit bg-blue-500 hover:bg-blue-600 rounded-md px-10 py-1 text-black font-bold mt-5"
        >
          {buttonDisable ? "No Log In" : "Log In"}
        </button>
      </form>
      <div>
        Don't have an account ?{" "}
        <Link href={"/signup"} className="font-bold text-blue-500">
          Sign up
        </Link>
      </div>
    </main>
  );
};

export default LogIn;
