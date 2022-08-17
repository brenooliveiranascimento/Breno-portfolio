import React, { useState, useEffect } from 'react';
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
  const [widthvalue,setWidthvalue] = useState(0);
  const verifyWidth = () => setInterval(() =>setWidthvalue(window.innerWidth), 100)

  const widhtOfImages = widthvalue < 584 ? (showMeOrItachi === 'me' ? 260 : 240) : (showMeOrItachi === 'me' ? 420 : 400)
  const heighthOfImages = widthvalue < 584 ? (showMeOrItachi === 'me' ? 300 : 290) : (showMeOrItachi === 'me' ? 520 : 500)

  useEffect(() => {
    verifyWidth();
    return () => clearInterval(verifyWidth())
  }, [])

  return (
    <section
      style={{
      }}  
      className={style.me_and_itachi}
    >
  <article
      style={{
        width: widhtOfImages,
        height: heighthOfImages,
      }}
    >
    <Image
      onMouseOver={() => showMeOrItachi === 'me' && changeImage('itachi') }
      alt="me"
      // onClick={() => changeImage('itachi')}
      style={{
        zIndex: showMeOrItachi === 'me' ? 10 : 0,
        filter: showMeOrItachi === 'me' ? 'brightness(85%)' : 'brightness(10%)',
      }}
      className={style.eu_image}
      width={widhtOfImages}
      height={heighthOfImages}
      src={Eu}
      />
    </article>

    <article
      style={{
        width: widhtOfImages,
        height: heighthOfImages,
      }}
    className={style.black_back}>
      <Image
      onMouseOut={() => showMeOrItachi === 'itachi' && changeImage('me')}
      alt="Itachi"
      // onClick={() => changeImage('me')}
      style={{
        zIndex: showMeOrItachi === 'itachi' ? 10 : 0,
        filter: showMeOrItachi === 'itachi' ? 'brightness(60%)' : 'brightness(30%)',
      }}
        className={style.itachi}
        width={widhtOfImages}
        height={heighthOfImages}
        src={Itachi}
        />
      </article>
</section>
  );
};

export default MeAndItachi;
