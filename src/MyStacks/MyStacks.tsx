import React, { useState } from 'react';
import { stackTypes } from '../../types/stackstypes';
import style from './Project.module.scss';
import Stacks from './stacks';
import ReactWhite from '../images/reactWhite.png'
import ReactBlack from '../images/reactBlack.png'
import Image from 'next/image';

function MyStacks() {
  const [myStacks, setMyStacks] = useState<Array<stackTypes>>([
    {name: 'TypeScript', photo: '', description: '', white: ReactWhite, black: ReactBlack},
    {name: 'JavaScript', photo: '', description: '', white: ReactWhite, black: ReactBlack},
    {name: 'Redux', photo: '', description: '', white: ReactWhite, black: ReactBlack},
    {name: 'ReactJs', photo: '', description: '', white: ReactWhite, black: ReactBlack},
    {name: 'Next', photo: '', description: '', white: ReactWhite, black: ReactBlack},
    {name: 'RTL', photo: '', description: '', white: ReactWhite, black: ReactBlack},
    {name: 'Jest', photo: '', description: '', white: ReactWhite, black: ReactBlack},
    {name: 'FireBase', photo: '', description: '', white: ReactWhite, black: ReactBlack},
    {name: 'Sass', photo: '', description: '', white: ReactWhite, black: ReactBlack},
    {name: 'Styled Components', photo: '', description: '', white: ReactWhite, black: ReactBlack},
    {name: 'HTML', photo: '', description: '', white: ReactWhite, black: ReactBlack},
    {name: 'Css', photo: '', description: '', white: ReactWhite, black: ReactBlack},
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
