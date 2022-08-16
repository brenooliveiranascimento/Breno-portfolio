import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import style from './Header.module.scss'

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const verifyY: any = setInterval(() => setScrollY(window.scrollY),100)

  useEffect(() => {
    return () => clearInterval(verifyY)
  }, [])

  return (
    <header
      style={{
        backgroundColor: scrollY > 150 ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.0)',
        padding: scrollY > 150 ? '10px' : '20px' ,
      }}
      className={style.header_container}
    >
      <h1
      style={{
        marginTop: scrollY > 150 ? '0rem' : '1rem',
      }}
      >Breno</h1>
      <nav
      className={style.header_nav}
      style={{
        marginTop: scrollY > 150 ? '0rem' : '1rem',
      }}
      >
        <Link href={"/"}>
          <span
            style={{
              marginTop: scrollY > 150 ? '1rem' : '1.4rem',
            }}
          >Home</span>
        </Link>
        <div className={style.divisor} />
        <Link href={"/"}>
          <span
            style={{
              marginTop: scrollY > 150 ? '1rem' : '1.4rem',
            }}
          >Projetos</span>
        </Link>
        <div className={style.divisor} />
        <Link href={"/"}>
          <span
            style={{
              marginTop: scrollY > 150 ? '1rem' : '1.4rem',
            }}
          >Sobre</span>
        </Link>
      </nav>
      <div className={style.bottom_divisor} />

    </header>
  )
}

export default Header
