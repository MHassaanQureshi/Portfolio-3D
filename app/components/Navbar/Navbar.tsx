"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-red-600 font-bold text-3xl">HQ</h1>
                
                <div className="block lg:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className="text-white focus:outline-none"
                    >
                        {menuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
               
                <ul className="hidden lg:flex space-x-8 text-2xl">
                    <li>
                        <Link href="/" className="hover:border-b-2 border-red-700">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/Aboutpage" className="hover:border-b-2 border-red-700">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/skillspage" className="hover:border-b-2 border-red-700">
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link href="/projectspage" className="hover:border-b-2 border-red-700">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/contactpage" className="hover:border-b-2 border-red-700">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            
            {menuOpen && (
                <div className="lg:hidden">
                    <ul className="flex flex-col space-y-4 mt-4">
                        <li>
                            <Link href="/Aboutpage" className="hover:border-b-2 border-red-700">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/skillspage" className="hover:border-b-2 border-red-700">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link href="/projectspage" className="hover:border-b-2 border-red-700">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contactpage" className="hover:border-b-2 border-red-700">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
