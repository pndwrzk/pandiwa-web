

export default function WhatCanIDo(){
    return(
     
        <div className="px-6 md:px-[150px] flex flex-col gap-[100px]">
            <div>
                <div className="flex flex-col text-center">
                    <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-800 dark:text-white ">What Can I Do</h2>
                    <p className="mb-12 text-lg text-gray-500 dark:text-gray-50">Here is a few of the awesome Services we provide.</p>
                </div>
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-800 dark:text-white">Full-Stack Developmen</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-50">
                            Build complete web applications from front-end to back-end.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-800 dark:text-white">Responsive Design
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-50">
                            Create user-friendly interfaces that work seamlessly across all devices and screen sizes.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-800 dark:text-white">API Development
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-50"> Design and implement RESTful APIs to enable smooth communication between different systems and applications.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-800 dark:text-white">
                                Deployment Practices
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-50">
                            Familiarity with CI/CD pipelines to automate deployment processes and improve code quality.
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
 
    )
}