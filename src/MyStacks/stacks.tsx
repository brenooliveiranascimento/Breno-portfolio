import Image from 'next/image';
import React, { useState } from 'react';
import { stackTypes } from '../../types/stackstypes';
import style from './Project.module.scss'

function Stacks({stack, selectStack, index}:any) {
  const isPar = index % 2
  return (
    <section
      data-aos={ isPar ? "fade-up" : "fade-left" }
      style={{
        marginTop: 343 && isPar ? 30 : 0,
      }}
      className={style.stack_card}
    >
        <h1>
          {stack.name}
        </h1>
      <section
        style={{
          height: selectStack === stack.name ? 180 : 0,
          zIndex:10
        }}
        className={style.hidden_stackCard_white}
      />
    </section>
  )
}

export default Stacks
