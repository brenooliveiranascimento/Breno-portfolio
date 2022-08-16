import React, { ReactComponentElement, ReactElement } from "react";
import style from '../../styles/Home.module.css'
interface props {
  children: ReactElement
}

function Main({children}: props) {
  return (
    <div className={style.main_coontainer}>
        {children}
    </div>
  )
}

export default Main;
