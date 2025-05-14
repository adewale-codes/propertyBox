// components/Hero.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// Custom CSS (you can move to global.css if needed)
const customSwiperStyles = `
  .custom-pagination .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    border-radius: 9999px;
    background-color: white;
    border: 2px solid red;
    opacity: 1;
    margin: 0 6px !important;
  }

  .custom-pagination .swiper-pagination-bullet-active {
    background-color: red;
    border-color: red;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    background-color: red;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 20px;
  }
`;

const slides = [
  {
    title: "Professional Property Managers and Facility Managers",
    subtitle: "You can trust us with your projects...",
    bg: "/h1.jpg",
  },
  {
    title: "Trusted Real Estate Experts",
    subtitle: "Helping you make smarter property decisions.",
    bg: "/h2.jpg",
  },
  {
    title: "Reliable Facility Maintenance",
    subtitle: "We keep your buildings running smoothly.",
    bg: "/h3.jpg",
  },
];

const Hero = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = customSwiperStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true, el: ".custom-pagination" }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-20 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {/* Left: Text */}
              <div className="text-white max-w-xl z-10 text-center lg:text-left w-full lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                  {slide.title}
                </h2>
                <p className="mt-4 text-lg font-semibold">{slide.subtitle}</p>
                <Link
                  href="/Contact"
                  className="inline-block mt-6 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded"
                >
                  Contact Us
                </Link>
              </div>

              {/* Right: Woman Image */}
              <div className="hidden lg:block w-full max-w-sm relative h-[500px]">
                <Image
                  src="/woman.png"
                  alt="Woman"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="absolute bottom-6 w-full flex justify-center custom-pagination z-10"></div>
    </section>
  );
};

export default Hero;
