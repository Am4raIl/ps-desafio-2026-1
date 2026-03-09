'use client'

import { destroyProperty } from '@/actions/property'
import { Button } from '@/components/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from '@/components/dialog'
import { useToast } from '@/components/use-toast'
import { useState } from 'react'

interface DialogCreatePropertyProps {
  id: string
  children: React.ReactNode
}

export function DialogPropertyDelete({ id, children }: DialogCreatePropertyProps) {
  const [open, setOpen] = useState<boolean>()
  const { toast } = useToast()

  const submit = async () => {
    const { error } = await JSON.parse(await destroyProperty(id))

    if (error) {
      toast({
        title: 'Não foi possível excluir o imóvel!',
      })
    } else {
      toast({
        title: 'Imóvel deletado com sucesso!',
      })
    }

    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmar exclusão do imóvel</DialogTitle>
          <DialogDescription>
            Tem certeza de que deseja excluir este imóvel? Esta ação é
            irreversível e removerá permanentemente o imóvel do sistema. Deseja
            continuar com a exclusão?
          </DialogDescription>
        </DialogHeader>
        <form action={submit}>
          <DialogFooter>
            <Button
              variant="outline"
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button variant="destructive" type="submit">
              Excluir
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
