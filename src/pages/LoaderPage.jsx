// src/pages/LoaderPage.jsx
import React, { useState } from "react";
import Loader from "../components/Loader";

const loaders = [
  {
    name: "Spinner",
    variant: "spinner",
    usage: `<Loader variant="spinner" />`,
    component: `
export default function Loader({ variant = "spinner" }) {
  if (variant === "spinner") {
    return <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>;
  }
  return null;
}`,
  },
  {
    name: "Pulse",
    variant: "pulse",
    usage: `<Loader variant="pulse" />`,
    component: `
export default function Loader({ variant = "pulse" }) {
  if (variant === "pulse") {
    return <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>;
  }
  return null;
}`,
  },
  {
    name: "Dots",
    variant: "dots",
    usage: `<Loader variant="dots" />`,
    component: `
export default function Loader({ variant = "dots" }) {
  if (variant === "dots") {
    return (
      <div className="flex space-x-2">
        <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></span>
        <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-150"></span>
        <span className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-300"></span>
      </div>
    );
  }
  return null;
}`,
  },
  {
    name: "Bars",
    variant: "bars",
    usage: `<Loader variant="bars" />`,
    component: `
export default function Loader({ variant = "bars" }) {
  if (variant === "bars") {
    return (
      <div className="flex space-x-1">
        <div className="w-2 h-6 bg-purple-500 animate-[bounce_0.5s_infinite]"></div>
        <div className="w-2 h-6 bg-pink-500 animate-[bounce_0.5s_infinite_0.2s]"></div>
        <div className="w-2 h-6 bg-indigo-500 animate-[bounce_0.5s_infinite_0.4s]"></div>
      </div>
    );
  }
  return null;
}`,
  },
  {
    name: "Ring",
    variant: "ring",
    usage: `<Loader variant="ring" />`,
    component: `
export default function Loader({ variant = "ring" }) {
  if (variant === "ring") {
    return (
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-purple-500 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-pink-500 rounded-full animate-spin [animation-direction:reverse]"></div>
      </div>
    );
  }
  return null;
}`,
  },
  {
    name: "Wave",
    variant: "wave",
    usage: `<Loader variant="wave" />`,
    component: `
export default function Loader({ variant = "wave" }) {
  if (variant === "wave") {
    return (
      <div className="flex space-x-1 items-end">
        <div className="w-2 h-4 bg-purple-500 animate-[bounce_0.6s_infinite]"></div>
        <div className="w-2 h-6 bg-pink-500 animate-[bounce_0.6s_infinite_0.2s]"></div>
        <div className="w-2 h-8 bg-indigo-500 animate-[bounce_0.6s_infinite_0.4s]"></div>
        <div className="w-2 h-6 bg-pink-500 animate-[bounce_0.6s_infinite_0.6s]"></div>
        <div className="w-2 h-4 bg-purple-500 animate-[bounce_0.6s_infinite_0.8s]"></div>
      </div>
    );
  }
  return null;
}`,
  },
  {
    name: "Orbit",
    variant: "orbit",
    usage: `<Loader variant="orbit" />`,
    component: `
export default function Loader({ variant = "orbit" }) {
  if (variant === "orbit") {
    return (
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500 animate-spin"></div>
        <div className="absolute w-3 h-3 bg-pink-500 rounded-full animate-[spin_2s_linear_infinite] top-0 left-1/2 -translate-x-1/2"></div>
      </div>
    );
  }
  return null;
}`,
  },
  {
    name: "Glow",
    variant: "glow",
    usage: `<Loader variant="glow" />`,
    component: `
export default function Loader({ variant = "glow" }) {
  if (variant === "glow") {
    return <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-ping"></div>;
  }
  return null;
}`,
  },
];

export default function LoaderPage() {
  const [copiedItem, setCopiedItem] = useState(null);
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, itemIndex, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(itemIndex);
    setCopiedType(type);

    setTimeout(() => {
      setCopiedItem(null);
      setCopiedType(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ⏳ Unique Loaders
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-3xl">
            A collection of animated loaders to make your projects feel alive.
            Copy either the usage or full component code.
          </p>
        </header>

        {/* Loaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {loaders.map((loader, index) => (
            <div
              key={loader.variant}
              className="p-4 md:p-6 rounded-xl border border-white/10 bg-neutral-800/80 backdrop-blur-sm flex flex-col items-center gap-4 md:gap-6 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Preview */}
              <div className="flex items-center justify-center h-20 md:h-24 w-full">
                <Loader variant={loader.variant} />
              </div>

              {/* Name */}
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {loader.name}
              </h3>

              {/* Copy Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <button
                  onClick={() => copyToClipboard(loader.usage, index, "usage")}
                  className={`px-3 py-2 text-xs md:text-sm rounded-lg transition-all duration-200 flex-1 ${
                    copiedItem === index && copiedType === "usage"
                      ? "bg-green-600"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                >
                  {copiedItem === index && copiedType === "usage"
                    ? "Copied!"
                    : "Copy Usage"}
                </button>
                <button
                  onClick={() =>
                    copyToClipboard(loader.component, index, "component")
                  }
                  className={`px-3 py-2 text-xs md:text-sm rounded-lg transition-all duration-200 flex-1 ${
                    copiedItem === index && copiedType === "component"
                      ? "bg-green-600"
                      : "bg-pink-600 hover:bg-pink-700"
                  }`}
                >
                  {copiedItem === index && copiedType === "component"
                    ? "Copied!"
                    : "Copy Component"}
                </button>
              </div>

              {/* Usage block */}
              <div className="w-full">
                <pre className="w-full p-3 text-xs md:text-sm bg-black/40 rounded-md text-purple-300 overflow-x-auto">
                  {loader.usage}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
