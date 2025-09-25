// src/pages/TogglePage.jsx
import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";

const toggles = [
  {
    name: "Neon Toggle",
    variant: "neon",
    size: "md",
    usage: `<ToggleSwitch variant="neon" />`,
    component: `
import React, { useState } from "react";

const variants = {
  neon: {
    on: "bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]",
    off: "bg-gray-700",
    knobOn: "bg-white",
    knobOff: "bg-gray-400",
  },
};

const sizes = {
  md: { wrapper: "w-14 h-8", knob: "w-6 h-6", translate: "translate-x-6" },
};

export default function ToggleSwitch({ 
  label, 
  initial = false, 
  variant = "neon", 
  size = "md", 
  onToggle 
}) {
  const [enabled, setEnabled] = useState(initial);
  const v = variants[variant] || variants.neon;
  const s = sizes[size] || sizes.md;

  const handleClick = () => {
    const newState = !enabled;
    setEnabled(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-gray-300">{label}</span>}

      <button
        onClick={handleClick}
        className={\`relative \${s.wrapper} rounded-full transition-colors duration-300 flex items-center overflow-hidden \${enabled ? v.on : v.off}\`}
        aria-pressed={enabled}
      >
        {enabled && variant === "neon" && (
          <span className="absolute inset-0 rounded-full bg-purple-500 blur-md opacity-30 z-0" />
        )}

        <span
          className={\`absolute left-1 top-1 rounded-full shadow-md transform transition-transform duration-300 z-10 \${s.knob} \${enabled ? \`\${s.translate} \${v.knobOn}\` : \`translate-x-0 \${v.knobOff}\`}\`}
        />
      </button>
    </div>
  );
}`,
  },
  {
    name: "Glass Toggle",
    variant: "glass",
    size: "md",
    usage: `<ToggleSwitch variant="glass" />`,
    component: `
import React, { useState } from "react";

const variants = {
  glass: {
    on: "bg-gradient-to-r from-cyan-400 to-blue-500 backdrop-blur-md",
    off: "bg-gray-700/50 backdrop-blur-md",
    knobOn: "bg-white/80 backdrop-blur-md",
    knobOff: "bg-gray-300/50 backdrop-blur-md",
  },
};

const sizes = {
  md: { wrapper: "w-14 h-8", knob: "w-6 h-6", translate: "translate-x-6" },
};

export default function ToggleSwitch({ 
  label, 
  initial = false, 
  variant = "glass", 
  size = "md", 
  onToggle 
}) {
  const [enabled, setEnabled] = useState(initial);
  const v = variants[variant] || variants.glass;
  const s = sizes[size] || sizes.md;

  const handleClick = () => {
    const newState = !enabled;
    setEnabled(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-gray-300">{label}</span>}

      <button
        onClick={handleClick}
        className={\`relative \${s.wrapper} rounded-full transition-colors duration-300 flex items-center overflow-hidden \${enabled ? v.on : v.off}\`}
        aria-pressed={enabled}
      >
        <span
          className={\`absolute left-1 top-1 rounded-full shadow-md transform transition-transform duration-300 z-10 \${s.knob} \${enabled ? \`\${s.translate} \${v.knobOn}\` : \`translate-x-0 \${v.knobOff}\`}\`}
        />
      </button>
    </div>
  );
}`,
  },

  {
    name: "Success Toggle",
    variant: "success",
    size: "md",
    usage: `<ToggleSwitch variant="success" />`,
    component: `
import React, { useState } from "react";

const variants = {
  success: {
    on: "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]",
    off: "bg-gray-700",
    knobOn: "bg-white",
    knobOff: "bg-gray-400",
  },
};

const sizes = {
  md: { wrapper: "w-14 h-8", knob: "w-6 h-6", translate: "translate-x-6" },
};

export default function ToggleSwitch({ 
  label, 
  initial = false, 
  variant = "success", 
  size = "md", 
  onToggle 
}) {
  const [enabled, setEnabled] = useState(initial);
  const v = variants[variant] || variants.success;
  const s = sizes[size] || sizes.md;

  const handleClick = () => {
    const newState = !enabled;
    setEnabled(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-gray-300">{label}</span>}

      <button
        onClick={handleClick}
        className={\`relative \${s.wrapper} rounded-full transition-colors duration-300 flex items-center overflow-hidden \${enabled ? v.on : v.off}\`}
        aria-pressed={enabled}
      >
        {enabled && variant === "success" && (
          <span className="absolute inset-0 rounded-full bg-emerald-500 blur-md opacity-30 z-0" />
        )}

        <span
          className={\`absolute left-1 top-1 rounded-full shadow-md transform transition-transform duration-300 z-10 \${s.knob} \${enabled ? \`\${s.translate} \${v.knobOn}\` : \`translate-x-0 \${v.knobOff}\`}\`}
        />
      </button>
    </div>
  );
}`,
  },
  {
    name: "Danger Toggle",
    variant: "danger",
    size: "md",
    usage: `<ToggleSwitch variant="danger" />`,
    component: `
import React, { useState } from "react";

const variants = {
  danger: {
    on: "bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]",
    off: "bg-gray-700",
    knobOn: "bg-white",
    knobOff: "bg-gray-400",
  },
};

const sizes = {
  md: { wrapper: "w-14 h-8", knob: "w-6 h-6", translate: "translate-x-6" },
};

export default function ToggleSwitch({ 
  label, 
  initial = false, 
  variant = "danger", 
  size = "md", 
  onToggle 
}) {
  const [enabled, setEnabled] = useState(initial);
  const v = variants[variant] || variants.danger;
  const s = sizes[size] || sizes.md;

  const handleClick = () {
    const newState = !enabled;
    setEnabled(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-gray-300">{label}</span>}

      <button
        onClick={handleClick}
        className={\`relative \${s.wrapper} rounded-full transition-colors duration-300 flex items-center overflow-hidden \${enabled ? v.on : v.off}\`}
        aria-pressed={enabled}
      >
        {enabled && variant === "danger" && (
          <span className="absolute inset-0 rounded-full bg-red-500 blur-md opacity-30 z-0" />
        )}

        <span
          className={\`absolute left-1 top-1 rounded-full shadow-md transform transition-transform duration-300 z-10 \${s.knob} \${enabled ? \`\${s.translate} \${v.knobOn}\` : \`translate-x-0 \${v.knobOff}\`}\`}
        />
      </button>
    </div>
  );
}`,
  },
  {
    name: "Minimal Toggle",
    variant: "minimal",
    size: "md",
    usage: `<ToggleSwitch variant="minimal" />`,
    component: `
import React, { useState } from "react";

const variants = {
  minimal: {
    on: "bg-orange-500",
    off: "bg-gray-600",
    knobOn: "bg-white",
    knobOff: "bg-gray-300",
  },
};

const sizes = {
  md: { wrapper: "w-14 h-8", knob: "w-6 h-6", translate: "translate-x-6" },
};

export default function ToggleSwitch({ 
  label, 
  initial = false, 
  variant = "minimal", 
  size = "md", 
  onToggle 
}) {
  const [enabled, setEnabled] = useState(initial);
  const v = variants[variant] || variants.minimal;
  const s = sizes[size] || sizes.md;

  const handleClick = () => {
    const newState = !enabled;
    setEnabled(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-gray-300">{label}</span>}

      <button
        onClick={handleClick}
        className={\`relative \${s.wrapper} rounded-full transition-colors duration-300 flex items-center overflow-hidden \${enabled ? v.on : v.off}\`}
        aria-pressed={enabled}
      >
        <span
          className={\`absolute left-1 top-1 rounded-full shadow-md transform transition-transform duration-300 z-10 \${s.knob} \${enabled ? \`\${s.translate} \${v.knobOn}\` : \`translate-x-0 \${v.knobOff}\`}\`}
        />
      </button>
    </div>
  );
}`,
  },
  {
    name: "Small Toggle",
    variant: "smneon",
    size: "sm",
    usage: `<ToggleSwitch variant="smneon" size="sm" />`,
    component: `
import React, { useState } from "react";

const variants = {
  smneon: {
    on: "bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]",
    off: "bg-gray-700",
    knobOn: "bg-white",
    knobOff: "bg-gray-400",
  },
};

const sizes = {
  sm: { wrapper: "w-10 h-5", knob: "w-4 h-4", translate: "translate-x-5" },
};

export default function ToggleSwitch({ 
  label, 
  initial = false, 
  variant = "smneon", 
  size = "sm", 
  onToggle 
}) {
  const [enabled, setEnabled] = useState(initial);
  const v = variants[variant] || variants.smneon;
  const s = sizes[size] || sizes.sm;

  const handleClick = () => {
    const newState = !enabled;
    setEnabled(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-gray-300">{label}</span>}

      <button
        onClick={handleClick}
        className={\`relative \${s.wrapper} rounded-full transition-colors duration-300 flex items-center overflow-hidden \${enabled ? v.on : v.off}\`}
        aria-pressed={enabled}
      >
        {enabled && variant === "smneon" && (
          <span className="absolute inset-0 rounded-full bg-purple-500 blur-md opacity-30 z-0" />
        )}

        <span
          className={\`absolute left-1 top-1 rounded-full shadow-md transform transition-transform duration-300 z-10 \${s.knob} \${enabled ? \`\${s.translate} \${v.knobOn}\` : \`translate-x-0 \${v.knobOff}\`}\`}
        />
      </button>
    </div>
  );
}`,
  },
  {
    name: "Large Toggle",
    variant: "lgneon",
    size: "lg",
    usage: `<ToggleSwitch variant="lgneon" size="lg" />`,
    component: `
import React, { useState } from "react";

const variants = {
  lgneon: {
    on: "bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]",
    off: "bg-gray-700",
    knobOn: "bg-white",
    knobOff: "bg-gray-400",
  },
};

const sizes = {
  lg: { wrapper: "w-20 h-10", knob: "w-8 h-8", translate: "translate-x-10" },
};

export default function ToggleSwitch({ 
  label, 
  initial = false, 
  variant = "lgneon", 
  size = "lg", 
  onToggle 
}) {
  const [enabled, setEnabled] = useState(initial);
  const v = variants[variant] || variants.lgneon;
  const s = sizes[size] || sizes.lg;

  const handleClick = () => {
    const newState = !enabled;
    setEnabled(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-gray-300">{label}</span>}

      <button
        onClick={handleClick}
        className={\`relative \${s.wrapper} rounded-full transition-colors duration-300 flex items-center overflow-hidden \${enabled ? v.on : v.off}\`}
        aria-pressed={enabled}
      >
        {enabled && variant === "lgneon" && (
          <span className="absolute inset-0 rounded-full bg-purple-500 blur-md opacity-30 z-0" />
        )}

        <span
          className={\`absolute left-1 top-1 rounded-full shadow-md transform transition-transform duration-300 z-10 \${s.knob} \${enabled ? \`\${s.translate} \${v.knobOn}\` : \`translate-x-0 \${v.knobOff}\`}\`}
        />
      </button>
    </div>
  );
}`,
  },
  {
    name: "Disabled Toggle",
    variant: "dsbneon",
    size: "md",
    usage: `<ToggleSwitch variant="dsbneon" disabled />`,
    component: `
import React, { useState } from "react";

const variants = {
  dsbneon: {
    on: "bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]",
    off: "bg-gray-700",
    knobOn: "bg-white",
    knobOff: "bg-gray-400",
  },
};

const sizes = {
  md: { wrapper: "w-14 h-8", knob: "w-6 h-6", translate: "translate-x-6" },
};

export default function ToggleSwitch({ 
  label, 
  initial = false, 
  variant = "dsbneon", 
  size = "md", 
  onToggle,
  disabled = false 
}) {
  const [enabled, setEnabled] = useState(initial);
  const v = variants[variant] || variants.dsbneon;
  const s = sizes[size] || sizes.md;

  const handleClick = () => {
    if (disabled) return;
    const newState = !enabled;
    setEnabled(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div className={\`flex items-center gap-3 \${disabled ? "opacity-50 cursor-not-allowed" : ""}\`}>
      {label && <span className="text-gray-300">{label}</span>}

      <button
        onClick={handleClick}
        disabled={disabled}
        className={\`relative \${s.wrapper} rounded-full transition-colors duration-300 flex items-center overflow-hidden \${enabled ? v.on : v.off} \${disabled ? "cursor-not-allowed" : "cursor-pointer"}\`}
        aria-pressed={enabled}
      >
        {enabled && variant === "dsbneon" && (
          <span className="absolute inset-0 rounded-full bg-purple-500 blur-md opacity-30 z-0" />
        )}

        <span
          className={\`absolute left-1 top-1 rounded-full shadow-md transform transition-transform duration-300 z-10 \${s.knob} \${enabled ? \`\${s.translate} \${v.knobOn}\` : \`translate-x-0 \${v.knobOff}\`}\`}
        />
      </button>
    </div>
  );
}`,
  },
];

export default function TogglePage() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ⏻ Toggle Switch Gallery
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-3xl">
            A collection of beautifully designed, fully customizable toggle
            switches for your React applications. Copy the code and integrate
            them seamlessly into your projects.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {toggles.map((toggle, index) => (
            <div
              key={toggle.variant + toggle.size}
              className="rounded-2xl border border-white/10 bg-neutral-800/80 backdrop-blur-sm p-5 md:p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg hover:border-purple-500/30"
            >
              {/* Preview with label */}
              <div className="flex items-center justify-center w-full mb-5">
                <div className="flex flex-col items-center">
                  {toggle.name === "Disabled Toggle" ? (
                    <ToggleSwitch
                      variant={toggle.variant}
                      size={toggle.size}
                      disabled
                    />
                  ) : (
                    <ToggleSwitch variant={toggle.variant} size={toggle.size} />
                  )}
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg md:text-xl font-semibold mb-4 text-center">
                {toggle.name}
              </h3>

              {/* Copy Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 w-full mb-4">
                <button
                  onClick={() => copyToClipboard(toggle.usage, index, "usage")}
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
                    copyToClipboard(toggle.component, index, "component")
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
              <div className="w-full mt-2">
                <div className="text-xs text-gray-400 mb-1">Usage:</div>
                <pre className="w-full p-3 text-xs bg-black/30 rounded-md text-purple-300 overflow-x-auto">
                  {toggle.usage}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
