"use client";  // Add this line at the top

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Movies() {
  const [movies, setMovies] = useState<{ title: string; genre: string; link: string }[]>([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies") || "[]");
    if (Array.isArray(storedMovies)) {
      setMovies(storedMovies.filter(movie => movie.title && movie.genre && movie.link));
    }
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Movies & Series</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index} className="border p-2 my-2">
            <strong>{movie.title || "Unknown Title"}</strong> ({movie.genre || "Unknown Genre"}) -
            {movie.link ? (
              <a href={movie.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Watch
              </a>
            ) : (
              <span className="text-red-500"> No Link Available</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
