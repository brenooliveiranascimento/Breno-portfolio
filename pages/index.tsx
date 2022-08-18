import type { GetStaticProps, NextPage } from 'next'
import About from '../src/Components/About/About'
import Aos from 'aos'
import Hero from '../src/Components/Hero/Hero'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import MyStacks from '../src/Components/MyStacks/MyStacks'
import Projects from '../src/Components/Projects/Projects'

const Home: NextPage = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <MyStacks />
      <Projects />
    </main>
  )
}

export const getStaticProps = async () => {
    return {
      props: {
      },
    }
}

export default Home
