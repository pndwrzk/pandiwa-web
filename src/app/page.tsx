"use client";

import Banner from "./components/banner";
import WhatCanIDo from "./components/whatCanIDo";
import TechAndTools from "./components/tech&tools";
import WorkExperience from "./components/workExperience";
// import Portofolio from "./components/portofolio";
import Footer from "./components/layouts/footer";
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
            <div className="py-[60px] bg-gray-100 dark:bg-gray-800/50">
                <Banner />
            </div>

            <div ref={ref1} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                <div className="py-[60px]">
                    <WhatCanIDo />
                </div>

            </div>

            <div ref={ref2} className={`transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
                <div className="py-[60px] bg-gray-800">
                    <TechAndTools />
                </div>
            </div>



            <div ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
            <div className="py-[60px]">
                <WorkExperience />
            </div>
            </div>

            <div ref={ref4} className={`transition-opacity ease-in duration-700 ${isVisible4 ? "opacity-100" : "opacity-0"}`}>
            {/* <div
                // className="py-[60px] relative"
                // style={{
                //   backgroundImage: `url('https://images.unsplash.com/photo-1586775490184-b79f0621891f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                //   backgroundSize: "cover",
                //   backgroundPosition: "center",
                //   backgroundAttachment: "fixed", // Tambahkan untuk efek parallax
                // }}
                className="py-[60px] bg-gray-100 dark:bg-gray-800/50"
            >
                <Portofolio />
            </div> */}

            </div>
            {/* Bagian dengan efek Parallax */}
           

            <div className="pt-[60px] pb-[120px] md:py-[40px] bg-gray-800">
                <Footer />
            </div>
        </div>
    );
}
