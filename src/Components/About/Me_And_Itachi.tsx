import React, { useState } from 'react';
import style from './About.module.scss';
import Itachi from '../../images/Itachi.jpg'
import FadeIn from 'react-fade-in/lib/FadeIn';
import Eu from '../../images/eu.jpg'
import Image from 'next/image';

interface meAndItachiProps {
  showMeOrItachi: string,
  changeImage: (changeImage: string) => void
}

function MeAndItachi({showMeOrItachi, changeImage}: meAndItachiProps) {

  return (
    <section data-aos="flip-left" className={style.me_and_itachi}>
    <Image
      onMouseOver={() => showMeOrItachi === 'me' && changeImage('itachi') }
      style={{
        zIndex: showMeOrItachi === 'me' ? 10 : 0,
        filter: showMeOrItachi === 'me' ? 'brightness(85%)' : 'brightness(10%)',
      }}
      className={style.eu_image}
      width={showMeOrItachi === 'me' ? 420 : 400}
      height={showMeOrItachi === 'me' ? 520 : 500}
      src={Eu}
      />
    <article
      style={{
        width: showMeOrItachi === 'itachi' ? 420 : 400,
        height: showMeOrItachi === 'itachi' ? 520 : 500,
      }}
    className={style.black_back}>
      <Image
      onMouseOut={() => showMeOrItachi === 'itachi' && changeImage('me')}
      style={{
        zIndex: showMeOrItachi === 'itachi' ? 10 : 0,
        filter: showMeOrItachi === 'itachi' ? 'brightness(60%)' : 'brightness(30%)',
      }}
        className={style.itachi}
        width={showMeOrItachi === 'itachi' ? 420 : 400}
        height={showMeOrItachi === 'itachi' ? 520 : 500}
        src={Itachi}
        />
      </article>
</section>
  )
}

export default MeAndItachi;
