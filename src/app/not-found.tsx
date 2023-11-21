"use client";
import Link from "next/link";
function NotFoundPage() {
  return (
    <div className="flex h-screen   justify-center items-center">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-red-500">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl dark:text-gray-400">
            Sorry, we couldn't find this page.
          </p>
          <Link
            href="/"
            className="px-8 py-4 text-xl font-semibold rounded bg-white text-black hover:border hover:font-bold"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
