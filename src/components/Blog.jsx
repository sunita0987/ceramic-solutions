import React from "react";
import { BLOG_POSTS } from "../utils/helper";

const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#000000]">
          Our Blog
        </h2>
        <p className="mt-4 text-sm sm:text-base text-[#010101] max-w-xl mx-auto">
          Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt
          primasofi dede facebooka: förutom tivaligt. Fejkade
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            className="bg-[#ffffff] rounded-2xl shadow p-5 hover:shadow-lg transition-all"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-base sm:text-lg font-semibold text-[#000000]">
              {post.title}
            </h3>
            <a
              href="#"
              className="text-[#FF0000] font-medium inline-flex items-center mt-3 group"
            >
              Learn more
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
