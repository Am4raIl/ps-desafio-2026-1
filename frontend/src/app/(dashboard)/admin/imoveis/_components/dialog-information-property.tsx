'use client'

import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/dialog'
import FormFieldsProperty from './form-fields-property'
import { propertyType } from '@/types/property'
import { api } from '@/services/api'
import { useEffect, useState } from 'react'
import { useToast } from '@/components/use-toast'

interface DialogInformationPropertyProps {
  id: string
  children: React.ReactNode
  isInformation?: boolean
}

export function DialogInformationProperty({
  id,
  children,
}: DialogInformationPropertyProps) {
  const [property, setProperty] = useState<propertyType | null>(null)
  const [open, setOpen] = useState<boolean>()
  const { toast } = useToast()

  useEffect(() => {
    const requestData = async () => {
      const { response } = null

      if (response) {
        setProperty(response)
      } else {
        setProperty(null)
        toast({
          title: 'Veículo não encontrado!',
        })
        setOpen(false)
      }
    }

    requestData()

    return () => setProperty(null)
  }, [id, open, toast])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Informações do imóvel</DialogTitle>
          <DialogDescription>
            Visualize as informações detalhadas do imóvel abaixo.
          </DialogDescription>
        </DialogHeader>
        <FormFieldsProperty property={property} readOnly />
      </DialogContent>
    </Dialog>
  )
}
