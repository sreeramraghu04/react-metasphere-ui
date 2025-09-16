// src/components/ToggleSwitch.jsx
import React, { useState } from "react";

/* variants: include knobOn and knobOff as literal Tailwind classes */
const variants = {
  neon: {
    on: "bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]",
    off: "bg-gray-700",
    knobOn: "bg-white",
    knobOff: "bg-gray-400",
  },
  glass: {
    on: "bg-gradient-to-r from-cyan-400 to-blue-500 backdrop-blur-md",
    off: "bg-gray-700/50 backdrop-blur-md",
    knobOn: "bg-white/80 backdrop-blur-md",
    knobOff: "bg-gray-300/50 backdrop-blur-md",
  },
  minimal: {
    on: "bg-orange-500",
    off: "bg-gray-600",
    knobOn: "bg-white",
    knobOff: "bg-gray-300",
  },
  danger: {
    on: "bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]",
    off: "bg-gray-700",
    knobOn: "bg-white",
    knobOff: "bg-gray-400",
  },
  success: {
    on: "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]",
    off: "bg-gray-700",
    knobOn: "bg-white",
    knobOff: "bg-gray-400",
  },
};

/* sizes: keep knob size and translate separately */
const sizes = {
  sm: { wrapper: "w-10 h-5", knob: "w-4 h-4", translate: "translate-x-5" },
  md: { wrapper: "w-14 h-8", knob: "w-6 h-6", translate: "translate-x-6" },
  lg: { wrapper: "w-20 h-10", knob: "w-8 h-8", translate: "translate-x-10" },
};

export default function ToggleSwitch({
  label,
  initial = false,
  variant = "neon",
  size = "md",
  onToggle,
  disabled = false,
}) {
  const [enabled, setEnabled] = useState(initial);
  const v = variants[variant] || variants.neon;
  const s = sizes[size] || sizes.md;

  const handleClick = () => {
    if (disabled) return;
    const newState = !enabled;
    setEnabled(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div
      className={`flex items-center gap-3 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label && <span className="text-gray-300">{label}</span>}

      <button
        onClick={handleClick}
        disabled={disabled}
        className={`relative ${
          s.wrapper
        } rounded-full transition-colors duration-300 flex items-center overflow-hidden ${
          enabled ? v.on : v.off
        } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
        aria-pressed={enabled}
      >
        {/* glow/background layer (behind knob) */}
        {enabled &&
          (variant === "neon" ||
            variant === "danger" ||
            variant === "success") && (
            <span className="absolute inset-0 rounded-full blur-md opacity-30 z-0" />
          )}

        {/* knob (always above glow) */}
        <span
          className={`absolute left-1 top-1 rounded-full shadow-md transform transition-transform duration-300 z-10 ${
            s.knob
          } ${
            enabled
              ? `${s.translate} ${v.knobOn}`
              : `translate-x-0 ${v.knobOff}`
          }`}
        />
      </button>
    </div>
  );
}
