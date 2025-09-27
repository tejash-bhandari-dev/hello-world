"use client"

// Generate layout for auth pages with active path functionality and styles. create Link to Register, 
// login and forgot password pages.
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import React from "react";
import { useState } from "react";

const navLinks = [
    { href: "/register", label: "Register" },
    { href: "/login", label: "Login" },
    { href: "/forgot-password", label: "Forgot Password" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [input, setInput] = useState("");

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow">
                <div>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");
                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`px-3 py-2 rounded ${isActive
                                    ? "bg-blue-500 text-white font-bold"
                                    : "text-blue-500 hover:bg-blue-100"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );

                    })}
                </div>
                <div>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type something..."
                        className="mt-4 w-full px-3 py-2 border rounded to-black"
                    />
                    <p className="mt-2 text-gray-600">You typed: {input}</p>
                </div>
                <div className="my-4 border-t"></div>
                <div className="mb-4 text-center text-gray-600">Auth Layout Header</div>
                <div>{children}</div>
            </div>
        </div>
    );
}
export default AuthLayout;