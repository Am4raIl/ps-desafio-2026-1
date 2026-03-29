'use client'

import { sportsItemType } from '@/types/sportsItem';
import ProductCard from './ProductCard';
import styles from './Products.module.css';
import { useEffect, useState } from 'react';
import { api } from '@/services/api';

// const mockProducts: sportsItemType[] = [
//     {
//         id: '1',
//         name: 'Camisa 1 Cruzeiro 2024',
//         brand: 'Adidas',
//         price: 89.90,
//         release_year: 2024,
//         image: '/assets/images/Camiseta Cruzeiro.jpg',
//         category_id: { id: 'cat-1', name: 'Camisetas', created_at: new Date(), updated_at: new Date() },
//         quantity: 5,
//         created_at: new Date(),
//         updated_at: new Date(),
//     },
//     {
//         id: '2',
//         name: 'Bola Cruzeiro',
//         brand: 'Nike',
//         price: 149.90,
//         release_year: 2024,
//         image: '/assets/images/Bola Cruzeiro.jpg',
//         category_id: { id: 'cat-2', name: 'Bolas', created_at: new Date(), updated_at: new Date() },
//         quantity: 8,
//         created_at: new Date(),
//         updated_at: new Date(),
//     },
//     {
//         id: '3',
//         name: 'Garrafa Térmica Cruzeiro',
//         brand: 'Nike',
//         price: 199.90,
//         release_year: 2025,
//         image: '/assets/images/Garrafa Cruzeiro.jpg',
//         category_id: { id: 'cat-3', name: 'Garrafas', created_at: new Date(), updated_at: new Date() },
//         quantity: 7,
//         created_at: new Date(),
//         updated_at: new Date(),
//     },
//     {
//         id: '4',
//         name: 'Short 1 Cruzeiro 2023',
//         brand: 'Nike',
//         price: 299.90,
//         release_year: 2023,
//         image: '/assets/images/Short 1 Cruzeiro.jpg',
//         category_id: { id: 'cat-4', name: 'Shorts', created_at: new Date(), updated_at: new Date() },
//         quantity: 12,
//         created_at: new Date(),
//         updated_at: new Date(),
//     },
//     {
//         id: '5',
//         name: 'Camiseta 2 Cruzeiro 2024',
//         brand: 'Adidas',
//         price: 89.90,
//         release_year: 2024,
//         image: '/assets/images/Camiseta 2 Cruzeiro.jpg',
//         category_id: { id: 'cat-1', name: 'Camisetas', created_at: new Date(), updated_at: new Date() },
//         quantity: 5,
//         created_at: new Date(),
//         updated_at: new Date(),
//     },
//     {
//         id: '6',
//         name: 'Short 2 Cruzeiro 2023',
//         brand: 'Nike',
//         price: 299.90,
//         release_year: 2023,
//         image: '/assets/images/Short 2 Cruzeiro.jpg',
//         category_id: { id: 'cat-4', name: 'Shorts', created_at: new Date(), updated_at: new Date() },
//         quantity: 12,
//         created_at: new Date(),
//         updated_at: new Date(),
//     },
//     {
//         id: '7',
//         name: 'Moletom Cruzeiro',
//         brand: 'Adidas',
//         price: 199.90,
//         release_year: 2024,
//         image: '/assets/images/Moletom Cruzeiro.jpg',
//         category_id: { id: 'cat-5', name: 'Moletons', created_at: new Date(), updated_at: new Date() },
//         quantity: 10,
//         created_at: new Date(),
//         updated_at: new Date(),
//     },
//     {
//         id: '8',
//         name: 'Calça de Treino Cruzeiro',
//         brand: 'Adidas',
//         price: 149.90,
//         release_year: 2024,
//         image: '/assets/images/Calça Cruzeiro.jpg',
//         category_id: { id: 'cat-6', name: 'Calças', created_at: new Date(), updated_at: new Date() },
//         quantity: 15,
//         created_at: new Date(),
//         updated_at: new Date(),
//     },
// ];


export default function Products() {
    const [sportingGoods, setSportingGoods] = useState<sportsItemType[]>([]);

    useEffect(() => {
        async function getSportingGoods(){
            const { response, error } = await api('GET', '/sporting-goods')
            if (response) setSportingGoods(response as sportsItemType[]);
            else console.error(error?.message);
        }
        getSportingGoods();
    }, []);

    console.log(sportingGoods);

    if (sportingGoods.length === 0) {
        return (
            <div className={styles.empty}>
                <p>Nenhum produto encontrado.</p>
            </div>
        );
    }

    return (
        <section className={styles.grid}>
            {sportingGoods.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
}