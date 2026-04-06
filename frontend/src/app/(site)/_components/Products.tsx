'use client'
import { sportsItemType } from '@/types/sportsItem'
import ProductCard from './ProductCard'
import Searchbar from './Searchbar'
import styles from './Products.module.css'
import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import { buySportsItem } from '@/actions/sportsItem'
 
export function filterProducts(
  products: sportsItemType[],
  searchTerm: string,
  filter: string
): sportsItemType[] {
  const result = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  
  if (filter === 'Menor Preço') return [...result].sort((a, b) => a.price - b.price)
  if (filter === 'Maior Preço') return [...result].sort((a, b) => b.price - a.price)
  if (filter === 'Lançamentos') return [...result].sort((a, b) => b.release_year - a.release_year)
 
  return result
}

export default function Products() {
  const [sportingGoods, setSportingGoods] = useState<sportsItemType[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    async function getSportingGoods() {
      const { response, error } = await api('GET', '/sporting-goods')
      if (response) setSportingGoods(response as sportsItemType[])
      else console.error(error?.message)
    }
    getSportingGoods()
  }, [])

  async function buyFunction(id: string) {
    setSportingGoods((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity - 1 } : product
      )
    )

    const res = JSON.parse(await buySportsItem(id))

    if (res.error) {
      setSportingGoods((prev) =>
        prev.map((product) =>
          product.id === id ? { ...product, quantity: product.quantity + 1 } : product
        )
      )
      console.error(res.error?.message ?? 'Erro ao comprar produto')
    }
  }

  const filtered = filterProducts(sportingGoods, searchTerm, filter)

  return (
    <>
      <Searchbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          <p>Nenhum produto encontrado.</p>
        </div>
      ) : (
        <section className={styles.grid}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={buyFunction} />
          ))}
        </section>
      )}
    </>
  )
}