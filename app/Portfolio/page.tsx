"use client";

import Image from "next/image";
import { useState } from "react";
import { EyeIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { portfolioProjects } from "./portfolio";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<any>(null);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Portfolio
        </h2>
        <p className="text-gray-600 mb-6">
          View a portfolio of our recent projects.
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded mb-10 hover:bg-red-700 text-sm font-medium">
          RECENT WORKS
        </button>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {portfolioProjects.map((project, index) => (
            <div key={index} className="relative group cursor-pointer">
              <Image
                src={project.cover}
                alt={project.title}
                width={300}
                height={200}
                className="object-cover w-full h-40"
              />
              <div className="absolute inset-0 bg-red-700/90 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <h3 className="text-md font-semibold">{project.title}</h3>
                <p className="text-sm">{project.status}</p>
                <button
                  onClick={() => setActiveProject(project)}
                  className="flex items-center mt-4 text-sm underline"
                >
                  <EyeIcon className="w-4 h-4 mr-1" />
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-white rounded p-4 relative max-w-5xl w-full">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-1"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>

            <h3 className="text-xl font-bold text-center mb-6">
              {activeProject.title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {activeProject.images.map((img: string, i: number) => (
                <Image
                  key={i}
                  src={img}
                  alt={`Preview ${i + 1}`}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover border border-green-500"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
