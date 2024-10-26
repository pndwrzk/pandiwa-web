"use client";

import Banner from "./components/banner";
import WhatCanIDo from "./components/whatCanIDo";
import TechAndTools from "./components/tech&tools";
import WorkExperience from "./components/workExperience";
 import Portofolio from "./components/portofolio";
import { useIsVisible } from "./hooks/useIsVisible";
import { useRef } from "react";

export default function Home() {


    const ref1 = useRef<HTMLDivElement | null>(null);
    const isVisible1 = useIsVisible(ref1);

    const ref2 = useRef<HTMLDivElement | null>(null);
    const isVisible2 = useIsVisible(ref2);

    const ref3 = useRef<HTMLDivElement | null>(null);
    const isVisible3 = useIsVisible(ref3);

    const ref4 = useRef<HTMLDivElement | null>(null);
    const isVisible4 = useIsVisible(ref4);

    


    return (
        <div className="pt-[60px]">
            <div className="py-[60px] bg-gray-100 dark:bg-gray-800/50" id="about-section">
                <Banner />
            </div>

            <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`} id="service-section">
                <div className="py-[60px]">
                    <WhatCanIDo />
                </div>

            </div>

            <div ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`} id="tech-section">
                <div className="py-[60px] bg-gray-800">
                    <TechAndTools />
                </div>
            </div>



            <div ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`} id="work-section">
            <div className="py-[60px]">
                <WorkExperience />
            </div>
            </div>

            <div ref={ref4} className={`transition-opacity ease-in duration-700 ${isVisible4 ? "opacity-100" : "opacity-0"}`} id="portofolio-section">
            <div
                // className="py-[60px] relative"
                // style={{
                //   backgroundImage: `url('https://images.pexels.com/photos/3334452/pexels-photo-3334452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
                //   backgroundAttachment: "fixed", // Tambahkan untuk efek parallax
                // }}
                className="py-[60px] bg-gray-100 dark:bg-gray-800/50"
            >
                <Portofolio />
            </div> 

            </div>
        </div>
    );
}
