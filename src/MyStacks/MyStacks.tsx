import React from 'react';
import style from './Project.module.scss';

function MyStacks() {
  return (
    <main className={style.stack_container}>
      <section className={style.stack_dark}>
        <section className={style.stacks_centralize}>
          <h1>
            My Stacks
          </h1>
        </section>
      </section>
    </main>
  )
}

export default MyStacks;
