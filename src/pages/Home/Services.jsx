import React from "react";

import {
  FaChalkboardTeacher,
  FaVolumeUp,
  FaMobileAlt,
  FaUsers,
} from "react-icons/fa";
import HeadingSection from "../../components/HeadingSection";

const services = [
  {
    id: 1,
    icon: FaChalkboardTeacher,
    title: "Live Accent Training",
    description:
      "Interactive sessions led by expert coaches to sharpen your pronunciation, rhythm, and intonation.",
  },
  {
    id: 2,
    icon: FaVolumeUp,
    title: "Fluency Booster Program",
    description:
      "Customized practice plans to help you speak clearly, confidently, and spontaneously.",
  },
  {
    id: 3,
    icon: FaMobileAlt,
    title: "Mobile Learning App",
    description:
      "Learn anytime, anywhere with bite-sized lessons, practice tasks, and feedback on the go.",
  },
  {
    id: 4,
    icon: FaUsers,
    title: "Community & Mentorship",
    description:
      "Join a global network of learners, mentors, and fluent speakers to stay motivated and grow together.",
  },
];

const Services = () => {
  return (
    <section className="py-12 md:py-18">
      <div>
        <HeadingSection
          title="🎯 Our Core Services"
          heading="Empowering English Learners with Tools That Work"
          description="Each service is crafted to help you speak better, sound smarter, and communicate globally with confidence."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  text-black my-6 px-4 md:px-10 text-center lg:px-25 mt-10">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="bg-white p-4 hover:shadow-md hover:rounded hover:-translate-y-2 hover:border hover:border-blue-600 transitions duration-300">
              <div className="flex justify-center mb-4">
                <Icon className="text-blue-600 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 pt-2">
                {service.title}
              </h3>
              <p className="text-gray-400 pt-2">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
