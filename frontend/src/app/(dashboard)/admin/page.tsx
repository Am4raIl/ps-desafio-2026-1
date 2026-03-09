import {
  DashboardHeader,
  DashboardHeaderDescription,
  DashboardHeaderTitle,
  DashboardMain,
} from '@/components/dashboard/dashboard-items'
import { BsGraphUp } from "react-icons/bs";

export default function Page() {
  return (
    <>
      <DashboardHeader>
        <DashboardHeaderTitle>
          <BsGraphUp />
          Home
        </DashboardHeaderTitle>
        <DashboardHeaderDescription>
          Tela principal da aplicação.
        </DashboardHeaderDescription>
      </DashboardHeader>
      <DashboardMain></DashboardMain>
    </>
  )
}
