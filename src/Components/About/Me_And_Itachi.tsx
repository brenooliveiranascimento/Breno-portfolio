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
      className={style.respansiveImages}
      style={{
        width: widthvalue <= 359 ? 230 :  widhtOfImages,
        height: widthvalue <= 359 ? 320 : heighthOfImages,
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
        width: widthvalue <= 359 ? 200 :  widhtOfImages,
        height: widthvalue <= 359 ? 230 : heighthOfImages,
        position: 'absolute',
        marginTop: widthvalue <= 359 ? '1rem' : '5rem',
        marginRight:'5rem',
        zIndex:0,
        transition: 'all 0.1s',
        backgroundColor:'black'
      }}
    >
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
