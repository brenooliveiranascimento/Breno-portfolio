import React from 'react';
import style from './SocialMedia.module.scss';
import { FiLinkedin, FiGithub, FiInstagram, FiMail } from "react-icons/fi";

function SocialMedia() {
  return (
    <aside className={style.social_container}>
      <nav>
        <a>
          <FiLinkedin
            className={style.media_icon}
            color='white'
            size={30}
          />
        </a>

        <a>
          <FiGithub
            className={style.media_icon}
            color='white'
            size={30}
          />
        </a>

        <a>
          <FiInstagram
            className={style.media_icon}
            color='white'
            size={30}
          />
        </a>

        <a>
          <FiMail
            className={style.media_icon}
            color='white'
            size={30}
          />
        </a>
      </nav>
    </aside>
  );
};

export default SocialMedia;
