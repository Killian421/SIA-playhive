"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check localStorage for authentication
    useEffect(() => {
        const user = localStorage.getItem("user");
        setIsLoggedIn(!!user);
    }, []);

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        router.push("/login"); // Redirect to login page
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="logo">
                <Link href="/">Play<span className="highlight">Hive</span></Link>
            </div>

            {/* Navigation Links */}
            <ul className="nav-links">
                <li><Link href="/trending">Trending</Link></li>
                <li><Link href="/append">Append</Link></li>
                <li><Link href="/watchlist">Watchlist</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>

            {/* Auth Buttons */}
            <div className="auth-links">
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="logout-btn">Logout</button>
                ) : (
                    <Link href="/login" className="login-link">Login</Link>
                )}
            </div>
        </nav>
    );
}
