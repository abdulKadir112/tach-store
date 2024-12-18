import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Logo data
const logos = [
  { src: "https://placehold.co/100x50?text=Roccat", alt: "Roccat" },
  { src: "https://placehold.co/100x50?text=MSI", alt: "MSI" },
  { src: "https://placehold.co/100x50?text=Razer", alt: "Razer" },
  { src: "https://placehold.co/100x50?text=ADATA", alt: "ADATA" },
  { src: "https://placehold.co/100x50?text=HP", alt: "HP" },
  { src: "https://placehold.co/100x50?text=GIGABYTE", alt: "GIGABYTE" },
];

export default function LogoSlider() {
  return (
    <div className="w-full bg-gray-100 py-6 overflow-hidden">
      {/* Swiper Logo Slider */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        dir="rtl" // Set the direction to right-to-left
        autoplay={{
          delay: 0, // Continuous sliding
          disableOnInteraction: false,
          reverseDirection: true, // Reverse animation direction
        }}
        speed={3000} // Adjust animation speed
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 6 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-24 h-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
