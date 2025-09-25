// src/pages/CardsPage.jsx
import React, { useState } from "react";
import {
  BasicCard,
  ProfileCard,
  StatsCard,
  ProductCard,
  TestimonialCard,
  PricingCard,
} from "../components/UniqueCard";

const cards = [
  {
    name: "Basic Card",
    usage: `<NeonCard title="Basic Card" description="This is a basic card." />`,
    component: `
import React from "react";
import { UniqueCard } from "./UniqueCard";

export default function UniqueCardExample() {
  return <UniqueCard title="Basic Card" description="This is a neon card." />;
}`,
    preview: (
      <BasicCard title="Basic Card" description="This is a basic card." />
    ),
  },
  {
    name: "Profile Card",
    usage: `<ProfileCard 
  name="Jane Smith" 
  role="Frontend Developer" 
  avatar="/avatar.jpg" 
  stats={{ posts: 124, followers: 2345, following: 321 }}
/>`,
    component: `
import React from "react";
import { ProfileCard } from "./UniqueCard";

export default function ProfileCardExample() {
  return (
    <ProfileCard 
      name="Jane Smith" 
      role="Frontend Developer" 
      avatar="/avatar.jpg" 
      stats={{ posts: 124, followers: 2345, following: 321 }}
    />
  );
}`,
    preview: (
      <ProfileCard
        name="Jane Smith"
        role="Frontend Developer"
        avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
        stats={{ posts: 124, followers: 2345, following: 321 }}
      />
    ),
  },
  {
    name: "Stats Card",
    usage: `<StatsCard 
  title="Website Traffic" 
  value="45.2K" 
  change="+12.3%" 
  icon="📊"
/>`,
    component: `
import React from "react";
import { StatsCard } from "./UniqueCard";

export default function StatsCardExample() {
  return (
    <StatsCard 
      title="Website Traffic" 
      value="45.2K" 
      change="+12.3%" 
      icon="📊"
    />
  );
}`,
    preview: (
      <StatsCard
        title="Website Traffic"
        value="45.2K"
        change="+12.3%"
        icon="📊"
      />
    ),
  },
  {
    name: "Product Card",
    usage: `<ProductCard 
  name="Wireless Headphones" 
  price={129.99} 
  image="/headphones.jpg"
  rating={4.5}
  discount={15}
/>`,
    component: `
import React from "react";
import { ProductCard } from "./UniqueCard";

export default function ProductCardExample() {
  return (
    <ProductCard 
      name="Wireless Headphones" 
      price={129.99} 
      image="/headphones.jpg"
      rating={4.5}
      discount={15}
    />
  );
}`,
    preview: (
      <ProductCard
        name="Wireless Headphones"
        price={129.99}
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=240&q=80"
        rating={4.5}
        discount={15}
      />
    ),
  },
  {
    name: "Testimonial Card",
    usage: `<TestimonialCard 
  quote="This product changed my life! The quality is exceptional and the customer service was outstanding." 
  author="Sarah Johnson" 
  role="Product Designer" 
  avatar="/avatar.jpg"
  rating={5}
/>`,
    component: `
import React from "react";
import { TestimonialCard } from "./UniqueCard";

export default function TestimonialCardExample() {
  return (
    <TestimonialCard 
      quote="This product changed my life! The quality is exceptional and the customer service was outstanding." 
      author="Sarah Johnson" 
      role="Product Designer" 
      avatar="/avatar.jpg"
      rating={5}
    />
  );
}`,
    preview: (
      <TestimonialCard
        quote="This product changed my life! The quality is exceptional and the customer service was outstanding."
        author="Sarah Johnson"
        role="Product Designer"
        avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=80"
        rating={5}
      />
    ),
  },
  {
    name: "Pricing Card",
    usage: `<PricingCard 
  plan="Pro" 
  price={29} 
  period="month" 
  features={["10 Projects", "5GB Storage", "Priority Support", "Custom Domain"]}
  highlighted={true}
/>`,
    component: `
import React from "react";
import { PricingCard } from "./UniqueCard";

export default function PricingCardExample() {
  return (
    <PricingCard 
      plan="Pro" 
      price={29} 
      period="month" 
      features={["10 Projects", "5GB Storage", "Priority Support", "Custom Domain"]}
      highlighted={true}
    />
  );
}`,
    preview: (
      <PricingCard
        plan="Pro"
        price={29}
        period="month"
        features={[
          "10 Projects",
          "5GB Storage",
          "Priority Support",
          "Custom Domain",
        ]}
        highlighted={true}
      />
    ),
  },
];

export default function CardsPage() {
  const [copiedCard, setCopiedCard] = useState(null);
  
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, cardIndex, type) => {
    navigator.clipboard.writeText(text);
    setCopiedCard(cardIndex);
    setCopiedType(type);

    setTimeout(() => {
      setCopiedCard(null);
      setCopiedType(null);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🧩 Unique Cards
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-3xl">
            A collection of beautifully designed card components. Copy usage or
            full component code instantly.
          </p>
        </header>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-start">
          {cards.map((card, index) => (
            <div
              key={index}
              className="inline-block p-4 sm:p-5 md:p-6 rounded-xl border border-white/10 
             bg-neutral-800/80 flex-col items-center gap-4 md:gap-5 
             shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 
             transform hover:-translate-y-1 w-auto h-auto"
            >
              {/* Preview - Allow card to take natural size */}
              <div className="flex justify-center mb-2 w-full max-w-[300px] items-center">
                <div className="max-w-full w-full h-auto">{card.preview}</div>
              </div>

              {/* Card Name */}
              <h3 className="text-lg md:text-xl font-semibold text-white text-center">
                {card.name}
              </h3>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <button
                  onClick={() => copyToClipboard(card.usage, index, "usage")}
                  className={`px-4 py-2 text-sm md:text-base rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg flex-1 sm:flex-none ${
                    copiedCard === index && copiedType === "usage"
                      ? "bg-green-600"
                      : "bg-purple-600 hover:bg-purple-700 shadow-purple-500/20"
                  }`}
                >
                  {copiedCard === index && copiedType === "usage"
                    ? "Copied!"
                    : "Copy Usage"}
                </button>
                <button
                  onClick={() =>
                    copyToClipboard(card.component, index, "component")
                  }
                  className={`px-4 py-2 text-sm md:text-base rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg flex-1 sm:flex-none ${
                    copiedCard === index && copiedType === "component"
                      ? "bg-green-600"
                      : "bg-pink-600 hover:bg-pink-700 shadow-pink-500/20"
                  }`}
                >
                  {copiedCard === index && copiedType === "component"
                    ? "Copied!"
                    : "Copy Component"}
                </button>
              </div>

              {/* Code Preview */}
              <div className="w-full mt-2">
                <pre className="w-full p-3 text-xs sm:text-sm bg-black/30 rounded-md text-purple-300 overflow-x-auto border border-white/5">
                  {card.usage}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Note */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>This layout is fully responsive and works on all screen sizes!</p>
        </div>
      </div>
    </div>
  );
}
