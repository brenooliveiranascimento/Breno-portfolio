import type { NextPage } from 'next'
import About from '../src/Components/About/About'
import Aos from 'aos'
import Hero from '../src/Components/Hero/Hero'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className={styles.container}>
      <Hero />
      <About />
    </div>
  )
}

export default Home
