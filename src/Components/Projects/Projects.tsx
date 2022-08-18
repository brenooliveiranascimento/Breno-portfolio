import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import DrawingWeb1 from '../../images/Projects/DrawingStation/drawing1.png'
import DrawingWeb2 from '../../images/Projects/DrawingStation/drawing2.png'
import DrawingWeb3 from '../../images/Projects/DrawingStation/drawing3.png'
import ReduxWallet1 from '../../images/Projects/ReduxWallet/wallet1.png'
import ReduxWallet2 from '../../images/Projects/ReduxWallet/wallet2.png'
import DrawingApp1 from '../../images/Projects/DrawingStationMobile/drawingstationMobile1.jpg'
import DrawingApp2 from '../../images/Projects/DrawingStationMobile/drawingstationMobile2.jpg'
import DrawingApp3 from '../../images/Projects/DrawingStationMobile/drawingstationMobile3.jpg'
import Board1 from '../../images/Projects/Board/board1.png'
import Board2 from '../../images/Projects/Board/board2.png'
import Board3 from '../../images/Projects/Board/board3.png'

import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);
import style from './Projects.module.scss'
import Image from 'next/image';

const allProjects: any = {
  drawingStationWeb: {
    name: 'DrawingStation',
    tecnologias: ['React', 'Typescript', 'Redux'],
    images: [
      DrawingWeb1,
      DrawingWeb3,
      DrawingWeb2,
    ],
    description: '',
    gitHub: 'https://github.com/brenooliveiranascimento/Drawing-Station-Web',
    goProject:''
  },
  reduxWallet: {
    name: 'ReduxWallet',
    tecnologias: ['React', 'Typescript', 'Redux'],
    images: [
      ReduxWallet1,
      ReduxWallet2,
    ],
    description: 'https://github.com/brenooliveiranascimento/Redux-wallet-Redux-thunk',
    gitHub: '',
    goProject:''
  },
  drawingStationMobile: {
    name: 'DrawingStation Mobile',
    tecnologias: ['React', 'JavaScript', 'Context Api', 'Firebase'],
    images: [
      DrawingApp2,
      DrawingApp3,
      DrawingApp1,
    ],
    description: '',
    gitHub: 'https://github.com/brenooliveiranascimento/Drawing-Station-Android-Old',
    goProject:''
  },
  // Board: {
  //   name: 'Board',
  //   tecnologias: ['React', 'NextJs', 'Api'],
  //   images: [
  //     Board1,
  //     Board2,
  //     Board3,
  //   ],
  //   description: '',
  //   gitHub: '',
  //   goProject:''
  // },
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
              <section key={project} className={style.card}>
                <ItemCard photos={allProjects[project].images} />
                <h1>{allProjects[project].name}</h1>
                <article>
                {
                  allProjects[project].tecnologias.map((tecnologia: string) => (
                    <span key={tecnologia}>
                      {tecnologia}
                    </span>
                  ))
                }
                </article>
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
  //   autoplay={{
  //     delay: 6000,
  //     disableOnInteraction: false
  // }}
    loop
    navigation={true}
    modules={[Pagination, Navigation]}
    className={style.mySwiper}
  >
      {photos.map((image: string, index: number) => (
        <SwiperSlide
         key={index} className="">
          <Image
            src={image}
            alt="product"
            className="rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
