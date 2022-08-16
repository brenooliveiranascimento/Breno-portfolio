import React, { useState } from 'react';
import { stackTypes } from '../../types/stackstypes';
import style from './Project.module.scss'

function Stacks({stack, selectStack, index}:any) {
  const isPar = index % 2
  return (
    <section
      style={{
        marginTop: isPar ? 40 : 0
      }}
      className={style.stack_card}
    >
        <h1>
          {stack.name}
        </h1>
      <section
        style={{
          height: selectStack === stack.name ? 150 : 0,
        }}
        className={style.hidden_stackCard_white}
      />
    </section>
  )
}

export default Stacks
