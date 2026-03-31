import { DashboardContainer } from '@/components/dashboard/dashboard-items'
import {
  TabbleCellImage,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/dashboard/table'
import { api } from '@/services/api'
import { sportsItemType } from '@/types/sportsItem'
import { Button } from '@/components/button'
import { LuInfo, LuPen, LuPlus, LuTrash } from 'react-icons/lu'
import { DialogUpdateSportsItem } from './dialog-update-sports-item'
import { DialogSportsItemDelete } from './dialog-delete-sports-item'
import { DialogInformationSportsItem } from './dialog-information-sports-item'
import { DialogCreateSportsItem } from './dialog-create-sports-item'

export default async function ListSportsItems() {
  const { response } = await api<sportsItemType[]>('GET', '/sporting-goods')

  if (!response) {
    return (
      <DashboardContainer className="text-destructive">
        Não foi possível obter os artigos esportivos.
      </DashboardContainer>
    )
  }

  const sportingGoods: sportsItemType[] = response

  return (
    <>
      <DashboardContainer className="flex h-min justify-between space-x-0 gap-y-2.5 max-sm:flex-col">
        <DialogCreateSportsItem>
          <Button size="sm">
            <LuPlus />
            Novo artigo esportivo
          </Button>
        </DialogCreateSportsItem>
      </DashboardContainer>
      <DashboardContainer>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Imagem</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Marca</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead>Ano</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Categoria</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sportingGoods?.map((sportsItem: sportsItemType) => (
              <TableRow key={sportsItem.id}>
                <TableCell>
                  <TabbleCellImage src={sportsItem.image} />
                </TableCell>
                <TableCell>{sportsItem.name}</TableCell>
                <TableCell>{sportsItem.brand}</TableCell>
                <TableCell>{sportsItem.price}</TableCell>
                <TableCell>{sportsItem.release_year}</TableCell>
                <TableCell>{sportsItem.quantity}</TableCell>
                <TableCell>{sportsItem.category.name || 'Nenhuma'}</TableCell>
                <TableCell className="flex justify-end gap-2">
                  <DialogInformationSportsItem id={sportsItem.id}>
                    <Button variant="default-inverse" size="icon">
                      <LuInfo />
                    </Button>
                  </DialogInformationSportsItem>
                  <DialogUpdateSportsItem id={sportsItem.id}>
                    <Button variant="secondary-inverse" size="icon">
                      <LuPen />
                    </Button>
                  </DialogUpdateSportsItem>
                  <DialogSportsItemDelete id={sportsItem.id}>
                    <Button variant="destructive-inverse" size="icon">
                      <LuTrash />
                    </Button>
                  </DialogSportsItemDelete>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {!sportingGoods.length && (
            <TableCaption>Nenhum artigo esportivo encontrado.</TableCaption>
          )}
        </Table>
      </DashboardContainer>
    </>
  )
}