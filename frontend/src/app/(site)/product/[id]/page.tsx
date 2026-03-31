import { api } from "@/services/api"
import { sportsItemType } from "@/types/sportsItem"
import styles from './page.module.css'

export default async function Product({ params }: { params: { id: string } }) {
  const response = await api<sportsItemType>('GET', `/sporting-goods/${params.id}`)
  const product = response.response

  if (!product) return <p>Produto não encontrado</p>

  return (
    <div className={styles.container}>
        <p className={styles.details}>Detalhes do produto aqui:</p>
        <p className={styles.name}>{product.name}</p>
        <img className={styles.image} src={product.image} alt={product.name} width={350} height={350} />
        <p className={styles.brand}>Marca: {product.brand}</p>
        <p className={styles.price}>Preço: {product.price}</p>
        <p className={styles.releaseYear}>Ano de Lançamento: {product.release_year}</p>
        <p className={styles.quantity}>Quantidade: {product.quantity}</p>
        <p className={styles.category}>Categoria: {product.category.name}</p>
    </div>
  )
}