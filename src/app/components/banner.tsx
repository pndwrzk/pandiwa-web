import Eye from "@/app/components/eye"


export default function Banner() {

    return (
        <div className="flex flex-col md:flex-row px-0 md:px-[150px] gap-3 md:gap-0">
            <div className="w-full text-center md:text-left px-4 md:px-0  ">
                <div className="flex flex-row gap-1 bg-gradient-to-tr justify-center md:justify-start">
                    <h1 className="text-[40px] font-bold">Hi, I'm </h1>
                    <span className="w-max">
                        <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black text-[40px] text-orange-700 dark:text-orange-600 font-bold">
                            Pandiwa.
                        </h1>
                    </span>
                </div>

                <p
                    className="animate-fade mt-1 text-base text-black dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-2 md:text-xl lg:mx-0">
                    Software developer with over 3 years of experience in building scalable and efficient web applications. I focus on creating high-performance, maintainable solutions that deliver real value through clean and reliable code.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start mb-[5px] md:mb-0">
                    <div className="rounded-md shadow">
                        <a href="#"
                            className="w-full flex items-center justify-center  shadow px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-700 dark:bg-orange-600  hover:bg-orange-600  dark:hover:bg-orange-500 hover:border-orange-600 md:py-4 md:text-lg md:px-10">
                            Contact Me
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#"
                            className="w-full flex items-center hover:font-bold justify-center shadow px-8 py-3 border border-gray-800 text-base font-medium rounded-md text-gray-800  hover:outline  dark:border-white dark:text-gray-300  md:py-4 md:text-lg md:px-10">
                            View Projects
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full  md:relative ">
                <div className="relative">
                    <div className="absolute w-full flex justify-center  h-full   px-[20px] ">
                        <div className="w-full rounded-xl overflow-hidden flex flex-col -lg bg-gray-800 shadow">
                        </div>

                    </div>
                    <div className="bottom-0 relative flex justify-center bg-none">
                        <div className=" absolute    bg-none  mt-[180px] md:mt-[115px]  ">
                            <div className="flex space-x-[48px] md:space-x-[30px]">
                                <Eye pupilId="left-pupil" />
                                <Eye pupilId="right-pupil" />
                            </div>
                        </div>
                        <img
                            className={`h-[500px] md:h-[320px] object-cover `}
                            src="images/photo2.png"
                            alt=""
                        />
                        <div className=" absolute    bg-none bottom-0 right-0 mr-7 mb-[2px] font-light text-[12px] text-gray-50 ">
                            picture source: <a target="_blank" className="hover:underline" href="https://www.freepik.com/free-psd/3d-rendering-avatar_70822507.htm#fromView=search&page=1&position=1&uuid=c782ae88-0136-4e4d-bbe3-925c5cad6708" >www.freepik.com</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}