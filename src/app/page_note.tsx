"use client"

import { useState, useEffect } from "react";
import BottomNavigation from "./components/layouts/bottomNavigation";
import Eye from "./components/eye";
import FadingImage from "./components/findingImage";





export default function Home() {

    const [isVisible, setIsVisible] = useState(true);
    const [text, setText] = useState<string>('');
    const fullText: string = 'Pandiwa.';

    useEffect(() => {
        const handleScroll = () => {
            // Set the visibility based on the scroll position
            console.log(window.scrollY)

            if (window.scrollY > 70) { // Adjust this value based on when you want the image to disappear
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const myNameArr = ['P', 'A', 'N', 'D', 'I', 'W', 'A'];
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < myNameArr.length - 1) {
                setText((prev) => `${prev}${myNameArr[index]}`);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 200); // kecepatan ketikan (dalam milidetik)

        return () => clearInterval(typingInterval); // bersihkan interval saat komponen di-unmount
    }, []);

    return (

        <>
            <header className="fixed top-0 left-0 right-0 bg-white shadow p-4 z-10">
                <div className="text-black font-bold text-3xl  hover:cursor-pointer h-5">
                </div>

            </header>

            <main className="max-w-[500px]">
                <div className="min-h-screen flex flex-col py-8 mt-[70px] gap-[30px]">
                    <div className="px-6">
                        <div className="rounded-xl overflow-hidden  flex flex-col shadow hover:shadow-md max-w-sm bg-white cursor-pointer px-4 py-6min-h-full  border-[2px] border-black">
                            <h1 className="text-[38px] font-bold ">Hello, I'm <span className="text-red-700">{text}</span></h1>
                            <p className="mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, dignissimos et sunt accusamus esse pariatur facere sapiente molestiae vitae, quod, unde.</p>

                            <div className="col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1 mt-4">
                                {/* <div className="font-medium text-black">GET IN TOUCH</div> */}
                                <ul className=" flex md:order-1 md:mb-0">

                                    <li>
                                        <a className=" inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 text-black dark:focus:ring-gray-700"
                                            aria-label="Twitter" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-5 w-5">
                                                <path
                                                    d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z">
                                                </path>
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a className=" inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 text-black dark:focus:ring-gray-700"
                                            aria-label="Instagram" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-5 w-5">
                                                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                                                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                                                <path d="M16.5 7.5l0 .01"></path>
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 text-black dark:focus:ring-gray-700"
                                            aria-label="Facebook" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-5 w-5">
                                                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a className="inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 text-black dark:focus:ring-gray-700"
                                            aria-label="RSS" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="h-5 w-5">
                                                <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                                <path d="M4 4a16 16 0 0 1 16 16"></path>
                                                <path d="M4 11a9 9 0 0 1 9 9"></path>
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a className=" inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 text-black dark:focus:ring-gray-700"
                                            aria-label="Github" href="https://github.com/onwidget/tailnext"><svg xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" className="h-5 w-5">
                                                <path
                                                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                                                </path>
                                            </svg>
                                        </a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute w-full flex justify-center  h-full   px-[20px]">
                            <div className="w-full rounded-xl overflow-hidden flex flex-col -lg shadow-red-900/50 border border-transparent hover:shadow-2xl hover:shadow-orange-900/50 max-w-sm bg-gradient-to-b from-red-800 to-red-600 cursor-pointer transform hover:scale-105 transition-transform duration-300 ">
                            </div>



                        </div>
                        <div className="bottom-0 relative flex justify-center bg-none">
                            <div className=" absolute    bg-none  mt-[180px]  ">
                                <div className="flex space-x-[48px]">
                                    <Eye pupilId="left-pupil" />
                                    <Eye pupilId="right-pupil" />

                                </div>

                            </div>


                            <img
                                className={`h-[500px] object-cover  `}
                                src="images/photo2.png"
                                alt=""
                            />


                        </div>

                    </div>




                </div>



                <div className="min-h-screen  px-6 flex flex-col gap-[100px]">
                    <div>
                        <div className="flex flex-col text-center">
                            <h2 className="mb-1 text-3xl font-extrabold leading-tight text-black ">Services</h2>
                            <p className="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
                        </div>
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-black">Full-Stack Developmen</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Build complete web applications from front-end to back-end.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-black">Responsive Design
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Create user-friendly interfaces that work seamlessly across all devices and screen sizes.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-black">API Development
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500"> Design and implement RESTful APIs to enable smooth communication between different systems and applications.
                                </dd>
                            </div>
                            <div className="relative">
                                <dt>
                                    <div
                                        className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                        <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />

                                    </div>
                                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-black">
                                        DevOps Practices
                                    </p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    Familiarity with CI/CD pipelines to automate deployment processes and improve code quality.
                                </dd>
                            </div>
                        </dl>
                    </div>

                </div>
                <div className="min-h-screen  px-6 flex flex-col gap-[100px">
                    <div className="flex flex-col text-center">
                        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-black ">Tools & Technologies</h2>
                        <p className="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div
                            className=" overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-gray-500 p-2">
                            <div className="flex h-[180px] w-full flex-col justify-center items-center rounded-md p-6 gap-4">
                                <svg viewBox="0 0 24 24" className="h-[150px] w-[150px] fill-current">
                                    <path
                                        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                    </path>
                                </svg>
                                <div className="space-y-2">
                                    <h3 className="font-bold text-[30px]">Next.js 13</h3>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </main>


            <BottomNavigation />
        </>

    );
}
