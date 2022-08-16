import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import style from './About.module.scss';
import Eu from '../../images/eu.jpg'
import Itachi from '../../images/Itachi.jpg'
import FadeIn from 'react-fade-in/lib/FadeIn';
import MeAndItachi from './Me_And_Itachi';
import ItachiMessage from './ItachiMessage';
import MeMessage from './MeMessage';
import Ghost from './ghost';

function About() {
  const [showMeOrItachi, setShow] = useState('me');
  const [scrollY, setScrollY] = useState(0);
  const verifyY: any = () => setInterval(() => setScrollY(window.scrollY),100)
  useEffect(() => {
    verifyY()
    return () => clearInterval()
  }, [])

  return (
    <section id="About" className={style.about_container}>
        <MeAndItachi
            showMeOrItachi={showMeOrItachi}
            changeImage={(img: string) => setShow(img)}
          />
      <section className={style.about_inf_area}>
        {
          scrollY > 300 ? (
            <h1>
            {
              showMeOrItachi === 'me' ? (
                <MeMessage />
              ) : (
                <ItachiMessage />
              )
            }
          </h1>
          ) : (
            <Ghost />
          )
        }

      </section>
    </section>
  );
};

export default About;
