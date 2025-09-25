// src/components/UniqueCard.jsx
import React from "react";

// Basic Unique Card
export function BasicCard({
  title,
  description,
  children,
}) {
  return (
    <div className="relative p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-800/30 border border-purple-500/30 backdrop-blur-sm shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl shadow-lg shadow-purple-500/20"></div>
      <div className="relative z-10">
        {title && (
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        )}
        {description && <p className="text-gray-300">{description}</p>}
        {children}
      </div>
    </div>
  );
}

// Profile Card
export function ProfileCard({ name, role, avatar, stats }) {
  return (
    <div className="relative p-6 rounded-xl bg-gradient-to-br from-cyan-900/30 to-emerald-800/30 border border-cyan-500/30 backdrop-blur-sm shadow-lg max-w-xs w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-xl shadow-lg shadow-cyan-500/20"></div>
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full border-2 border-cyan-400/50 p-1 mb-4">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-cyan-300 mb-4">{role}</p>

        <div className="flex justify-between w-full mt-4 border-t border-cyan-500/30 pt-4">
          <div className="text-center">
            <p className="text-white font-bold">{stats.posts}</p>
            <p className="text-cyan-300 text-sm">Posts</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold">{stats.followers}</p>
            <p className="text-cyan-300 text-sm">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-white font-bold">{stats.following}</p>
            <p className="text-cyan-300 text-sm">Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stats Card
export function StatsCard({ title, value, change, icon }) {
  const isPositive = change.startsWith("+");

  return (
    <div className="relative p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-indigo-800/30 border border-blue-500/30 backdrop-blur-sm shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl shadow-lg shadow-blue-500/20"></div>
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-blue-300 text-sm">{title}</p>
            <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
            <p
              className={`text-sm mt-2 ${
                isPositive ? "text-green-400" : "text-red-400"
              }`}
            >
              {change} from last month
            </p>
          </div>
          <div className="text-2xl bg-blue-500/20 p-3 rounded-lg">{icon}</div>
        </div>
      </div>
    </div>
  );
}

// Product Card
export function ProductCard({ name, price, image, rating, discount }) {
  return (
    <div className="relative rounded-xl bg-gradient-to-br from-gray-900/30 to-gray-800/30 border border-gray-700/30 backdrop-blur-sm shadow-lg overflow-hidden max-w-xs w-full">
      <div className="absolute top-4 right-4 z-10">
        {discount > 0 && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
      </div>

      <div className="h-48 bg-gray-700/30 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{name}</h3>

        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating) ? "text-yellow-400" : "text-gray-600"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-gray-400 text-sm ml-2">({rating})</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            {discount > 0 ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-white">
                  ${(price * (1 - discount / 100)).toFixed(2)}
                </span>
                <span className="text-sm text-gray-400 line-through ml-2">
                  ${price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-white">
                ${price.toFixed(2)}
              </span>
            )}
          </div>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg text-sm transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

// Testimonial Card
export function TestimonialCard({ quote, author, role, avatar, rating }) {
  return (
    <div className="relative p-6 rounded-xl bg-gradient-to-br from-pink-900/30 to-rose-800/30 border border-pink-500/30 backdrop-blur-sm shadow-lg max-w-md w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-xl shadow-lg shadow-pink-500/20"></div>
      <div className="relative z-10">
        <div className="text-4xl text-pink-400 mb-4">"</div>
        <p className="text-gray-200 italic mb-6">{quote}</p>

        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-pink-400/50 mr-4">
            <img
              src={avatar}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-white font-semibold">{author}</h4>
            <p className="text-pink-300 text-sm">{role}</p>
          </div>

          <div className="ml-auto flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < rating ? "text-yellow-400" : "text-gray-600"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Pricing Card
export function PricingCard({
  plan,
  price,
  period,
  features,
  highlighted = false,
}) {
  return (
    <div
      className={`relative p-8 rounded-xl border backdrop-blur-sm shadow-lg transform transition-all duration-300 hover:scale-105 ${
        highlighted
          ? "bg-gradient-to-br from-purple-900/40 to-pink-800/40 border-purple-500/50 shadow-purple-500/20"
          : "bg-gradient-to-br from-gray-900/30 to-gray-800/30 border-gray-700/30"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full">
          POPULAR
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">{plan}</h3>
        <div className="my-4">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="text-gray-400">/{period}</span>
        </div>
      </div>

      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          highlighted
            ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
            : "bg-gray-700 text-white hover:bg-gray-600"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}

export default BasicCard;
