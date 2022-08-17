import type { NextPage } from 'next'
import About from '../src/Components/About/About'
import Aos from 'aos'
import Hero from '../src/Components/Hero/Hero'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import MyStacks from '../src/Components/MyStacks/MyStacks'

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <MyStacks />
    </main>
  )
}

export default Home
