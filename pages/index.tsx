import type { NextPage } from 'next'
import About from '../src/Components/About/About'
import Hero from '../src/Components/Hero/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <About />
    </div>
  )
}

export default Home
