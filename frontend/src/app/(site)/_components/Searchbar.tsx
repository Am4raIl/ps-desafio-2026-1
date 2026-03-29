'use client'
import { useState } from 'react'
import styles from './Searchbar.module.css'

const filterOptions = [
  'Menor Preço',
  'Maior Preço',
  'Lançamentos',
  'Mais Vendidos',
]

export default function Searchbar() {
  const [filterOpen, setFilterOpen] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInput}>
          <input
            type="text"
            placeholder="Equipe-se com o instinto de um campeão."
            className={styles.input}
          />
          <button className={styles.searchButton}>Buscar</button>
        </div>

        <div className={styles.filterContainer}>
          <button
            className={styles.filterButton}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            Filtrar
          </button>

          <div
            className={`${styles.dropdown} ${filterOpen ? styles.dropdownAberto : ''}`}
          >
            {filterOptions.map((opcao) => (
              <a key={opcao} onClick={() => setFilterOpen(false)}>
                {opcao}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
