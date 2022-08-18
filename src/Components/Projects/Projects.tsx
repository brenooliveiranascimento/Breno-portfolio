import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import DrawingWeb1 from '../../images/Projects/DrawingStation/drawing1.png'
import DrawingWeb2 from '../../images/Projects/DrawingStation/drawing2.png'
import DrawingWeb3 from '../../images/Projects/DrawingStation/drawing3.png'
import ReduxWallet1 from '../../images/Projects/ReduxWallet/wallet1.png'
import ReduxWallet2 from '../../images/Projects/ReduxWallet/wallet2.png'

import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
import style from './Projects.module.scss'
import Image from 'next/image';

const allProjects = {
  drawingStationWeb: {
    name: 'DrawingStation',
    tecnologias: ['React', 'Typescript', 'Redux'],
    images: [
      DrawingWeb1,
      DrawingWeb3,
      DrawingWeb2,
    ],
    description: '',
    gitHub: '',
    goProject:''
  },
  reduxWallet: {
    name: 'ReduxWallet',
    tecnologias: ['React', 'Typescript', 'Redux'],
    images: [
      ReduxWallet1,
      ReduxWallet2,
    ],
    description: '',
    gitHub: '',
    goProject:''
  },
}

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
import { redirect } from 'next/dist/server/api-utils';


function Projects() {
  return (
    <main className={style.project_container} >
      <section className={style.projectAligns}>
          {
            Object.keys(allProjects).map((project) => (
              <section className={style.card}>
                <ItemCard photos={allProjects[project].images} />
                <h1>{allProjects[project].name}</h1>
              </section>
            ))
          }

      </section>
    </main>
  );
};

export default Projects;


const ItemCard = ({photos}: any) => {
  return (
    <Swiper
    pagination={true}
    style={{
      width: 800
    }}
    autoplay={{
      delay: 6000,
      disableOnInteraction: false
  }}
    loop
    navigation={true}
    modules={[Pagination, Navigation]}
    className={style.mySwiper}
  >
      {photos.map((image, i) => (
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
