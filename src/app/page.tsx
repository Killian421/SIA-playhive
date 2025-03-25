"use client"; // Ensures client-side rendering

import Login from "./login/page"; // Import the Login component
import Register from "./register/page";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Navbar */}
      <nav className="absolute top-5 right-5">
        <a href="#" className="text-lg font-semibold text-black hover:text-yellow-400">
          Login
        </a>
      </nav>

      {/* Top-Left PlayHive Title */}
      <h1 className="absolute top-5 left-5 text-4xl font-bold">
        <span className="text-black">Play</span>
        <span className="text-yellow-400">Hive</span>
      </h1>

      {/* Centered Login Component */}
      <div className="p-6 rounded-lg shadow-lg">
        <Login />
      </div>
    </div>
  );
}
