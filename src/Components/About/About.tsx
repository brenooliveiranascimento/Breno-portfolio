import Image from 'next/image';
import React, { useState } from 'react';
import style from './About.module.scss';
import Eu from '../../images/eu.jpg'
import Itachi from '../../images/Itachi.jpg'
import FadeIn from 'react-fade-in/lib/FadeIn';
import MeAndItachi from './Me_And_Itachi';

function About() {
  const [showMeOrItachi, setShow] = useState('me');
  return (
    <section id="About" className={style.about_container}>
        <MeAndItachi
          showMeOrItachi={showMeOrItachi}
          changeImage={(img: string) => setShow(img)}
        />
      
      <section className={style.about_inf_area}>
        <h1 data-aos="fade-up-left">
          {
            showMeOrItachi === 'me' ? (
              "Este sou eu!"
            ) : (
              "E este é o meu Doguinho, Itachi"
            )
          }
        </h1>
      </section>
    </section>
  );
};

export default About;
