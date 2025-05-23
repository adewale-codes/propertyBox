"use client";

import Link from "next/link";
import {
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
  ArrowDownTrayIcon,
  MegaphoneIcon,
  Cog6ToothIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    title: "Estate Management",
    description: "We manage estates for better effectiveness.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Facility Management",
    description: "We offer facility management for a complete property.",
    icon: UserGroupIcon,
  },
  {
    title: "Construction",
    description: "We construct building projects excellently.",
    icon: ArrowDownTrayIcon,
  },
  {
    title: "Building Planning",
    description: "Architecture, documentation and total planning.",
    icon: MegaphoneIcon,
  },
  {
    title: "PropertyBox Software",
    description: "A web-based property management system.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Estate Agency",
    description: "Complete agency service for estates.",
    icon: HeartIcon,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          PropertyBox offers total property management services. From planning
          to construction to management to fully-featured property management
          software.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-20 text-left">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="rounded-full p-1 border-[3px] border-gray-100 shadow">
                <div className="rounded-full p-4 bg-white border-[3px] border-gray-100 shadow flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-red-600" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gray-100 rounded-md py-12 px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to get started
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            We are waiting to hear from you. <br />
            Contact us to see how we can be of service to you.
          </p>
          <Link
            href="/Contact"
            className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 text-sm font-medium relative"
          >
            Contact Us
            {/* Red triangle pointer */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-red-600"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
