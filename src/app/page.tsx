"use client";

import Banner from "./components/banner";
import WhatCanIDo from "./components/whatCanIDo";
import TechAndTools from "./components/tech&tools";
import WorkExperience from "./components/workExperience";
import Portofolio from "./components/portofolio";
import Footer from "./components/layouts/footer";

export default function Home() {
  return (
    <div className="pt-[60px]">
      <div className="py-[60px] bg-gray-100 dark:bg-gray-800/50">
        <Banner />
      </div>

      <div className="py-[60px]">
        <WhatCanIDo />
      </div>

      <div className="py-[60px] bg-gray-800">
        <TechAndTools />
      </div>

      <div className="py-[60px]">
        <WorkExperience />
      </div>

      {/* Bagian dengan efek Parallax */}
      <div
        // className="py-[60px] relative"
        // style={{
        //   backgroundImage: `url('https://images.unsplash.com/photo-1586775490184-b79f0621891f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   backgroundAttachment: "fixed", // Tambahkan untuk efek parallax
        // }}
        className="py-[60px] bg-gray-100"
      >
        <Portofolio />
      </div>

      <div className="pt-[60px] pb-[120px] md:py-[40px] bg-gray-800">
        <Footer />
      </div>
    </div>
  );
}
