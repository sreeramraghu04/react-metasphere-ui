import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const getLinkClass = (isActive, accent) =>
  `px-3 py-2 md:px-2 md:py-1 rounded-lg md:rounded hover:bg-gray-700 transition-colors duration-200 ${
    isActive ? `bg-${accent}-600 text-white` : "text-gray-300"
  }`;

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col gap-5 lg:flex-row min-h-screen bg-gradient-to-br from-neutral-900 via-purple-950 to-black text-gray-100 p-8">
      <div>
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-6 rounded-xl border border-purple-500/50 bg-gradient-to-br from-neutral-900 via-purple-950 to-black">
          <h1
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-fuchsia-400 
               bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]"
          >
            MetaSphere UI
          </h1>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </header>

        {/* Sidebar */}
        <aside
          className={`
          fixed lg:static inset-y-5 left-0 z-50 w-64 bg-gradient-to-br from-neutral-900 via-purple-950 to-black rounded-xl border border-purple-500/50 p-6 flex flex-col justify-between lg:h-auto md:h-auto h-[300px]
          transform transition-transform duration-300 ease-in-out lg:translate-x-0
          ${isMobileMenuOpen ? "translate-x-0 left-5" : "-translate-x-full"}
        `}
        >
          <div className="p-4">
            <h1
              className={`text-xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-fuchsia-400 
               bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(236,72,153,0.7)] lg:block hidden`}
            >
              MetaSphere UI
            </h1>
            <nav className="flex flex-col gap-2">
              <NavLink
                to="/home"
                className={({ isActive }) => getLinkClass(isActive)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/buttons"
                className={({ isActive }) => getLinkClass(isActive)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Buttons
              </NavLink>
              <NavLink
                to="/toggles"
                className={({ isActive }) => getLinkClass(isActive)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Toggles
              </NavLink>
              <NavLink
                to="/loaders"
                className={({ isActive }) => getLinkClass(isActive)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Loaders
              </NavLink>
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-gradient-to-br from-neutral-900 via-purple-950 to-black opacity-80 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>

      {/* Main Content */}
      <div className="w-full flex-1">
        <main
          className="p-5 rounded-xl border border-purple-500/50 
           bg-gradient-to-br from-neutral-900 via-purple-950 to-black"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
