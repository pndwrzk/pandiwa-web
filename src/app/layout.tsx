import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pandiwa Web",
  description: "Welcome to my room",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <div className="flex flex-wrap lg:h-screen h-full w-full  py-2  bg-[#111111]">
          <div className="w-full sm:w-full md:w-full lg:w-full xl:w-[30%]  m-4 bg-[#1E1E1F]  rounded-lg">
            <Sidebar />
          </div>

          <div className="w-full sm:w-full md:w-full lg:w-full xl:w-[65%] m-4   bg-[#1E1E1F]  rounded-lg">
            <Navbar />
            <div className="p-5  h-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
