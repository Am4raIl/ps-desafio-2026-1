import Link from 'next/link'
import Image from 'next/image'
import { sportsItemType } from '@/types/sportsItem'
import styles from './ProductCard.module.css'
import { useState } from 'react'

type ProductCardProps = {
  product: sportsItemType
  onBuy: (id: string) => Promise<void>
}

export default function ProductCard({ product, onBuy }: ProductCardProps) {
  const [loading, setLoading] = useState(false)
  const categoryName = product.category.name

  async function buyClick() {
    if (loading || product.quantity <= 0) return
    setLoading(true)
    await onBuy(product.id)
    setLoading(false)
  }

  return (
    <div className={styles.card}>
      <div className={styles.imageCard}>
        <Link href={`/product/${product.id}`}>
          <Image src={product.image} alt={product.name} width={300} height={300} />
        </Link>
        <span className={styles.badge}>Lançamento {product.release_year}</span>
      </div>
      <div className={styles.info}>
        <div className={styles.meta}>
          <span className={styles.brand}>{product.brand}</span>
          <span className={styles.category}>{categoryName}</span>
        </div>
        <h3>{product.name}</h3>
        <p className={styles.price}>R$ {product.price}</p>
        <div className={styles.stock}>
          <span className={styles.stockLabel}>Estoque:</span>
          <span className={styles.stockCount}>{product.quantity} unidades</span>
        </div>
        {product.quantity > 0 ? (
          <button
            className={styles.buyButton}
            onClick={buyClick}
            disabled={loading}
          >
            {loading ? 'Comprando...' : 'Comprar'}
          </button>
        ) : (
          <button className={styles.buyButton} disabled>
            Indisponível
          </button>
        )}
      </div>
    </div>
  )
}