'use client'

import { sportsItemType } from '@/types/sportsItem';
import ProductCard from './ProductCard';
import styles from './Products.module.css';
import { useEffect, useState } from 'react';
import { api } from '@/services/api';

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