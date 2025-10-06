import React from "react";
import { useNavigate, Link } from "react-router-dom";
import ToggleSwitch from "../components/ToggleSwitch";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen text-center overflow-hidden bg-gradient-to-br from-neutral-900 via-purple-950 to-black">
      {/* Animated glowing stars */}
      <div className="absolute inset-0">
        <div className="w-full h-[990px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_2.5px)] bg-[length:20px_20px] animate-[spin_120s_linear_infinite]"></div>
      </div>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-grow relative z-10 px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold animate-pulse">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 animate-pulse">
            Welcome to MetaSphere UI
          </span>
          ✨
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl md:max-w-xl mt-4">
          A futuristic React & TailwindCSS component library showcasing Unique
          Buttons, Toggle Switches and cool Loaders. Preview, copy usage, or get
          full component code instantly!
        </p>

        {/* Quick links */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 w-full justify-center items-center">
          <Link
            to="/buttons"
            className="w-full sm:w-auto px-4 py-4 sm:px-6 sm:py-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 sm:hover:scale-110 hover:shadow-[0_0_20px_rgba(168,85,247,0.7)] transform transition duration-300 text-sm sm:text-base"
          >
            Explore Buttons
          </Link>

          <div className="w-full sm:w-auto relative flex items-center justify-center px-4 py-4 sm:px-6 sm:py-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 sm:hover:scale-110 hover:shadow-[0_0_20px_rgba(6,182,212,0.7)] transform transition duration-300 gap-2 text-sm sm:text-base">
            <ToggleSwitch
              initial={false}
              label=""
              onToggle={(state) => {
                if (state) navigate("/toggles");
              }}
              className="cursor-pointer"
            />
            <span>Explore Toggles</span>
          </div>

          <Link
            to="/loaders"
            className="w-full sm:w-auto relative flex items-center justify-center px-4 py-4 sm:px-6 sm:py-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-green-300 via-purple-800 to-indigo-800 text-white font-semibold shadow-lg hover:scale-105 sm:hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.7)] transform transition duration-300 gap-2 text-sm sm:text-base"
          >
            <span className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5">
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <div className="absolute inset-0 border-2 border-red-500 rounded-full animate-ping"></div>
                <div className="absolute inset-0 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </span>
            <span>Explore Loaders</span>
          </Link>
        </div>

        {/* Small note */}
        <p className="text-gray-500 mt-6 sm:mt-12 text-xs sm:text-sm max-w-md md:max-w-xl px-2">
          Click any section above to view previews and copy code for your
          projects. More components, updates, and collections are rolling out
          soon.
        </p>
      </main>

      {/* Footer fixed at bottom */}
      <footer className="relative z-10 w-full border-t border-purple-900/40 bg-gradient-to-r from-transparent via-purple-950/20 to-transparent py-6">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-4 gap-4 text-gray-400 text-sm">
          {/* Left side */}
          <p className="text-xs sm:text-sm text-gray-400 text-center">
            Crafted by{" "}
            <span className="text-purple-400 font-semibold hover:text-pink-400 transition">
              Ram⚡
            </span>
            © {new Date().getFullYear()}
          </p>

          {/* Right side */}
          <div className="flex gap-4">
            <a
              href="https://github.com/sreeramraghu04/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sreeramraghu04/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://sreeramraghu.online/"
              className="hover:text-purple-400 transition"
            >
              Portfolio
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
