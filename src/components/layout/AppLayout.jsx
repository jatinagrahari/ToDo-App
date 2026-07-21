import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { IoHeart, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const AppLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-bg-light dark:bg-bg-dark overflow-hidden transition-colors duration-300">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar relative flex flex-col">
          <div className="max-w-6xl mx-auto w-full flex-1">{children}</div>

          {/* Footer */}
          <footer className="mt-auto pt-8 pb-4 border-t border-gray-200 dark:border-zinc-800/60 mt-12 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 dark:text-zinc-500 gap-4">
            <div className="flex items-center">
              Made with <IoHeart className="text-red-500 mx-1.5" /> by{" "}
              <span className="font-semibold text-gray-900 dark:text-zinc-300 ml-1">
                Jatin
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.github.com/jatinagrahari"
                target="_blank"
                className="hover:text-gray-900 dark:hover:text-zinc-300 transition-colors flex items-center gap-1.5"
              >
                <IoLogoGithub className="text-lg" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jatinagrahari"
                target="_blank"
                className="hover:text-gray-900 dark:hover:text-zinc-300 transition-colors flex items-center gap-1.5"
              >
                <IoLogoLinkedin className="text-lg" /> LinkedIn
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
