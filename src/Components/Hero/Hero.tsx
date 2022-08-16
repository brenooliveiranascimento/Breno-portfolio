import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import style from './hero.module.scss'
import eu from '../../images/eu.jpg'
import Header from '../Header/Header';

function Hero() {
  return (
    <section className={style.heroContainer}>
      <section className={style.hero_darkness}>
        <Header />
        <section className={style.centralize_content}>
          <article className={style.text_container}>
            <h2>
              Olá me chamo Breno e sou desenvolvedor
            </h2>
            <TypeAnimation
              sequence={['FrontEnd Mobile.', 1300,]}
                            //  Continuing previous Text
              style={{ fontSize: '3em' }}
              wrapper="h1"
            />
          </article>
        </section>
      </section>
    </section>
  )
}

export default Hero
