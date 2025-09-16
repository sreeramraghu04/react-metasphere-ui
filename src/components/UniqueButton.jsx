// src/components/UniqueButton.jsx
import React from "react";

const variants = {
  primary:
    "bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.6)] hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]",
  secondary:
    "bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 text-white shadow-[0_0_10px_rgba(14,165,233,0.6)] hover:shadow-[0_0_20px_rgba(14,165,233,0.8)]",
  ghost:
    "bg-transparent border border-white/10 text-gray-100 hover:bg-white/5 shadow-none",
  outline:
    "bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white shadow-[0_0_8px_rgba(168,85,247,0.5)]",
  icon: "p-3 rounded-full bg-pink-500 text-white shadow-[0_0_8px_rgba(236,72,153,0.6)] hover:shadow-[0_0_16px_rgba(236,72,153,0.8)]",
  danger:
    "bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-[0_0_10px_rgba(239,68,68,0.6)] hover:shadow-[0_0_20px_rgba(239,68,68,0.8)]",
  success:
    "bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.6)] hover:shadow-[0_0_20px_rgba(16,185,129,0.8)]",
  warning:
    "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_0_10px_rgba(245,158,11,0.6)] hover:shadow-[0_0_20px_rgba(245,158,11,0.8)]",
  premium:
    "bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.7)] hover:shadow-[0_0_25px_rgba(245,158,11,0.9)]",
  glass:
    "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:bg-white/20",
  disabled: "bg-gray-600 text-gray-400 cursor-not-allowed",
  loading:
    "bg-gradient-to-r from-purple-500 to-indigo-500 text-white opacity-80 cursor-wait",
};

const sizes = {
  sm: "px-3 py-1 text-sm rounded-xl",
  md: "px-5 py-2 text-base rounded-2xl",
  lg: "px-6 py-3 text-lg rounded-3xl",
  xl: "px-8 py-4 text-xl rounded-3xl",
};

export default function UniqueButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  isLoading = false,
  disabled = false,
  ...props
}) {
  const variantClasses = disabled
    ? variants.disabled
    : isLoading
    ? variants.loading
    : variants[variant] || variants.primary;

  const sizeClasses = sizes[size] || sizes.md;

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`relative inline-flex items-center font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 ${variantClasses} ${sizeClasses} ${className}`}
    >
      {/* Glow layer for certain variants */}
      {!["ghost", "outline", "glass", "disabled"].includes(variant) && (
        <span
          className={`absolute inset-0 ${
            sizeClasses.split(" ")[2] || "rounded-2xl"
          } bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-30 blur-md`}
        ></span>
      )}

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {icon && !isLoading && <span>{icon}</span>}
        {children}
      </span>
    </button>
  );
}
