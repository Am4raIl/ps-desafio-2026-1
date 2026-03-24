import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        <div className={styles.left}>
          <Link href="/" className={styles.brandName}>
            Fox<b>Store</b>
          </Link>
        </div>

        <div className={styles.logoCenter}>
          <img
            src="/assets/images/LogoSemFundo.png"
            alt="Fox Store Logo"
            className={styles.logo}
          />
        </div>

        <nav className={styles.right}>
          <Link href="/login" className={styles.btnLogin}>
            Login
          </Link>
          <Link href="/cadastro" className={styles.btnSignup}>
            Cadastrar
          </Link>
        </nav>

      </div>
    </header>
  );
}