'use server'

import { api } from '@/services/api'
import { revalidatePath } from 'next/cache'

export async function createSportsItem(form: FormData) {
    const res = await api('POST', '/sporting-goods', { data: form })
    if (!res.error) revalidatePath('/admin/sporting-goods')
    return JSON.stringify(res)
}

export async function updateSportsItem(form: FormData) {
    const res = await api('POST', `/sporting-goods/${form.get('id')}`, { data: form })
    if (!res.error) revalidatePath('/admin/sporting-goods')
    return JSON.stringify(res)
}

export async function destroySportsItem(id: string) {
    const res = await api('DELETE', `/sporting-goods/${id}`)
    if (!res.error) revalidatePath('/admin/sporting-goods')
    return JSON.stringify(res)
}

export async function buySportsItem(id: string) {
    const res = await api('POST', `/sporting-goods/${id}/buy`)
    if (!res.error) revalidatePath('/')
    return JSON.stringify(res)
}