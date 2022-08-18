import React, { useState } from 'react';
import style from './SocialMedia.module.scss';
import { FiLinkedin, FiGithub, FiInstagram, FiMail } from "react-icons/fi";

function SocialMedia() {
  const [showMail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('Breno564nascimento@gmail.com');
    setCopied(true)
  }

  const hiddenEmial = () => {
    setShowEmail(false);
    setTimeout(() => setCopied(false) ,1000);
  }

  return (
    <aside className={style.social_container}>
      <nav>
        <a
          href='https://www.linkedin.com/in/breno-nascimento-0b3331229/'
          target='_blank'
        >
          <FiLinkedin
            className={style.media_icon}
            color='white'
            size={30}
          />
        </a>

        <a
          href='https://github.com/brenooliveiranascimento'
          target='_blank'
        >
          <FiGithub
            className={style.media_icon}
            color='white'
            size={30}
          />
        </a>

        <a
          href='https://www.instagram.com/allblack_arts/'
          target='_blank'
        >
          <FiInstagram
            className={style.media_icon}
            color='white'
            size={30}
          />
        </a>

        <a
          onClick={ copyEmail }
          onMouseOver={() => setShowEmail(true)}
          onMouseOut={ () => setShowEmail(false) }
        >
          <span
            style={{
              fontSize: showMail ? 13 : 0,
              width: showMail ? 100 : 0,
              padding: showMail ? 5 : 0,
            }}
            className={style.copy_email}
          >
            {
              copied ? "Copiado!" : "Copiar Email"
            }
          </span>
          <FiMail
            className={style.media_icon}
            color='white'
            size={30}
          />
        </a>
      </nav>
      <section
        className={style.emailArea}
        onMouseOver={() => setShowEmail(true)}
        onMouseOut={ hiddenEmial }
        >
          <span
            style={{
              fontSize: showMail ? 18 : 0
            }}
          >
            Breno564nascimento@gmail.com
          </span>
        </section>
    </aside>
  );
};

export default SocialMedia;
