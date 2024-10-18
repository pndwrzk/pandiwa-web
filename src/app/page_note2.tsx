"use client"

import Navbar from "./components/layouts/navbar"
import BottomNavigation from "./components/layouts/bottomNavigation"
import Banner from "./components/banner"
import WhatCanIDo from "./components/whatCanIDo"
import TechAndTools from "./components/tech&tools"
import WorkExperience from "./components/workExperience"
import Portofolio from "./components/portofolio"

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white dark:bg-gray-700"
            >
                <Banner />
                <WhatCanIDo/>
                <TechAndTools/>
                <WorkExperience/>
                <Portofolio/>
                
              
            </main>
            <BottomNavigation />
        </>
    )
}