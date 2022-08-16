import Link from 'next/link'
import React from 'react'
import style from './Header.module.scss'

function Header() {
  return (
    <header className={style.header_container}>
      <h1>Breno</h1>
      <nav className={style.header_nav}>
        <Link href={"/"}>
          <span>Home</span>
        </Link>
        <div className={style.divisor} />
        <Link href={"/"}>
          <span>Projetos</span>
        </Link>
        <div className={style.divisor} />
        <Link href={"/"}>
          <span>Sobre</span>
        </Link>

      </nav>

    </header>
  )
}

export default Header
