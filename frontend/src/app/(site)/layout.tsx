import { Syne, Outfit } from 'next/font/google';
import Navbar from "./_components/Navbar";

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-outfit',
});

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${syne.className} ${outfit.variable}`}>
      <Navbar />
      {children}
    </div>
  );
}