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
    tecnologias: ['React', 'Typescript', 'Redux', 'FireBase'],
    images: [
      DrawingWeb1,
      DrawingWeb3,
      DrawingWeb2,
    ],
    description: `Minha Plataforma de ensino de desenho realista, a desenvolvi com o intuito de publicar minahs aulas e auxiliar os meus alunos diretamente dela.
     Na plataforma é possivél os alunos atualizarem seu progresso conforme progridem no curso, além de poderem comentar e tirar duvidas nas diretamente nas aulas`,
    gitHub: 'https://github.com/brenooliveiranascimento/Drawing-Station-Web',
    goProject:'https://drawing-station-web.vercel.app/'
  },
  reduxWallet: {
    name: 'ReduxWallet',
    tecnologias: ['React', 'Typescript', 'Redux'],
    images: [
      ReduxWallet1,
      ReduxWallet2,
    ],
    description: `Essa é uma aplicação de gerenciamento de despesas nela pude praticar o uso do Redux 
    tanto de forma sincrona quanto de forma assincrona, além de praticar o uso do TypeScript, a aplicação consome e atualiza um banco do dados conforme o usuário adiciona ou edita os lançamentos.`,
    gitHub: 'https://github.com/brenooliveiranascimento/Redux-wallet-Redux-thunk',
    goProject:'https://redux-thunk-wallet-breno.vercel.app/'
  },
  drawingStationMobile: {
    name: 'DrawingStation Mobile',
    tecnologias: ['ReactNative', 'JavaScript', 'Context Api', 'Firebase'],
    images: [
      DrawingApp2,
      DrawingApp3,
      DrawingApp1,
    ],
    description: `Aplicação Mobile da minha plataforma de ensino, Possui as mesmas funcionalidade da página web
      porém com a vantagem de esta rodando de forma nativa nos dispositivos moveis dos usúarios.`,
    gitHub: 'https://github.com/brenooliveiranascimento/Drawing-Station-Android-Old',
    goProject:'https://play.google.com/store/apps/details?id=com.drawingstation'
  },
  Board: {
    name: 'Board',
    tecnologias: ['React', 'NextJs', 'Api'],
    images: [
      Board1,
      Board2,
      Board3,
    ],
    description: `Essa é uma aplicação de lista de tarefas com plano premium através da 
    integração a api de pagamentos da PayPal, assim qeu se adquire o plano, algumas funções na plicação são 
    liberadas, como por exemplo editar as tarefas já existentes. O sistema de Login através do GitHub Feito com NextAuth 
    `,
    gitHub: 'https://github.com/brenooliveiranascimento/Board',
    goProject:'https://board-anotacoes.herokuapp.com/'
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
              <section key={project} className={style.card}>
                <ItemCard photos={allProjects[project].images} />
                <h1>{allProjects[project].name}</h1>
                <nav>
                {
                  allProjects[project].tecnologias.map((tecnologia: string) => (
                    <span key={tecnologia}>
                      {tecnologia}
                    </span>
                  ))
                }
                </nav>
                <article className={style.description_content}>
                  <p>
                    {allProjects[project].description}
                  </p>
                </article>
                <nav>
                  <a
                    href={allProjects[project].goProject}
                    target="_blank"
                  >
                    Project
                  </a>
                  <a
                    href={allProjects[project].gitHub}
                    target="_blank"
                  >
                    gitHub
                  </a>
                </nav>
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
      width: 600
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
