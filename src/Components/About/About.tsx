import Image from 'next/image';
import React from 'react';
import style from './About.module.scss';
import Eu from '../../images/eu.jpg'
import FadeIn from 'react-fade-in/lib/FadeIn';

function About() {
  return (
    <section id="About" className={style.about_container}>
      <section className={style.me_and_itachi}>
          <Image className={style.eu_image} width={300} height={400} src={Eu}/>
          <article className={style.black_back}/>
      </section>
      <h1>Este sou eu!</h1>
    </section>
  );
};

export default About;
