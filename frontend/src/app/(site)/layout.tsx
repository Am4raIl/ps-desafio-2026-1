import { Bungee } from 'next/font/google'
import Navbar from './_components/Navbar'

const bungee = Bungee({
    subsets: ['latin'],
    weight: '400',
})

export default function SiteLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className={`${bungee.className}`}>
      <Navbar />
      {children}
    </div>
  )
}
