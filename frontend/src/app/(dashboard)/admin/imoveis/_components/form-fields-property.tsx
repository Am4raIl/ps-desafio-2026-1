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
import { cn } from '@/lib/utils'
import { ResponseErrorType } from '@/services/api'
import { propertyType } from '@/types/property'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'

interface FormFieldsPropertyProps {
  property?: propertyType | null
  readOnly?: boolean
  error?: ResponseErrorType | null
}

export default function FormFieldsProperty({
  property,
  readOnly,
  error,
}: FormFieldsPropertyProps) {
  const { pending } = useFormStatus()
  const [updateImage, setUpdateImage] = useState<string | undefined>()

  return (
    <>
      <FormFieldsGroup>
        {property && <Input defaultValue={property.id} type="text" name="id" hidden />}
        {/* inserir campos do formulário */}
      </FormFieldsGroup>
      <DialogFooter className={cn({ hidden: readOnly })}>
        <Button type="submit" pending={pending}>
          Salvar
        </Button>
      </DialogFooter>
    </>
  )
}
