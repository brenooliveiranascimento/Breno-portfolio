import React, { useState } from 'react';
import { stackTypes } from '../../types/stackstypes';
import style from './Project.module.scss'

function Stacks({stack, selectStack}:any) {

  return (
    <section className={style.stack_card}>
        <h1>
          {stack.name}
        </h1>
      <section
        style={{
          height: selectStack === stack.name ? 200 : 0,
        }}
        className={style.hidden_stackCard_white}
      />
    </section>
  )
}

export default Stacks
