import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaStar } from "react-icons/fa";

import img1 from "../../assets/products/gswVsGr.jpeg";
import img2 from "../../assets/products/gswVsLak.jpeg";
import img3 from "../../assets/products/conf.jpeg";
import img4 from "../../assets/products/conf.jpeg";

// 🧩 Data
const EventsData = [
  { id: 1, img: img1, title: "GswVsGr", rating: 5.0, color: "white", aosDelay: "0" },
  { id: 2, img: img2, title: "GswVsLak", rating: 4.5, color: "red", aosDelay: "200" },
  { id: 3, img: img3, title: "Conference", rating: 4.7, color: "brown", aosDelay: "400" },
  { id: 4, img: img4, title: "Conference", rating: 5.0, color: "yellow", aosDelay: "600" },
  { id: 5, img: img1, title: "Startup Pitch", rating: 4.3, color: "blue", aosDelay: "800" },
  { id: 6, img: img4, title: "Hackathon Finals", rating: 4.8, color: "green", aosDelay: "1000" },
  { id: 7, img: img3, title: "GswVsChi", rating: 4.6, color: "orange", aosDelay: "1200" },
  { id: 8, img: img2, title: "LakVsChi", rating: 4.9, color: "purple", aosDelay: "1400" },
  { id: 9, img: img4, title: "Developer Meetup", rating: 4.4, color: "cyan", aosDelay: "1600" },
  { id: 10, img: img3, title: "Annual Summit", rating: 5.0, color: "teal", aosDelay: "1800" },
];

// 🔧 Utility to split array into chunks
const chunkArray = (arr, size) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};

export default function SwiperC() {
  const chunkedData = chunkArray(EventsData, 3); // 👈 Show 3 per slide

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {chunkedData.map((group, index) => (
        <SwiperSlide key={index}>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-items-center'>
            {group.map((item) => (
              <div
                data-aos="fade-up"
                data-aos-delay={item.aosDelay}
                key={item.id}
                className="w-full h-full flex flex-col justify-between p-4 bg-white rounded-xl shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
