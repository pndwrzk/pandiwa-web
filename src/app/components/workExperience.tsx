

export default function WorkExperience() {
    return (
   <div className=" md:px-[150px] px-7">
     <div className="flex flex-col ">
                    <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-800 dark:text-white ">Work Experience</h2>
                    <p className="mb-12 text-lg text-gray-500 dark:text-gray-50">My Adventure in the World of Work and Tech</p>
                </div>
      <ol
      className="border-s border-gray-800 dark:border-white md:flex md:justify-center md:gap-6 md:border-s-0 md:border-t">
     
      <li>
        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
          <div
            className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-gray-800 dark:bg-gray-100 md:-mt-[5px] md:me-0 md:ms-0"></div>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
            24.06.2024 - Present
          </p>
        </div>
        <div className="ms-4 mt-2 pb-5 md:ms-0">
          <h4 className="mb-1.5 text-xl font-semibold">PT Trans Retail Indonesia</h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
          As a <span className="font-bold">backend developer</span>, I'm responsible for design and maintain server-side logic and architecture for web applications, utilizing Node.js. I focus on creating scalable, efficient, and secure systems that enhance user experience, while collaborating with frontend developers to deliver integrated software solutions.
          </p>
        </div>
      </li>
    
    
      <li>
        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
          <div
            className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-gray-800 dark:bg-gray-100 md:-mt-[5px] md:me-0 md:ms-0"></div>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
            02.10.2022 - 21.06.2024
          </p>
        </div>
        <div className="ms-4 mt-2 pb-5 md:ms-0">
          <h4 className="mb-1.5 text-xl font-semibold">PT Erajaya Swasembada TBK</h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
          As a <span className="font-bold">full Stack Developer</span>, I am responsible for the comprehensive development of web applications, encompassing both frontend and backend functionalities. On the frontend, I use React, Vue.js and Next.js to create responsive and dynamic user interfaces. On the backend, I use Golang and Laravel to develop robust server logic and efficient API development. Additionally, I manage databases and use Git for version control and team collaboration.
          </p>
        </div>
      </li>
    
      
      <li>
        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
          <div
            className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-gray-800 dark:bg-gray-100 md:-mt-[5px] md:me-0 md:ms-0"></div>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
            10.06.2021 - 10-08-2021
          </p>
        </div>
        <div className="ms-4 mt-2 pb-5 md:ms-0">
          <h4 className="mb-1.5 text-xl font-semibold">PT Borwita Indah</h4>
          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
          As a <span className="font-bold">web developer intern</span>, I am responsible for supporting the development team in designing, developing, and maintaining websites and web-based applications. I am involved in coding using Laravel and Vue.js, and collaborating with designers and senior developers to implement new features.
          </p>
        </div>
      </li>
    </ol>
    </div>
    )
}