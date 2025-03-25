import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddMovie() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [link, setLink] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, genre, link };
    const storedMovies = JSON.parse(localStorage.getItem("movies") || "[]");
    storedMovies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(storedMovies));
    router.push("/movies");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Add a Movie or Series</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" placeholder="Title" className="border p-2" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Genre" className="border p-2" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        <input type="url" placeholder="Streaming Link" className="border p-2" value={link} onChange={(e) => setLink(e.target.value)} required />
        <button type="submit" className="bg-blue-500 text-white p-2">Add</button>
      </form>
    </div>
  );
}
