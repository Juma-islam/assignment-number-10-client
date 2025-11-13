import React, { useState } from "react";
import communityCleaning from "../assets/vitaly-gariev-WwWPcQkzHPk-unsplash.jpg";
import garbageIssue from "../assets/georgii-eletskikh-_bf0CtNBCwk-unsplash.jpg";
import sustainabilityAction from "../assets/rema-Mjw7z363uq8-unsplash.jpg";
import awarenessCampaign from "../assets/bermix-studio-NztECzFtPyw-unsplash.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};
const BannerSection = () => {
  const [active, setActive] = useState(0);
  const slides = [
    {
      id: 1,
      img: communityCleaning,
      title: "Clean Together, Live Better.",
      text: "When we unite to clean our surroundings, we create a healthier, happier, and more peaceful community for everyone.",
    },
    {
      id: 2,
      img: garbageIssue,
      title: "Report Waste, Restore Beauty.",
      text: "Spotted garbage or litter in your area? Report it instantly and help bring back the beauty of your community",
    },
    {
      id: 3,
      img: sustainabilityAction,
      title: "Sustain Today for a Greener Tomorrow.",
      text: "Small actions like recycling, proper waste disposal, and tree planting build the foundation of a sustainable future.",
    },
    {
      id: 4,
      img: awarenessCampaign,
      title: "Together for a cleaner tomorrow.",
      text: "Join awareness campaigns and inspire others to take action — because change starts when the community cares.",
    },
  ];
  return (
    <div className="w-11/12 mx-auto my-8 rounded-xl overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        className="rounded-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative">
              <img
                src={slide.img}
                alt=""
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
                <motion.h2
                  variants={fadeUp}
                  initial="hidden"
                  animate={active === index ? "visible" : "hidden"}
                  transition={{ delay: 0.3 }}
                  className="text-white text-xl sm:text-2xl md:text-4xl font-bold mb-4 max-w-2xl"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate={active === index ? "visible" : "hidden"}
                  transition={{ delay: 0.4 }}
                  className="text-white text-sm sm:text-base md:text-lg max-w-2xl"
                >
                  {slide.text}
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSection;
