import Link from 'next/link';
import Image from 'next/image';
import { sportsItemType } from '@/types/sportsItem';
import styles from './ProductCard.module.css';

type ProductCardProps = {
    product: sportsItemType;
};

export default function ProductCard({ product }: ProductCardProps) {
    function formatPrice(price: number): string {
        return price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
    }

    const categoryName = product.category.name;

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
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
                <p className={styles.price}>R$ {formatPrice(product.price)}</p>
                <div className={styles.stock}>
                    <span className={styles.stockLabel}>Estoque:</span>
                    <span className={styles.stockCount}>{product.quantity} unidades</span>
                </div>
                {product.quantity > 0 ? (
                    <button className={styles.buyBtn}>Comprar</button>
                ) : (
                    <button className={styles.buyBtn} disabled>Indisponível</button>
                )}
            </div>
        </div>
    );
}