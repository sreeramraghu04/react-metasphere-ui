import React from "react";

const variants = {
  spinner: (
    <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
  ),
  pulse: (
    <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
  ),
  dots: (
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:-.6s]"></div>
    </div>
  ),
  bars: (
    <div className="flex space-x-1">
      <div className="w-2 h-5 bg-purple-500 animate-[pulse_1s_ease-in-out_infinite]"></div>
      <div className="w-2 h-5 bg-pink-500 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
      <div className="w-2 h-5 bg-indigo-500 animate-[pulse_1.4s_ease-in-out_infinite]"></div>
    </div>
  ),
  ring: (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute inset-2 border-4 border-pink-500 border-t-transparent rounded-full animate-spin [animation-direction:reverse]"></div>
    </div>
  ),
  wave: (
    <div className="flex space-x-1 items-end">
      <div className="w-2 h-4 bg-purple-500 animate-[bounce_0.6s_infinite]"></div>
      <div className="w-2 h-6 bg-pink-500 animate-[bounce_0.6s_infinite_0.2s]"></div>
      <div className="w-2 h-8 bg-indigo-500 animate-[bounce_0.6s_infinite_0.4s]"></div>
      <div className="w-2 h-6 bg-pink-500 animate-[bounce_0.6s_infinite_0.6s]"></div>
      <div className="w-2 h-4 bg-purple-500 animate-[bounce_0.6s_infinite_0.8s]"></div>
    </div>
  ),
  orbit: (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500 animate-spin"></div>
      <div className="absolute w-3 h-3 bg-pink-500 rounded-full animate-[spin_2s_linear_infinite] top-0 left-1/2 -translate-x-1/2"></div>
    </div>
  ),
  glow: (
    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-ping"></div>
  ),
};

export default function Loader({ variant = "spinner" }) {
  return (
    <div className="flex justify-center items-center p-4">
      {variants[variant] || variants.spinner}
    </div>
  );
}
