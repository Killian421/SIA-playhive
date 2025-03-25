"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Trending() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if user is logged in
    useEffect(() => {
        const user = localStorage.getItem("user");
        setIsLoggedIn(!!user);
    }, []);

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        router.push("/login");
    };

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">
                    <Link href="/">Play<span className="highlight">Hive</span></Link>
                </div>

                <ul className="nav-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/trending">Trending</Link></li>
                    <li><Link href="/append">Append</Link></li>
                    <li><Link href="/watchlist">Watchlist</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>

                <div className="auth-links">
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="logout-btn">Logout</button>
                    ) : (
                        <Link href="/login" className="login-link">Login</Link>
                    )}
                </div>
            </nav>

            {/* Trending Page Content */}
            <div className="trending-container">
                <h1>Trending Movies & Shows</h1>
                <p>Check out the latest trending movies and series!</p>
            </div>
        </div>
    );
}
