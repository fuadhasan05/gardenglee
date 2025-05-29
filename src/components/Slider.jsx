import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import slider1 from "../assets/garden-banner1.jpg";
import slider2 from "../assets/garden-banner2.jpg";
import slider3 from "../assets/garden-banner3.jpg";
import slider4 from "../assets/garden-banner4.jpg";

const events = [
  {
    image: slider1,
    title: "Spring Flower Festival",
    description:
      "Celebrate the beauty of spring with vibrant flowers and fun activities for all ages.",
  },
  {
    image: slider2,
    title: "Garden Workshop",
    description:
      "Join our hands-on workshop to learn about sustainable gardening techniques.",
  },
  {
    image: slider3,
    title: "Family Picnic Day",
    description:
      "Bring your family and enjoy a relaxing picnic surrounded by nature.",
  },
  {
    image: slider4,
    title: "Evening Jazz in the Park",
    description: "Unwind with live jazz music in the serene garden atmosphere.",
  },
];

const Slider = () => {
  return (
    <div className="py-10">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {events.map((event, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white p-8 rounded-lg text-center">
                  <h2 className="text-8xl font-extrabold mb-5">
                    {event.title}
                  </h2>
                  <p className=" text-2xl font-extrabold">
                    {event.description}
                  </p>
                  <button className="bg-green-700 text-white border-0 px-10 py-2 btn mt-10">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
