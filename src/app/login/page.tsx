"use client";

import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      {/* Login Container (Transparent Background) */}
      <div className="p-10 rounded-lg shadow-lg text-center border-2 border-black w-[500px] bg-orange-500">
        <h2 className="text-xl font-bold mb-4 text-black">
          Enter your PlayHive Account
        </h2>

        {/* Email Input */}
        <div className="mb-4 text-left">
          <label className="block text-black font-semibold italic">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded bg-gray-200"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4 text-left">
          <label className="block text-black font-semibold italic">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded bg-gray-200"
          />
        </div>

        {/* Login Button */}
        <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg w-full hover:bg-yellow-300 text-lg">
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-sm mt-3">
  Don't have an account? 
  <a href="/register" className="text-blue-500 hover:underline"> Register</a>
</p>

      </div>
    </div>
  );
}
