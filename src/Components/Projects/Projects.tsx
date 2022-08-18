import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import DrawingWeb1 from '../../images/Projects/DrawingStation/drawing1.png'
import DrawingWeb2 from '../../images/Projects/DrawingStation/drawing2.png'
import DrawingWeb3 from '../../images/Projects/DrawingStation/drawing3.png'
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
import style from './Projects.module.scss'
import Image from 'next/image';
const images = [
  DrawingWeb1,
  DrawingWeb3,
  DrawingWeb2,
];
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";


function Projects() {
  return (
    <main
      className={style.project_container}
    >
      <section
        className={style.projectAligns}
      >
        <ItemCard />
      </section>
    </main>
  );
};

export default Projects;


const ItemCard = () => {
  return (
    <Swiper
    pagination={true}
    style={{
      width: 800
    }}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false
  }}
    loop
    navigation={true}
    modules={[Pagination, Navigation]}
    className={style.mySwiper}
  >
      {images.map((image, i) => (
        <SwiperSlide
         key={i} className="">
          <Image
            src={image}
            key={i}
            alt="product"
            className="rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
