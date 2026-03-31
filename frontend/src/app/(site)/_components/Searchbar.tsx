'use client'
import { useState } from 'react'
import styles from './Searchbar.module.css'

const filterOptions = ['Menor Preço', 'Maior Preço', 'Lançamentos']

type SearchbarProps = {
  searchTerm: string
  setSearchTerm: (value: string) => void
  filter: string
  setFilter: (value: string) => void
}

export default function Searchbar({ searchTerm, setSearchTerm, filter, setFilter }: SearchbarProps) {
  const [filterOpen, setFilterOpen] = useState(false)

  function FilterSelect(opcao: string) {
    setFilter(filter === opcao ? '' : opcao)
    setFilterOpen(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInput}>
          <input
            type="text"
            placeholder="Equipe-se com o instinto de um campeão."
            className={styles.input}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className={styles.searchButton}>Buscar</button>
        </div>
        <div className={styles.filterContainer}>
          <button
            className={`${styles.filterButton} ${filter ? styles.filterActive : ''}`}
            onClick={() => setFilterOpen(!filterOpen)}
          >
            {filter || 'Filtrar'}
          </button>
          <div className={`${styles.dropdown} ${filterOpen ? styles.dropdownAberto : ''}`}>
            {filterOptions.map((opcao) => (
              <a
                key={opcao}
                className={filter === opcao ? styles.selected : ''}
                onClick={() => FilterSelect(opcao)}
              >
                {opcao}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}