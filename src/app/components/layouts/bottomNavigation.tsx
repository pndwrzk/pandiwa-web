export default function BottomNavigation() {
    return (
        // footer
        <div className="block md:hidden">
            <div className="fixed bottom-0 left-0 z-50 w-full h-[80px] bg-white dark:bg-gray-800  border-t-2 dark:border-gray-600 dark:bg-black-700 dark:border-black-600">
                <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-black-50 dark:hover:bg-black-800 group">
                        <svg className="w-5 h-5 mb-2 text-black-500 dark:text-black-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        <span className="text-sm text-black-500 dark:text-black-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-black-50 dark:hover:bg-black-800 group">
                        <svg className="w-5 h-5 mb-2 text-black-500 dark:text-black-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
                            <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
                        </svg>
                        <span className="text-sm text-black-500 dark:text-black-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Wallet</span>
                    </button>
                    <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-black-50 dark:hover:bg-black-800 group">
                        <svg className="w-5 h-5 mb-2 text-black-500 dark:text-black-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
                        </svg>
                        <span className="text-sm text-black-500 dark:text-black-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Settings</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
