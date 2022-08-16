import React, { ReactComponentElement, ReactElement } from "react";
import style from '../../styles/Home.module.css'
interface props {
  children: ReactElement
}

function Main({children}: props) {
  return (
    <div className={style.main_coontainer}>
        {children}
      <footer>
        <h1>footer do portfolio</h1>
      </footer>
    </div>
  )
}

export default Main;
