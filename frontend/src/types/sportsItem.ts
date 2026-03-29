import { categoryType } from "./category"

export type sportsItemType = {
    id: string,
    name: string,
    brand: string,
    price: number,
    release_year: number,
    image: string,
    category: categoryType,
    quantity: number
    created_at: Date,
    updated_at: Date
}