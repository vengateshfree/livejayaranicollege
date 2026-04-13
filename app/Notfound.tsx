"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="text-center px-6">

        {/* 404 Number */}
        <h1 className="mb-4 text-6xl font-bold text-blue-900">
          404
        </h1>

        {/* Message */}
        <p className="mb-6 text-xl text-gray-600">
          Oops! Page not found
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition duration-300"
        >
          Return to Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;