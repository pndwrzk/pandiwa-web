"use client"
import { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const theme = localStorage.getItem('color-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(theme === 'dark' || (!theme && prefersDark));

        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('color-theme', newTheme);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-10  px-4 py-2 flex justify-between items-center bg-white dark:bg-gray-800 border-b-2 dark:border-gray-600`}>
            <a className="text-2xl font-bold text-black dark:text-white" href="#">
                Pandiwa<span className='text-orange-700'>Web.</span>
            </a>


            <div className="hidden lg:flex">
                <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                    <nav>
                        <ul className="md:flex items-center justify-between text-base text-gray-700 dark:text-white pt-4 md:pt-0">
                            <li><a className="md:p-4 py-3 px-0 block hover:font-bold" href="#">Home</a></li>
                            <li><a className="md:p-4 py-3 px-0 block hover:font-bold" href="#">About</a></li>
                            <li><a className="md:p-4 py-3 px-0 block hover:font-bold" href="#">Service</a></li>
                            <li><a className="md:p-4 py-3 px-0 block hover:font-bold" href="#">Experience</a></li>
                        </ul>
                    </nav>
                </div>
            </div>




            <div className="flex">
                <button id="theme-toggle" type="button" onClick={toggleTheme} className="py-1.5 px-3 m-1 text-center bg-gray-100 border border-gray-300 rounded-md text-black hover:bg-gray-100 dark:text-gray-300 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                    {isDarkMode ? (
                        <svg id="theme-toggle-dark-icon" className="w-5 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    ) : (
                        <svg id="theme-toggle-dark-icon" className="w-5 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    )}
                </button>
            </div>


        </nav>
    );
};

export default Navbar;
