import type { NextPage } from 'next'
import About from '../src/Components/About/About'
import Aos from 'aos'
import Hero from '../src/Components/Hero/Hero'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import Projects from '../src/Projects/Projects'

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default Home
