'use client'

import Link from 'next/link'
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react'
import { getSession } from 'next-auth/react'
import { Bungee } from 'next/font/google'

const bungee = Bungee({
    subsets: ['latin'],
    weight: '400',
})

export default function Navbar() {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  useEffect(() => {
    const requestDataSession = async () => {
      const sessionResponse = await getSession()
      if(sessionResponse) {
        setIsAuth(!!sessionResponse.user)
      } else {
        console.log('Você não está autenticado. Por favor, faça login para acessar esta página.')
      }
    }
    requestDataSession()
  }, [])

  return (
    <header className={`${styles.navbar} ${bungee.className}`}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.brandName}>
            Fox<b>Store</b>
          </Link>
        </div>

        <div className={styles.logoCenter}>
          <a href="/">
            <img
              src="/assets/images/LogoSemFundo.png"
              alt="Fox Store Logo"
              className={styles.logo}
            />
          </a>
        </div>

        <nav className={styles.right}>
          <Link href="/admin" className={styles.loginButton}>
            {isAuth ? 'Logado' : 'Login'}
          </Link>
          {!isAuth && (
            <Link href="/" className={styles.signupButton}>
              Cadastrar
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
