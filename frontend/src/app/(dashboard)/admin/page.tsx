import {
  DashboardHeader,
  DashboardHeaderDescription,
  DashboardHeaderTitle,
  DashboardMain,
} from '@/components/dashboard/dashboard-items'
import Link from 'next/link';
import { MdSports } from "react-icons/md";
import styles from './page.module.css'
// import Navbar from '@/app/(site)/_components/Navbar';

export default function Page() {
  return (
    <>
      <div className={styles.topContainer}>
        <Link href="/" className={styles.link}>
          Página Inicial
        </Link>
      </div>
      {/* <Navbar/> */}
      <DashboardHeader>
        <DashboardHeaderTitle>
          <MdSports />
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
