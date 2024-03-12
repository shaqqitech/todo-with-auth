"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [buttonDisable, setButtonDisable] = useState(false);

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.password.length > 0 &&
      user.email.length > 0
    ) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/signup", user);

      console.log(res.data);
      router.push("/login");
    } catch (error) {
      console.log("Error creating Todo", error);
    }
  };

  return (
    <main className="w-screen mt-28 flex justify-center items-center flex-col space-y-3">
      <h1 className="font-bold text-3xl text-blue-500">Sign Up</h1>
      <form
        onClick={handleSubmit}
        className="w-full flex flex-col justify-center items-center space-y-2"
      >
        <label htmlFor="username" className="font-semibold">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="px-4 py-1 rounded-md outline-none text-black"
        />
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
          {buttonDisable ? "No Sing Up" : "Sign Up"}
        </button>
      </form>
      <div>
        Already have an account ?{" "}
        <Link href={"/login"} className="font-bold text-blue-500">
          Log In
        </Link>
      </div>
    </main>
  );
};

export default SignUp;
