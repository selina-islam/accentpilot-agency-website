import React from "react";
import HeadingSection from "../components/HeadingSection";

// blog post data array
const blogPosts = [
  {
    id: 1,
    image: "blog1.jpeg",
    category: "Fluency Tips",
    title: "5 Proven Ways to Speak English More Confidently",
    description: "Boost fluency and reduce hesitation with simple techniques.",
    authorImage: "sarah.jpg",
    authorName: "Sarah Ahmed",
    authorRole: "Fluency Coach",
  },
  {
    id: 2,
    image: "blog2.jpeg",
    category: "Accent Training",
    title: "How Accent Reduction Can Improve Your Global Communication",
    description:
      "Learn to speak clearly with a neutral accent for global understanding.",
    authorImage: "daniel.jpg",
    authorName: "Daniel Lee",
    authorRole: "Accent Specialist",
  },
  {
    id: 3,
    image: "blog3.jpeg",
    category: "Career English",
    title: "English for Interviews: What Employers Really Listen For",
    description:
      "Master interview English to impress employers and boost your chances.",
    authorImage: "junaid.jpg",
    authorName: "Junaid Rahman",
    authorRole: "Career Coach",
  },
  {
    id: 4,
    image: "blog4.jpeg",
    category: "Daily Practice",
    title: "Make English a Daily Habit: Simple Routines That Work",
    description:
      "Turn daily English practice into a lifelong fluency habit with ease.",
    authorImage: "lamiya.jpg",
    authorName: "Lamia Haque",
    authorRole: "Learning Strategist",
  },
];

const Blogs = () => {
  return (
    // main section container
    <section className="py-10 px-4 lg:px-22 ">
      {/* heading section with title and subtitle */}
      <div className="py-4">
        <HeadingSection
          title="📝 From Our Experts"
          heading="Practical tips, guides & insights to help you master English — faster and smarter."
        />
      </div>

      {/* blog cards layout using grid */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 items-center justify-center py-4  space-x-4 cursor-pointer">
        {/* loop through each blog post and display as a card */}
        {blogPosts.map((blog) => {
          return (
            // single blog card
            <div key={blog.id} className="shadow shadow-slate-200">
              {/* blog image */}
              <div className="flex rounded-lg bg-white overflow-hidden hover:scale-105 transition transform duration-200">
                <img
                  src={blog.image}
                  alt="Photo"
                  className="object-cover w-full h-48"
                />
              </div>

              {/* blog content */}
              <div className="bg-white text-black p-5">
                <div>
                  {/* category */}
                  <h2 className=" font-bold">
                    Category: {blog.category}
                  </h2>

                  {/* title */}
                  <h4 className="text-gray-800 font-medium py-1 leading-tight">
                    Title: {blog.title}
                  </h4>

                  {/* description */}
                  <p className="text-sm text-gray-500 pb-4">
                    Description: {blog.description}
                  </p>
                </div>

                {/* author info */}
                <div className="flex items-center space-x-2 text-xs pt-2">
                  {/* author image */}
                  <div>
                    <img
                      src={blog.authorImage}
                      alt="photo"
                      className="w-8 h-8 rounded-full"
                    />
                  </div>

                  {/* author name and role */}
                  <div>
                    <p className="font-bold">{blog.authorName}</p>
                    <p className="text-gray-500">{blog.authorRole}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
