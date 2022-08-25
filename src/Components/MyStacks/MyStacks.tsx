import React, { useEffect, useState } from 'react';
import { stackTypes } from '../../../types/stackstypes';
import style from './Project.module.scss';
import Stacks from './stacks';
import ReactWhite from '../../images/reactWhite.png'
import ReactBlack from '../../images/reactBlack.png'
import Image from 'next/image';

function MyStacks() {
  const [myStacks, setMyStacks] = useState<Array<stackTypes>>([
    {name: 'TypeScript', photo: '', description: ''},
    {name: 'JavaScript', photo: '', description: ''},
    {name: 'Redux', photo: '', description: ''},
    {name: 'ReactJs', photo: '', description: ''},
    {name: 'Next', photo: '', description: ''},
    {name: 'Node', photo: '', description: ''},
    {name: 'RTL', photo: '', description: ''},
    {name: 'Docker', photo: '', description: ''},
    {name: 'Jest', photo: '', description: ''},
    {name: 'FireBase', photo: '', description: ''},
    {name: 'Sass', photo: '', description: ''},
    {name: 'Styled Components', photo: '', description: ''},
    {name: 'HTML', photo: '', description: ''},
    {name: 'Css', photo: '', description: ''},
  ])
  const [selectStack, setSelectStack] = useState('');

  return (
    <main className={style.stack_container}>
      <section className={style.stack_dark}>
        <section className={style.stacks_centralize}>
          <h1
            style={{
              fontSize: 24,
              color: 'white'
            }}
          >
            Minhas Stacks
          </h1>
          <section className={style.stacks_area}>
              {
                myStacks.map((stack, index) => (
                  <section
                    key={stack.name}
                    onMouseLeave={() => setSelectStack('')}
                    onMouseOver={() => setSelectStack(stack.name)}
                  >
                    <Stacks
                      index={index}
                      selectStack={selectStack}
                      stack={stack}
                    />
                  </section>
                ))
              }
         </section>
        </section>
      </section>
    </main>
  )
}

export default MyStacks;
