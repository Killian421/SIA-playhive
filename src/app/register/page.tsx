"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration Successful!");
    router.push("/"); // Redirect to login page
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen w-screen">
      {/* PlayHive Title (Top-Left) */}
      <h1 className="absolute top-5 left-10 text-4xl font-bold">
        <span className="text-black">Play</span>
        <span className="text-yellow-400">Hive</span>
      </h1>

      {/* Login Navbar (Top-Right) */}
      <nav className="absolute top-5 right-10">
        <Link href="/" className="text-black font-semibold text-lg hover:underline">
          Login
        </Link>
      </nav>

      {/* Register Container (Wider and Shorter) */}
      <div className="p-10 rounded-lg shadow-lg text-center border-2 border-black w-[500px] bg-orange-500">
        <h2 className="text-xl font-bold mb-4 text-black">Create Your PlayHive Account</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="text-left">
            <label className="block text-black font-semibold italic">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded bg-gray-200"
            />
          </div>

          <div className="text-left">
            <label className="block text-black font-semibold italic">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded bg-gray-200"
            />
          </div>

          <div className="text-left">
            <label className="block text-black font-semibold italic">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded bg-gray-200"
            />
          </div>

          <div className="text-left">
            <label className="block text-black font-semibold italic">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded bg-gray-200"
            />
          </div>

          <button type="submit" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg w-full hover:bg-yellow-300 text-lg">
            Register
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-center text-sm mt-3">
          Already have an account?
          <Link href="/" className="text-blue-500 hover:underline"> Login</Link>
        </p>
      </div>
    </div>
  );
}
