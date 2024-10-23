"use client"

import { handleScroll } from "@/app/utils/scrollMenu";

export default function BottomNavigation() {
    return (
        // footer
        <div className="block md:hidden">
            <div className="fixed bottom-0 left-0 z-50 w-full h-[80px] bg-white dark:bg-gray-800  border-t-2 dark:border-gray-600 dark:bg-black-700 dark:border-black-600">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <button onClick={() => handleScroll('about-section')} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-black-50 dark:hover:bg-black-800 group">
                        <svg className="w-6 h-6 mb-1 text-gray-800 dark:text-gray-100" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z" fill="currentColor"></path>
                                <path d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z" fill="currentColor"></path>
                            </g>
                        </svg>
                        <span className="text-sm text-gray-800 dark:text-gray-100 ">About</span>
                    </button>
                    <button onClick={() => handleScroll('service-section')} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-black-50 dark:hover:bg-black-800 group">
                        <svg
                            className="w-6 h-6 mb-1 text-gray-800 dark:text-gray-100"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15 1H1V15H15V1ZM6 5L7.41421 6.41421L5.82843 8L7.41421 9.58579L6 11L3 8L6 5ZM10 5L8.58579 6.41421L10.1716 8L8.58579 9.58579L10 11L13 8L10 5Z"
                                    fill="currentColor"
                                />
                            </g>
                        </svg>
                        <span className="text-sm text-gray-800 dark:text-gray-100 ">Service</span>
                    </button>
                    <button onClick={() => handleScroll('work-section')} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-black-50 dark:hover:bg-black-800 group">
                        <svg
                            className="w-6 h-6 mb-1 text-gray-800 dark:text-gray-100"
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 64 64"
                            enableBackground="new 0 0 64 64"
                            xmlSpace="preserve"
                            fill="currentColor"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    fill="currentColor"
                                    d="M56,0H8C5.789,0,4,1.789,4,4v56c0,2.211,1.789,4,4,4h20V48h8v16h20c2.211,0,4-1.789,4-4V4 C60,1.789,58.211,0,56,0z M28,40h-8v-8h8V40z M28,24h-8v-8h8V24z M44,40h-8v-8h8V40z M44,24h-8v-8h8V24z"
                                />
                            </g>
                        </svg>
                        <span className="text-sm text-gray-800 dark:text-gray-100 ">Experience</span>
                    </button>
                    <button  onClick={() => handleScroll('portofolio-section')} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-black-50 dark:hover:bg-black-800 group">
                        <svg
                            className="w-6 h-6 mb-1 text-gray-800 dark:text-gray-100"
                            fill="currentColor"
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593C381.469,407.717,366.807,418.738,351.021,427.514z"></path>
                            </g>
                        </svg>
                        <span className="text-sm text-gray-800 dark:text-gray-100 ">Portofolio</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
