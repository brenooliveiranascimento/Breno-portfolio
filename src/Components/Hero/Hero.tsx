import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import style from './hero.module.scss'
import Header from '../Header/Header';
import FadeIn from 'react-fade-in'

function Hero() {
  return (
    <section id="Home" className={style.heroContainer}>
      <section className={style.hero_darkness}>
        <Header />
        <section className={style.centralize_content}>
          <FadeIn>
            <article className={style.text_container}>
              <h2>
                Olá me chamo Breno e sou desenvolvedor
              </h2>
              <TypeAnimation
                sequence={['FrontEnd Mobile.', 1300,]}
                style={{ fontSize: '3em' }}
                wrapper="h1"
                speed={5}
              />
            </article>
          </FadeIn>
        </section>
      </section>
    </section>
  )
}

export default Hero
