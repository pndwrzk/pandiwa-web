import {
  AiTwotoneMail,
  AiFillEnvironment,
  AiFillPhone,
  AiFillCalendar,
} from "react-icons/ai";

import Image from "next/image";

function Sidebar() {
  return (
    <div className="bg-[#1E1E1F] p-4 rounded-lg shadow flex flex-col justify-center items-center">
      <div>
        <Image
          src="/images/photo-profile.jpg"
          alt="Description of the image"
          width={134}
          height={0}
          className="mt-10 rounded-lg p-1 border"
        />
      </div>

      <div className="mt-4">
        <h1 className="text-[35px]">Rizki Pandiwa</h1>
      </div>

      <div className="bg-[#3A3A3B] rounded-lg shadow  text-center px-10 py-1 mt-4">
        Software Engineer
      </div>
      <hr className="w-[80%] my-8" />

      <div className="flex  shadow-lg bg-[#282829] rounded-lg lg:w-[70%] w-full mt-4">
        <div className="flex items-center text-center  text-white pl-6">
          <AiTwotoneMail className="text-[45px] m-auto mt-4" />
        </div>
        <div className="flex-grow p-4 ">
          <p className="font-bold text-[#C5C5C6]">Email</p>
          <p className="font-light text-white">Pandiwarizki.rp@gmail.com</p>
        </div>
      </div>

      <div className="flex  shadow-lg bg-[#282829] rounded-lg lg:w-[70%] w-full  mt-4">
        <div className="flex items-center text-center  text-white pl-6">
          <AiFillPhone className="text-[45px] m-auto mt-4" />
        </div>
        <div className="flex-grow p-4">
          <p className="font-bold text-[#C5C5C6]">Github</p>
          <p className="font-light text-white">github.com/pndwrzk</p>
        </div>
      </div>

      <div className="flex  shadow-lg bg-[#282829] rounded-lg lg:w-[70%] w-full  mt-4">
        <div className="flex items-center text-center  text-white pl-6">
          <AiFillCalendar className="text-[45px] m-auto mt-4" />
        </div>
        <div className="flex-grow p-4 ">
          <p className="font-bold text-[#C5C5C6]">Birthday</p>
          <p className="font-light text-white">July 14, 1999</p>
        </div>
      </div>

      <div className="flex flex-row  shadow-lg bg-[#282829] rounded-lg lg:w-[70%] w-full  mt-4">
        <div className="flex items-center text-center text-white pl-6">
          <AiFillEnvironment className="text-[45px] text-center m-auto" />
        </div>
        <div className="flex-grow p-4">
          <p className="font-bold text-[#C5C5C6]">Location</p>
          <p className="font-light text-white">Jakarta, Indonesia</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
