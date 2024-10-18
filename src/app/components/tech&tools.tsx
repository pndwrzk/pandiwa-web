import { useState, useRef } from "react";


const TechAndTools = () => {
    const [skip] = useState(1);
    const [atBeginning, setAtBeginning] = useState(false);
    const [atEnd, setAtEnd] = useState(false);
    const sliderRef = useRef<HTMLUListElement>(null);

    const next = () => {
        to((current, offset) => current + offset * skip);
    };

    const prev = () => {
        to((current, offset) => current - offset * skip);
    };

    const to = (strategy: (current: number, offset: number) => number) => {
        if (sliderRef.current) {
            const slider = sliderRef.current;
            const current = slider.scrollLeft;
            const offset = slider.firstElementChild?.getBoundingClientRect().width || 0;
            slider.scrollTo({ left: strategy(current, offset), behavior: "smooth" });
        }
    };

    const disableNextAndPreviousButtons = (e: any) => {
        if (sliderRef.current) {
            const slideEls = sliderRef.current.children;
            const target = e.target;

            if (slideEls[0] === target) {
                setAtBeginning(true);
            } else if (slideEls[slideEls.length - 1] === target) {
                setAtEnd(true);
            } else {
                setAtBeginning(false);
                setAtEnd(false);
            }
        }
    };

    return (
        <div className="flex flex-col md:flex-row text-white pl-4 md:px-[30px] pr-4 md:pr-10 gap-1 ">
            <div className="w-full md:w-[300px] flex  md:flex-col flex-row  gap-10  md:gap-5  justify-center px-3">
                <div className="flex flex-col ">
                    <h2 className="mb-1 text-3xl font-extrabold leading-tight text-white ">Tech & Tools</h2>
                    <p className=" text-lg text-gray-200 dark:text-gray-50">Here is a few of the awesome Services we provide.</p>
                </div>
                <div className="hidden md:inline-flex  space-x-5">
                    <button
                       className={`bg-white hover:font-bold size-7 flex focus:bg-white rounded items-center text-gray-800 ${atBeginning ? "opacity-50" : ""
                            }`}
                        aria-disabled={atBeginning}
                        onClick={prev}
                    >
                        <span aria-hidden="true" className="mx-auto">
                            ←
                        </span>
                        <span className="sr-only">Skip to previous slide page</span>
                    </button>
                    <button
                        className={`bg-white hover:font-bold size-7 flex focus:bg-white rounded items-center text-gray-800 ${atEnd ? "opacity-50" : ""
                            }`}
                        aria-disabled={atEnd}
                        onClick={next}
                    >
                        <span aria-hidden="true" className="mx-auto">
                            →
                        </span>
                        <span className="sr-only">Skip to next slide page</span>
                    </button>
                </div>
            </div>
            <div className="w-full flex flex-col">
                <div>
                    <ul
                        className="flex  overflow-x-scroll  scrollbar-hide   snap-mandatory snap-x w-full  rounded-l-xl"
                        role="listbox"
                        aria-labelledby="carousel-content-label"
                        tabIndex={0}
                        ref={sliderRef}
                    >
                        {/* Slide 1 */}
                        <li
                            className="justify-center w-full flex flex-col shrink-0 snap-start h-full  "
                            role="option"
                            onFocus={disableNextAndPreviousButtons}
                        >

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 px-2">
                                <div className=" rounded-lg text-white ">
                                    <div
                                        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                                <path
                                                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                                </path>
                                            </svg>
                                            <div className="space-y-2">
                                                <h3 className="font-bold">Next.js 13</h3>
                                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" rounded-lg text-white ">
                                    <div
                                        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                                <path
                                                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                                </path>
                                            </svg>
                                            <div className="space-y-2">
                                                <h3 className="font-bold">Next.js 13</h3>
                                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> <div className=" rounded-lg text-white ">
                                    <div
                                        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                                <path
                                                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                                </path>
                                            </svg>
                                            <div className="space-y-2">
                                                <h3 className="font-bold">Next.js 13</h3>
                                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> <div className=" rounded-lg text-white ">
                                    <div
                                        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                                <path
                                                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                                </path>
                                            </svg>
                                            <div className="space-y-2">
                                                <h3 className="font-bold">Next.js 13</h3>
                                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="justify-center w-full flex flex-col shrink-0 snap-start h-full  "
                            role="option"
                            onFocus={disableNextAndPreviousButtons}
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 px-2">
                                <div className="   rounded-lg text-white ">
                                    <div
                                        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                                <path
                                                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                                </path>
                                            </svg>
                                            <div className="space-y-2">
                                                <h3 className="font-bold">Next.js 13</h3>
                                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> <div className="rounded-lg text-white ">
                                    <div
                                        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                                <path
                                                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                                </path>
                                            </svg>
                                            <div className="space-y-2">
                                                <h3 className="font-bold">Next.js 13</h3>
                                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> <div className=" rounded-lg text-white ">
                                    <div
                                        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                                <path
                                                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                                </path>
                                            </svg>
                                            <div className="space-y-2">
                                                <h3 className="font-bold">Next.js 13</h3>
                                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> <div className="  border rounded-lg text-white ">
                                    <div
                                        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                                <path
                                                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                                </path>
                                            </svg>
                                            <div className="space-y-2">
                                                <h3 className="font-bold">Next.js 13</h3>
                                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="justify-center w-full flex flex-col shrink-0 snap-start h-full  "
                            role="option"
                            onFocus={disableNextAndPreviousButtons}
                        >
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 px-2">
                                <div className="   rounded-lg text-white ">
                                    <div
                                        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                                <path
                                                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                                </path>
                                            </svg>
                                            <div className="space-y-2">
                                                <h3 className="font-bold">Next.js 13</h3>
                                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> <div className="rounded-lg text-white ">
                                    <div
                                        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                                <path
                                                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                                </path>
                                            </svg>
                                            <div className="space-y-2">
                                                <h3 className="font-bold">Next.js 13</h3>
                                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> <div className=" rounded-lg text-white ">
                                    <div
                                        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                                <path
                                                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                                </path>
                                            </svg>
                                            <div className="space-y-2">
                                                <h3 className="font-bold">Next.js 13</h3>
                                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> <div className="  border rounded-lg text-white ">
                                    <div
                                        className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
                                        <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                                            <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                                                <path
                                                    d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z">
                                                </path>
                                            </svg>
                                            <div className="space-y-2">
                                                <h3 className="font-bold">Next.js 13</h3>
                                                <p className="text-sm text-muted-foreground">App dir, Routing, Layouts, Loading UI and API routes.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        {/* Add more slides here */}

                    </ul>
                </div>


                <div className=" flex md:hidden  justify-center  space-x-5 mt-5">
                    <button
                        className={`bg-white hover:font-bold size-7 flex focus:bg-white rounded items-center text-gray-800 ${atBeginning ? "opacity-50" : ""
                        }`}
                        aria-disabled={atBeginning}
                        onClick={prev}
                    >
                        <span aria-hidden="true" className="mx-auto">
                            ←
                        </span>
                        <span className="sr-only">Skip to previous slide page</span>
                    </button>
                    <button
                        className={`bg-white hover:font-bold size-7 flex focus:bg-white rounded items-center text-gray-800 ${atEnd ? "opacity-50" : ""
                        }`}
                        aria-disabled={atEnd}
                        onClick={next}
                    >
                        <span aria-hidden="true" className="mx-auto">
                            →
                        </span>
                        <span className="sr-only">Skip to next slide page</span>
                    </button>
                </div>

            </div>
        </div>

    );
};

export default TechAndTools;
