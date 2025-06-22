import React from "react";
import HeadingSection from "../../components/HeadingSection";
import { FaAppStoreIos, FaMagento, FaPodcast } from "react-icons/fa";
import { RxNotionLogo } from "react-icons/rx";
import { LuNetwork } from "react-icons/lu";

// logos data with icon component and name
const logos = [
  { id: 1, icon: FaMagento, name: "Speechly" },
  { id: 2, icon: RxNotionLogo, name: "Notion for English Learners" },
  { id: 3, icon: LuNetwork, name: "Alumni Network" },
  { id: 4, icon: FaAppStoreIos, name: "VocabBoost Mobile App" },
  { id: 5, icon: FaPodcast, name: "Podcasters" },
];

const CompanyLogos = () => {
  return (
    <section>
      <div className="">
        {/* heading section with title, heading and description */}
        <div className="px-3 lg:px-28 my-12">
          <HeadingSection
            title="🤝 Trusted by Industry Leaders"
            heading="We proudly partner with innovative companies and learning platforms that share our mission: making English fluency accessible to all."
            description="We join hands with visionary tools, thinkers, and educators to craft an English learning experience that’s bold, smart, and future-ready."
          />
        </div>

        {/* logos scroll container */}
        <div className="overflow-hidden whitespace-nowrap bg-white">
          {/* animated scrolling logos row */}
          <div className="inline-flex animate-scroll space-x-10 lg:space-x-25 py-6 md:py-8">
            {logos.map((logo) => {
              const IconComponent = logo.icon;
              return (
                // single logo item
                <div
                  key={logo.id}
                  className="bg-gray-200 flex items-center justify-center rounded-full w-16 h-16 hover:scale-110 transition duration-300"
                >
                  {/* icon component */}
                  <IconComponent
                    className="text-blue-600 text-3xl"
                    title={logo.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
