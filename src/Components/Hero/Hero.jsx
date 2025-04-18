import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



// Images
import cinema from "../../assets/hero/cinema.jpg";
import basket from "../../assets/hero/basket.jpg";
import conference from "../../assets/hero/conf.jpg";

const imageList = [
  {
    id: 1,
    img: cinema,
    title: "Cinema",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 2,
    img: basket,
    title: "Basket",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
  {
    id: 3,
    img: conference,
    title: "Conference",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  },
];

export default function HeroSwiper() {
  return (
    <div className="relative">
      <Swiper
        loop={true}
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {imageList.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="min-h-[550px] sm:min-h-[650px] flex items-center justify-center text-white relative"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 z-0"></div>

              {/* Content */}
              <div className="container relative z-10 px-4 text-center sm:text-left">
                <div className="max-w-2xl mx-auto sm:mx-0">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">{item.title}</h1>
                  <p className="text-sm mt-4">{item.description}</p>
                  <div className="mt-6">
                    <button className="bg-gradient-to-r from-red-500 to-red-500/70 text-white px-6 py-3 rounded-full hover:scale-105 duration-200">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
