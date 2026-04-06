import styles from "./Footer.module.css";
import { LuTruck, LuShieldCheck } from "react-icons/lu";
import { IoCardOutline, IoSyncOutline } from "react-icons/io5";
import { FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";

const benefits = [
  {
    icon: <LuTruck size={28} />,
    title: "Entrega Expressa",
    subtitle: "Em até 48h",
  },
  {
    icon: <IoCardOutline size={28} />,
    title: "Até 10x sem juros",
    subtitle: "no cartão de crédito",
  },
  {
    icon: <IoSyncOutline size={28} />,
    title: "Troca Garantida",
    subtitle: "em até 30 dias",
  },
  {
    icon: <LuShieldCheck size={28} />,
    title: "Compra Segura",
    subtitle: "Site protegido SSL",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.benefits}>
        <div className={styles.benefitsInner}>
          {benefits.map((item) => (
            <div key={item.title} className={styles.benefitItem}>
              <span className={styles.iconSquare}>{item.icon}</span>
              <div className={styles.benefitText}>
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.socialContainer}>
        <h4>Siga-nos nas redes sociais</h4>
        <div className={styles.socialIcons}>
          <a href="#" className={styles.socialIcon} aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Twitter">
            <FaXTwitter size={20} />
          </a>
          <a href="#" className={styles.socialIcon} aria-label="Facebook">
            <FaFacebookF size={20} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <p>2026 Fox Store. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
}