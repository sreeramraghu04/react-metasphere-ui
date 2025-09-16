// src/pages/ButtonsPage.jsx
import React, { useState } from "react";
import UniqueButton from "../components/UniqueButton";
import {
  FiHeart,
  FiStar,
  FiSettings,
  FiDownload,
  FiMail,
} from "react-icons/fi";

const buttons = [
  {
    name: "Primary Button",
    variant: "primary",
    usage: `<UniqueButton variant="primary">Primary</UniqueButton>`,
    component: `const PrimaryButton = () => (
  <button className="relative inline-flex items-center px-5 py-2 rounded-2xl font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.6)] hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]">
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-30 blur-md"></span>
    <span className="relative z-10">Primary Button</span>
  </button>
);`,
  },
  {
    name: "Secondary Button",
    variant: "secondary",
    usage: `<UniqueButton variant="secondary">Secondary</UniqueButton>`,
    component: `const SecondaryButton = () => (
  <button className="relative inline-flex items-center px-5 py-2 rounded-2xl font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 text-white shadow-[0_0_10px_rgba(14,165,233,0.6)] hover:shadow-[0_0_20px_rgba(14,165,233,0.8)]">
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 opacity-30 blur-md"></span>
    <span className="relative z-10">Secondary Button</span>
  </button>
);`,
  },
  {
    name: "Ghost Button",
    variant: "ghost",
    usage: `<UniqueButton variant="ghost">Ghost</UniqueButton>`,
    component: `const GhostButton = () => (
  <button className="relative inline-flex items-center px-5 py-2 rounded-2xl font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-transparent border border-white/10 text-gray-100 hover:bg-white/5">
    <span className="relative z-10">Ghost Button</span>
  </button>
);`,
  },
  {
    name: "Outline Button",
    variant: "outline",
    usage: `<UniqueButton variant="outline">Outline</UniqueButton>`,
    component: `const OutlineButton = () => (
  <button className="relative inline-flex items-center px-5 py-2 rounded-2xl font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white shadow-[0_0_8px_rgba(168,85,247,0.5)]">
    <span className="relative z-10">Outline Button</span>
  </button>
);`,
  },
  {
    name: "Icon Button",
    variant: "icon",
    icon: <FiHeart />,
    usage: `<UniqueButton variant="icon" icon={<FiHeart />}>Like</UniqueButton>`,
    component: `import { FiHeart } from "react-icons/fi";

const IconButton = () => (
  <button className="relative inline-flex items-center p-3 rounded-full font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-pink-500 text-white shadow-[0_0_8px_rgba(236,72,153,0.6)] hover:shadow-[0_0_16px_rgba(236,72,153,0.8)]">
    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 opacity-30 blur-md"></span>
    <span className="relative z-10 flex items-center gap-2">
      <FiHeart /> Like
    </span>
  </button>
);`,
  },
  {
    name: "Danger Button",
    variant: "danger",
    usage: `<UniqueButton variant="danger">Delete</UniqueButton>`,
    component: `const DangerButton = () => (
  <button className="relative inline-flex items-center px-5 py-2 rounded-2xl font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-[0_0_10px_rgba(239,68,68,0.6)] hover:shadow-[0_0_20px_rgba(239,68,68,0.8)]">
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400 to-rose-400 opacity-30 blur-md"></span>
    <span className="relative z-10">Delete</span>
  </button>
);`,
  },
  {
    name: "Success Button",
    variant: "success",
    usage: `<UniqueButton variant="success">Success</UniqueButton>`,
    component: `const SuccessButton = () => (
  <button className="relative inline-flex items-center px-5 py-2 rounded-2xl font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-[0_0_10px_rgba(16,185,129,0.6)] hover:shadow-[0_0_20px_rgba(16,185,129,0.8)]">
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-green-400 opacity-30 blur-md"></span>
    <span className="relative z-10">Success</span>
  </button>
);`,
  },
  {
    name: "Warning Button",
    variant: "warning",
    usage: `<UniqueButton variant="warning">Warning</UniqueButton>`,
    component: `const WarningButton = () => (
  <button className="relative inline-flex items-center px-5 py-2 rounded-2xl font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-[0_0_10px_rgba(245,158,11,0.6)] hover:shadow-[0_0_20px_rgba(245,158,11,0.8)]">
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 opacity-30 blur-md"></span>
    <span className="relative z-10">Warning</span>
  </button>
);`,
  },
  {
    name: "Premium Button",
    variant: "premium",
    usage: `<UniqueButton variant="premium">Premium</UniqueButton>`,
    component: `const PremiumButton = () => (
  <button className="relative inline-flex items-center px-5 py-2 rounded-2xl font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.7)] hover:shadow-[0_0_25px_rgba(245,158,11,0.9)]">
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 opacity-30 blur-md"></span>
    <span className="relative z-10">Premium</span>
  </button>
);`,
  },
  {
    name: "Glass Button",
    variant: "glass",
    usage: `<UniqueButton variant="glass">Glass</UniqueButton>`,
    component: `const GlassButton = () => (
  <button className="relative inline-flex items-center px-5 py-2 rounded-2xl font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:bg-white/20">
    <span className="relative z-10">Glass</span>
  </button>
);`,
  },
  {
    name: "Disabled Button",
    variant: "disabled",
    usage: `<UniqueButton variant="disabled" disabled>Disabled</UniqueButton>`,
    component: `const DisabledButton = () => (
  <button disabled className="relative inline-flex items-center px-5 py-2 rounded-2xl font-semibold tracking-wide bg-gray-600 text-gray-400 cursor-not-allowed">
    <span className="relative z-10">Disabled</span>
  </button>
);`,
  },
  {
    name: "Loading Button",
    variant: "loading",
    usage: `<UniqueButton variant="loading" isLoading>Loading...</UniqueButton>`,
    component: `const LoadingButton = () => (
  <button className="relative inline-flex items-center px-5 py-2 rounded-2xl font-semibold tracking-wide bg-gradient-to-r from-purple-500 to-indigo-500 text-white opacity-80 cursor-wait">
    <span className="relative z-10 flex items-center gap-2">
      <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Loading...
    </span>
  </button>
);`,
  },
  {
    name: "Small Button",
    variant: "primary",
    size: "sm",
    usage: `<UniqueButton variant="primary" size="sm">Small</UniqueButton>`,
    component: `const SmallButton = () => (
  <button className="relative inline-flex items-center px-3 py-1 rounded-xl text-sm font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.6)] hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]">
    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-30 blur-md"></span>
    <span className="relative z-10">Small</span>
  </button>
);`,
  },
  {
    name: "Large Button",
    variant: "secondary",
    size: "lg",
    usage: `<UniqueButton variant="secondary" size="lg">Large</UniqueButton>`,
    component: `const LargeButton = () => (
  <button className="relative inline-flex items-center px-6 py-3 rounded-3xl text-lg font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 text-white shadow-[0_0_10px_rgba(14,165,233,0.6)] hover:shadow-[0_0_20px_rgba(14,165,233,0.8)]">
    <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 opacity-30 blur-md"></span>
    <span className="relative z-10">Large</span>
  </button>
);`,
  },
  {
    name: "Email Button",
    variant: "primary",
    icon: <FiMail />,
    usage: `<UniqueButton variant="primary" icon={<FiMail />}>Email</UniqueButton>`,
    component: `import { FiMail } from "react-icons/fi";

const EmailButton = () => (
  <button className="relative inline-flex items-center px-5 py-2 rounded-2xl font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.6)] hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]">
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-30 blur-md"></span>
    <span className="relative z-10 flex items-center gap-2">
      <FiMail /> Email
    </span>
  </button>
);`,
  },
];

const fullComponentCode = `import React from "react";

const variants = {
  primary:
    "bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.6)] hover:shadow-[0_0_20px_rgba(168,85,247,0.8)]",
  secondary:
    "bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-400 text-white shadow-[0_0_10px_rgba(14,165,233,0.6)] hover:shadow-[0_0_20px_rgba(14,165,233,0.8)]",
  ghost:
    "bg-transparent border border-white/10 text-gray-100 hover:bg-white/5 shadow-none",
  outline:
    "bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white shadow-[0_0_8px_rgba(168,85,247,0.5)]",
  icon:
    "p-3 rounded-full bg-pink-500 text-white shadow-[0_0_8px_rgba(236,72,153,0.6)] hover:shadow-[0_0_16px_rgba(236,72,153,0.8)]",
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
  loading: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white opacity-80 cursor-wait",
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
      className={\`relative inline-flex items-center font-semibold tracking-wide transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300 \${variantClasses} \${sizeClasses} \${className}\`}
    >
      {/* Glow layer for certain variants */}
      {!["ghost", "outline", "glass", "disabled"].includes(variant) && (
        <span className={\`absolute inset-0 \${sizeClasses.split(' ')[2] || 'rounded-2xl'} bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-30 blur-md\`}></span>
      )}

      {/* Button content */}
      <span className="relative z-10 flex items-center gap-2">
        {isLoading && (
          <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {icon && !isLoading && <span>{icon}</span>}
        {children}
      </span>
    </button>
  );
}`;

export default function ButtonsPage() {
  const [copiedButton, setCopiedButton] = useState(null);
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, buttonIndex, type) => {
    navigator.clipboard.writeText(text);
    setCopiedButton(buttonIndex);
    setCopiedType(type);

    setTimeout(() => {
      setCopiedButton(null);
      setCopiedType(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ⚡ Unique Buttons
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-3xl">
            A collection of neon-inspired buttons with multiple variants. Copy
            usage or full component code instantly.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {buttons.map((btn, index) => (
            <div
              key={`${btn.variant}-${index}`}
              className="p-4 md:p-6 rounded-xl border border-white/10 bg-neutral-800/50 backdrop-blur-sm flex flex-col items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Preview */}
              <div className="h-16 flex items-center justify-center">
                <UniqueButton
                  variant={btn.variant}
                  size={btn.size || "md"}
                  icon={btn.icon}
                  isLoading={btn.variant === "loading"}
                  disabled={btn.variant === "disabled"}
                >
                  {btn.name}
                </UniqueButton>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-center">{btn.name}</h3>

              {/* Copy Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <button
                  onClick={() => copyToClipboard(btn.usage, index, "usage")}
                  className={`px-3 py-2 text-xs sm:text-sm rounded-lg transition-all duration-200 flex-1 ${
                    copiedButton === index && copiedType === "usage"
                      ? "bg-green-500"
                      : "bg-purple-500 hover:bg-purple-600"
                  }`}
                >
                  {copiedButton === index && copiedType === "usage"
                    ? "Copied!"
                    : "Copy Usage"}
                </button>
                <button
                  onClick={() =>
                    copyToClipboard(btn.component, index, "component")
                  }
                  className={`px-3 py-2 text-xs sm:text-sm rounded-lg transition-all duration-200 flex-1 ${
                    copiedButton === index && copiedType === "component"
                      ? "bg-green-500"
                      : "bg-pink-500 hover:bg-pink-600"
                  }`}
                >
                  {copiedButton === index && copiedType === "component"
                    ? "Copied!"
                    : "Copy Component"}
                </button>
              </div>

              {/* Usage block */}
              <div className="w-full mt-2">
                <pre className="w-full p-3 text-xs bg-black/30 rounded-md text-purple-300 overflow-x-auto">
                  {btn.usage}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Full Component Section */}
        <div className="mt-12 p-6 rounded-xl border border-white/10 bg-neutral-800/50 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Full UniqueButton Component
          </h3>
          <div className="relative">
            <button
              onClick={() =>
                copyToClipboard(fullComponentCode, "full", "component")
              }
              className={`absolute top-2 right-2 px-3 py-1 text-sm rounded-lg ${
                copiedButton === "full" && copiedType === "component"
                  ? "bg-green-500"
                  : "bg-purple-500 hover:bg-purple-600"
              }`}
            >
              {copiedButton === "full" && copiedType === "component"
                ? "Copied!"
                : "Copy Full Component"}
            </button>
            <pre className="p-4 text-xs bg-black/30 rounded-md text-purple-300 overflow-x-auto">
              {fullComponentCode}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
