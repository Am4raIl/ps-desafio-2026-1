import {
  DashboardHeader,
  DashboardHeaderDescription,
  DashboardHeaderTitle,
  DashboardMain,
} from '@/components/dashboard/dashboard-items'
import { FaCarAlt } from "react-icons/fa";
import ListProperties from './_components/list-properties';
import { Suspense } from 'react'

export default async function Page() {
  return (
    <>
      <DashboardHeader>
        <DashboardHeaderTitle>
        <FaCarAlt />
          Imóveis
        </DashboardHeaderTitle>
        <DashboardHeaderDescription>
          Cadastre, edite, visualize e exclua imóveis.
        </DashboardHeaderDescription>
      </DashboardHeader>
      <DashboardMain>
        <Suspense>
          <ListProperties />
        </Suspense>
      </DashboardMain>
    </>
  )
}
