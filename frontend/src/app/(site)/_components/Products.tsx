'use client'
import { sportsItemType } from '@/types/sportsItem'
import ProductCard from './ProductCard'
import styles from './Products.module.css'
import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import { buySportsItem } from '@/actions/sportsItem'

type ProductsProps = {
  searchTerm: string
  filter: string
}

export default function Products({ searchTerm, filter }: ProductsProps) {
  const [sportingGoods, setSportingGoods] = useState<sportsItemType[]>([])

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

  let filtered = sportingGoods.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (filter === 'Menor Preço') {
    filtered = [...filtered].sort((a, b) => a.price - b.price)
  } else if (filter === 'Maior Preço') {
    filtered = [...filtered].sort((a, b) => b.price - a.price)
  } else if (filter === 'Lançamentos') {
    filtered = [...filtered].sort((a, b) => b.release_year - a.release_year)
  }

  if (filtered.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Nenhum produto encontrado.</p>
      </div>
    )
  }

  return (
    <section className={styles.grid}>
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} onBuy={buyFunction} />
      ))}
    </section>
  )
}