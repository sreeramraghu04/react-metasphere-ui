import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const getLinkClass = (isActive, accent) =>
  `px-3 py-2 md:px-2 md:py-1 rounded-lg md:rounded hover:bg-gray-700 transition-colors duration-200 ${
    isActive ? `bg-${accent}-600 text-white` : "text-gray-300"
  }`;

export default function Layout() {
  const { accent } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-neutral-900 text-gray-100">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 border-b border-white/10 bg-neutral-800">
        <h1 className={`text-2xl font-bold text-${accent}-500`}>
          🌌 MetaSphere UI
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
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-neutral-900 border-r border-white/10 p-6 flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out lg:translate-x-0
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div>
          <h1
            className={`text-xl font-bold mb-6 text-${accent}-500 lg:block hidden`}
          >
            🌌 MetaSphere UI
          </h1>
          <nav className="flex flex-col gap-2">
            <NavLink
              to="/home"
              className={({ isActive }) => getLinkClass(isActive, accent)}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/buttons"
              className={({ isActive }) => getLinkClass(isActive, accent)}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Buttons
            </NavLink>
            <NavLink
              to="/toggles"
              className={({ isActive }) => getLinkClass(isActive, accent)}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Toggles
            </NavLink>
            <NavLink
              to="/loaders"
              className={({ isActive }) => getLinkClass(isActive, accent)}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Loaders
            </NavLink>
            <NavLink
              to="/cards"
              className={({ isActive }) => getLinkClass(isActive, accent)}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cards
            </NavLink>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 w-full">
        <Outlet />
      </main>
    </div>
  );
}
