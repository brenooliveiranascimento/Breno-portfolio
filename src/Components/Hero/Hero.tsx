import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import style from './hero.module.scss'

function Hero() {
  return (
    <section className={style.heroContainer}>
      <section className={style.hero_darkness}>
        <section className={style.centralize_content}>
          <h2>
            Olá me chamo Breno e sou desenvolvedor
          </h2>
          <TypeAnimation
            sequence={['Front-End', 3000, 'Mobile', 3000]}
            style={{ fontSize: '2.8em' }}
            wrapper="h1"
            repeat={Infinity}
          />

        </section>
      </section>
    </section>
  )
}

export default Hero
