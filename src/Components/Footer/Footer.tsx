import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import style from './footer.module.scss'

function Footer() {
  return (
    <footer
      className={style.footer_container}
    >
      <SocialMedia />
    </footer>
  );
};

export default Footer;
