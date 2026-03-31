'use client'
import { useState } from 'react'
import Footer from './_components/Footer'
import Banner from './_components/Banner'
import Products from './_components/Products'
import Searchbar from './_components/Searchbar'
import styles from './page.module.css'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')

  return (
    <div>
      <Banner />
      <h1 className={styles.phrase}>
        Domine o jogo com <br />
        estilo e garra.
      </h1>
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />
      <Products searchTerm={searchTerm} filter={filter} />
      <Footer />
    </div>
  )
}