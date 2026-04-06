'use client'

import Footer from './_components/Footer'
import Banner from './_components/Banner'
import Products from './_components/Products'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <Banner />
      <h1 className={styles.phrase}>
        Domine o jogo com <br />
        estilo e garra.
      </h1>
      <Products />
      <Footer />
    </div>
  )
}