

export default function WhatCanIDo() {
    return (

        <div className="px-6 md:px-[150px] flex flex-col gap-[100px]">
            <div>
                <div className="flex flex-col text-center">
                    <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-800 dark:text-white ">What Can I Do</h2>
                    <p className="mb-12 text-lg text-gray-500 dark:text-gray-50">Here is a few of the awesome Services we provide.</p>
                </div>
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white border p-2 border-gray-800 dark:border-white">
                                <svg
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-gray-800 dark:text-gray-300" // Tailwind classes for size and color
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M8.01005 0.858582L6.01005 14.8586L7.98995 15.1414L9.98995 1.14142L8.01005 0.858582Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M12.5 11.5L11.0858 10.0858L13.1716 8L11.0858 5.91422L12.5 4.5L16 8L12.5 11.5Z"
                                            fill="currentColor"
                                        ></path>
                                        <path
                                            d="M2.82843 8L4.91421 10.0858L3.5 11.5L0 8L3.5 4.5L4.91421 5.91422L2.82843 8Z"
                                            fill="currentColor"
                                        ></path>
                                    </g>
                                </svg>
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-800 dark:text-gray-300">Full-Stack Development</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-50">
                            Build complete web applications from front-end to back-end.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white border p-2 border-gray-800 dark:border-white">
                                <svg
                                    viewBox="0 0 48 48"
                                    enableBackground="new 0 0 48 48"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    className="w-12 h-12 text-gray-800 dark:text-gray-300" // Tailwind classes for size and color
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            fill="currentColor" // Changed fill to currentColor
                                            d="M46.25,0H2.875H0v8v32h20v8h20v-8h8V8V0H46.25z M36,3c1.104,0,2,0.896,2,2s-0.896,2-2,2s-2-0.896-2-2 S34.896,3,36,3z M6,3h24c1.104,0,2,0.896,2,2s-0.896,2-2,2H6C4.896,7,4,6.104,4,5S4.896,3,6,3z M30,46.594c-1.104,0-2-0.896-2-2 s0.896-2,2-2s2,0.896,2,2S31.104,46.594,30,46.594z M36,40.969H24V40v-4V18.083h12V36v4V40.969z M44,36h-4V14.083H20V36H4V10h40V36z M42,7c-1.104,0-2-0.896-2-2s0.896-2,2-2s2,0.896,2,2S43.104,7,42,7z"
                                        ></path>
                                    </g>
                                </svg>

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-800 dark:text-gray-300">Responsive Design
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-50">
                            Create user-friendly interfaces that work seamlessly across all devices and screen sizes.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white border border-gray-800 dark:border-white">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-gray-800 dark:text-gray-300" // Tailwind classes for size and color
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M21.3,19a2.42,2.42,0,0,1-2.5.56l-2.35,2.35a.34.34,0,0,1-.49,0l-1-1a.36.36,0,0,1,0-.49l2.36-2.35a2.39,2.39,0,0,1,3.39-2.91L19.12,16.8l1,1,1.62-1.62A2.39,2.39,0,0,1,21.3,19ZM22,8v5.76A4.47,4.47,0,0,0,19.5,13a4.57,4.57,0,0,0-1.29.19V9.29H16.66V14A4.5,4.5,0,0,0,15,17.5a4.07,4.07,0,0,0,0,.5H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H20A2,2,0,0,1,22,8ZM11,15,9.09,9.27H7L5.17,15h1.7l.29-1.07H9L9.29,15Zm4.77-3.89a1.67,1.67,0,0,0-.55-1.35,2.43,2.43,0,0,0-1.62-.47h-2V15h1.54V13.11h.44a2.75,2.75,0,0,0,1-.17,1.82,1.82,0,0,0,.67-.44,1.63,1.63,0,0,0,.36-.64A2.36,2.36,0,0,0,15.75,11.11Zm-7.3.62-.12-.44-.15-.58c0-.21-.08-.37-.11-.5a4.63,4.63,0,0,1-.1.48c0,.19-.08.38-.13.57s-.08.34-.12.47l-.24.93H8.69Zm5.59-1a.63.63,0,0,0-.5-.17h-.4v1.31h.31a.9.9,0,0,0,.37-.07.59.59,0,0,0,.27-.22.75.75,0,0,0,.11-.42A.57.57,0,0,0,14,10.71Z"
                                            fill="currentColor" // Use currentColor to inherit the color from Tailwind classes
                                        ></path>
                                        <rect width="24" height="24" fill="none"></rect>
                                    </g>
                                </svg>

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-800 dark:text-gray-300">API Development
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-50"> Design and implement RESTful APIs to enable smooth communication between different systems and applications.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 border border-gray-800 dark:border-white">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 h-8 text-gray-800 dark:text-gray-300" // Use Tailwind classes for size and color
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            fill="none"
                                            stroke="currentColor" // Change stroke to currentColor
                                            strokeWidth="2"
                                            d="M23,1 C23,1 16.471872,0.541707069 14,3 C13.9767216,3.03685748 10,7 10,7 L5,8 L2,10 L10,14 L14,22 L16,19 L17,14 C17,14 20.9631426,10.0232786 21,10 C23.4582929,7.5281282 23,1 23,1 Z M17,8 C16.4475,8 16,7.5525 16,7 C16,6.4475 16.4475,6 17,6 C17.5525,6 18,6.4475 18,7 C18,7.5525 17.5525,8 17,8 Z M7,17 C6,16 4,16 3,17 C2,18 2,22 2,22 C2,22 6,22 7,21 C8,20 8,18 7,17 Z"
                                        ></path>
                                    </g>
                                </svg>


                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-800 dark:text-gray-300">
                                Deployment Practices
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-50">
                            Familiarity with CI/CD pipelines to automate deployment processes and improve code quality.
                        </dd>
                    </div>
                </dl>
            </div>

        </div>

    )
}