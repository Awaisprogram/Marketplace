"use client";

import Link from "next/link";
import { useState } from "react";


export default function LoginForm() {
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const response = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        name: form.name.valueOf,
        email: form.email.value,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="h-screen flex justify-center items-center"> 
    <div className="p-16  bg-gray-100 rounded shadow-lg max-w-md mx-auto mt-6">
      <h1 className="text-4xl font-bold text-center mb-8">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <Link href='/auth'>
        <button
          type="submit"
          className="w-full bg-green-500 text-white my-6 py-2 rounded hover:bg-green-600 transition"
        >
          Login
        </button>
        </Link>
        <div className="text-center py-4">
          <h3>Do not have an account?</h3>
          <Link href="/signup">
          <h5 className="underline text-Color hover:opacity-90">Create Account</h5></Link>
          
        </div>
      </form>
      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
    </div>
  );
}
