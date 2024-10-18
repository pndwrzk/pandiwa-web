import Eye from "@/app/components/eye"


export default function Banner() {

    return (
        <div className="flex flex-col md:flex-row px-0 md:px-[150px] gap-3 md:gap-0">
            <div className="w-full text-center md:text-left px-4 md:px-0  ">
                <div className="flex flex-row gap-1 bg-gradient-to-tr pl-8 md:pl-0">
                    <h1 className="text-[40px] font-bold">Hi, I'am </h1>
                    <span className="w-max">
                        <h1
                            className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-[40px] text-orange-800 font-bold">
                            Pandiwa.
                        </h1>
                    </span>
                </div>

                <p
                    className="mt-1 text-base text-black dark:text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-2 md:text-xl lg:mx-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corrupti doloremque impedit veniam magnam culpa est neque! Numquam minus error commodi, in soluta excepturi odio deleniti aliquam dicta animi debitis.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start mb-[5px] md:mb-0">
                    <div className="rounded-md shadow">
                        <a href="#"
                            className="w-full flex items-center justify-center  shadow px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 dark:bg-gray-100  dark:hover:bg-gray-800    dark:text-gray-800 hover:bg-gray-900  hover:border-gray-800 md:py-4 md:text-lg md:px-10">
                            Contact Me
                        </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <a href="#"
                            className="w-full flex items-center justify-center shadow px-8 py-3 border border-gray-800 text-base font-medium rounded-md text-gray-800  hover:bg-gray-700 hover:text-white dark:border-white dark:text-white  md:py-4 md:text-lg md:px-10">
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

                    </div>
                </div>
            </div>

        </div>
    )

}