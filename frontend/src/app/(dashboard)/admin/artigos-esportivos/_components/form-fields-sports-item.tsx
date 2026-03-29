'use client'

import { Button } from '@/components/button'
import {
  FormFieldsGroup,
  FormField,
  ImageForm,
  handleImageChange,
} from '@/components/dashboard/form'
import { DialogFooter } from '@/components/dialog'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/select'
import { cn } from '@/lib/utils'
import { api, ResponseErrorType } from '@/services/api'
import { categoryType } from '@/types/category'
import { sportsItemType } from '@/types/sportsItem'
import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'

interface FormFieldsSportsItemProps {
  sportsItem?: sportsItemType | null
  readOnly?: boolean
  error?: ResponseErrorType | null
}

export default function FormFieldsSportsItem({
  sportsItem,
  readOnly,
  error,
}: FormFieldsSportsItemProps) {
  const { pending } = useFormStatus()
  const [updateImage, setUpdateImage] = useState<string | undefined>()
  const [categories, setCategories] = useState<categoryType[]>([])
  const [selectCategory, setSelectCategory] = useState<categoryType | null>(sportsItem?.category ?? null, )

  useEffect(() => {
    async function getCategories() {
      const { response, error } = await api('GET', '/category')
      if (response) setCategories(response as categoryType[]);
      else console.error(error?.message)
    }
    getCategories()
  }, [])

  useEffect(() => {
  if (sportsItem?.category) {
    setSelectCategory(sportsItem.category)
  }
}, [sportsItem])

  return (
    <>
      <FormFieldsGroup>
        {sportsItem && <Input defaultValue={sportsItem.id} type="text" name="id" hidden />}
        <FormField>
          <Label htmlFor='image' required={!sportsItem}>Imagem</Label>
          <Input name='image' id='image' type='file' accept='image/' disabled={pending} hidden={readOnly} onChange={(e) => handleImageChange(e, setUpdateImage)} error={error?.errors.image}/>
          <ImageForm className='aspect-square size-40' src={updateImage || sportsItem?.image} />
        </FormField>
        <FormField>
          <Label htmlFor='name' required={!sportsItem}>Nome</Label>
          <Input name='name' id='name' type='text'     defaultValue={sportsItem?.name} placeholder='Insira o Nome do Artigo Esportivo' disabled={pending || readOnly} error={error?.errors.name} />
        </FormField>
        <FormField>
          <Label htmlFor='brand' required={!sportsItem}>Marca</Label>
          <Input name='brand' id='brand' type='text' defaultValue={sportsItem?.brand} placeholder='Insira a Marca do Artigo Esportivo' disabled={pending || readOnly} error={error?.errors.brand} />
        </FormField>
        <FormField>
          <Label htmlFor='price' required={!sportsItem}>Preço</Label>
          <Input name='price' id='price' type='number' defaultValue={sportsItem?.price} placeholder='Insira o Preço do Artigo Esportivo' disabled={pending || readOnly} error={error?.errors.price} step='0.01' min='0' inputMode='decimal' />
        </FormField>
        <FormField>
          <Label htmlFor='release_year' required={!sportsItem}>Ano</Label>
          <Input name='release_year' id='release_year' maxLength={4} type='number' defaultValue={sportsItem?.release_year} placeholder='Insira o Ano de Lançamento do Artigo Esportivo' disabled={pending || readOnly} error={error?.errors.release_year} />
        </FormField>
        <FormField>
          <Label htmlFor='quantity' required={!sportsItem}>Quantidade</Label>
          <Input name='quantity' id='quantity' type='number' defaultValue={sportsItem?.quantity} placeholder='Insira a Quantidade do Artigo Esportivo' disabled={pending || readOnly} min={0} error={error?.errors.quantity} />
        </FormField>
        <FormField>
          <Label htmlFor='category_id' required={!sportsItem}>Categoria</Label>
          <Input
            name='category_id'
            type='hidden'
            value={selectCategory?.id || ""}
          />
          <Select
            value={selectCategory?.id || ""}
            onValueChange={(value) =>
              setSelectCategory(
                categories.find(category => category.id === value) || null
              )
            }
            disabled={pending || readOnly}
          >
            <SelectTrigger id='category_id_select' className='col-span-3'>
              <SelectValue placeholder='Selecione uma categoria'/>
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {error?.errors?.category_id && (
            <p className='text-destructive text-xs mt-2 col-start-2 col-end-5'>
              {error.errors.category_id}
            </p>
          )}
        </FormField>
      </FormFieldsGroup>
      <DialogFooter className={cn({ hidden: readOnly })}>
        <Button type="submit" pending={pending}>
          Salvar
        </Button>
      </DialogFooter>
    </>
  )
}
