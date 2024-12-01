"use client";
import { useState } from "react";

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className=" text-black font-extrabold font-mono  px-4 py-3 flex justify-end">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-2xl"
        >
          ☰
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full md:relative md:top-0 md:w-auto md:flex`}
        >
          <a
            href="#home"
            className="block px-4 py-2 hover:bg-gray-700 md:inline-block"
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-4 py-2 hover:bg-gray-700 md:inline-block"
          >
            About
          </a>
          <a
            href="#services"
            className="block px-4 py-2 hover:bg-gray-700 md:inline-block"
          >
            Services
          </a>
          <a
            href="#contact"
            className="block px-4 py-2 hover:bg-gray-700 md:inline-block"
          >
            Contact
          </a>
        </div>
      </nav>

     <div className="flex justify-center">
      <h1 className="from-neutral-900 text-5xl font-mono">&quot;Quotes&quot;</h1>
     </div>

      <div className="mx-24 flex flex-col gap-4 mt-8 lg:flex-row">
  <div className="bg-indigo-400 p-4 rounded-md font-mono  text-white w-full lg:w-1/3">
  You may say I&apos;m a dreamer, but I&apos;m not the only one. I hope someday you&apos;ll join us. And the world will live as one. -John Lennon
  </div>
 
  <div className="bg-slate-600 p-4 rounded-md font-mono  text-white w-full md:w-[50%] lg:w-1/3">
  The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt
  </div>
  <div className="bg-orange-600 p-4 rounded-md font-mono  text-white w-full md:w-[50%] lg:w-1/3">
  If you set your goals ridiculously high and it&apos;s a failure, you will fail above everyone else&apos;s success. -James Cameron
  </div>
 
</div>


    </div>
  );
};

export default ResponsiveNavbar;
