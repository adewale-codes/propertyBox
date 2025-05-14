"use client";

import {
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ArrowDownTrayIcon,
  MegaphoneIcon,
  Cog6ToothIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    title: "User-friendly",
    description: "PropertyBox Software is extremely user-friendly.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Manage Users",
    description: "Register users and restrict access level and privileges.",
    icon: UserGroupIcon,
  },
  {
    title: "Easy to customize",
    description: "Customize tenancy forms and more and download easily.",
    icon: ArrowDownTrayIcon,
  },
  {
    title: "Property Alerts",
    description:
      "Never miss a pay. Get alerts on outstanding rental pay and tenancy.",
    icon: MegaphoneIcon,
  },
  {
    title: "Generate Reports",
    description:
      "Get important reports on properties, investments and more easily.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Start Free",
    description: "Get started free. No credit card required.",
    icon: HeartIcon,
  },
];

const Features = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          PropertyBox Software Features
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          PropertyBox is a web-based software package for rental property
          management, providing a full package of online property management
          tools, flexible access to property data tailored to fit the uniqueness
          of The Nigerian real estate environment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="rounded-full p-1 border-2 border-white shadow">
                <div className="rounded-full p-4 bg-white border-4 border-white shadow flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
