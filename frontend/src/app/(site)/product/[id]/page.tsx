'use client'

import { useEffect, useState } from 'react'
import { api } from '@/services/api'
import { buySportsItem } from '@/actions/sportsItem'
import { sportsItemType } from '@/types/sportsItem'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Product({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<sportsItemType | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getProduct() {
      const { response } = await api<sportsItemType>('GET', `/sporting-goods/${params.id}`)
      if (response) setProduct(response)
    }
    getProduct()
  }, [params.id])

  async function buyProduct() {
    if (!product || loading || product.quantity <= 0) return

    setProduct((prev) => prev ? { ...prev, quantity: prev.quantity - 1 } : prev)
    setLoading(true)
    const response = JSON.parse(await buySportsItem(product.id))

    if (response.error) {
      setProduct((prev) => prev ? { ...prev, quantity: prev.quantity + 1 } : prev)
      console.error(response.error?.message ?? 'Erro ao comprar produto')
    }

    setLoading(false)
  }

  if (!product) {
    return (
      <div className={styles.notFound}>
        <p>Produto não encontrado.</p>
        <Link href="/" className={styles.backLink}>Voltar</Link>
      </div>
    )
  }

  return (
    <main className={styles.page}>
      <Link href="/" className={styles.backLink}>Voltar</Link>

      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
          />
        </div>

        <div className={styles.details}>
          <span className={styles.brand}>{product.brand}</span>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>
            R$ {product.price}
          </p>

          <div className={styles.square}>
            <div className={styles.squareItem}>
              <span className={styles.squareLabel}>Categoria</span>
              <span className={styles.squareValue}>{product.category.name}</span>
            </div>
            <div className={styles.squareItem}>
              <span className={styles.squareLabel}>Lançamento</span>
              <span className={styles.squareValue}>{product.release_year}</span>
            </div>
            <div className={styles.squareItem}>
              <span className={styles.squareLabel}>Estoque</span>
              <span className={styles.squareValue}>{product.quantity} unidades</span>
            </div>
          </div>

          {product.quantity > 0 ? (
            <button
              className={styles.buyButton}
              onClick={buyProduct}
              disabled={loading}
            >
              {loading ? 'Comprando...' : 'Comprar agora'}
            </button>
          ) : (
            <button className={styles.buyButton} disabled>
              Indisponível
            </button>
          )}
        </div>
      </div>
    </main>
  )
}