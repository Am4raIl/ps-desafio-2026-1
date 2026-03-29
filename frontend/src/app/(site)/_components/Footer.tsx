import styles from "./Footer.module.css";
import { LuTruck, LuShieldCheck } from "react-icons/lu";
import { IoCardOutline, IoSyncOutline } from "react-icons/io5";
import { FaInstagram, FaXTwitter, FaFacebookF } from "react-icons/fa6";

const benefits = [
  { 
    icon: <LuTruck size={28} />, 
    title: "Entrega Expressa", 
    subtitle: "Em até 48h" 
  },
  { 
    icon: <IoCardOutline size={28} />, 
    title: "Até 10x sem juros", 
    subtitle: "no cartão de crédito" 
  },
  { 
    icon: <IoSyncOutline size={28} />, 
    title: "Troca Garantida", 
    subtitle: "em até 30 dias" 
  },
  { 
    icon: <LuShieldCheck size={28} />, 
    title: "Compra Segura", 
    subtitle: "Site protegido SSL" 
  },
];

const atendimentoLinks = [
  "Entregas",
  "Pagamentos",
  "Trocas e devoluções",
  "Meus Pedidos",
  "Central de Atendimento",
];

const institucionalLinks = [
  "Sobre a Fox Store",
  "Política de Privacidade",
  "Regulamentos",
  "Trabalhe Conosco",
];

const telefones = ["(00) 00000-0000", "(11) 11111-1111"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.benefits}>
        <div className={styles.benefitsInner}>
          {benefits.map((item, index) => (
            <div key={item.title} className={styles.benefitsRow}>
              <div className={styles.benefitItem}>
                <span className={styles.iconWrapper}>
                  {item.icon}
                </span>
                <div className={styles.benefitText}>
                  <strong>{item.title}</strong>
                  <span>{item.subtitle}</span>
                </div>
              </div>
              {index < benefits.length - 1 && (
                <div className={styles.divider} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.columns}>

          <div className={styles.col}>
            <h4>Atendimento</h4>
            <ul>
              {atendimentoLinks.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Institucional</h4>
            <ul>
              {institucionalLinks.map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Compre pelo telefone</h4>
            <ul>
              {telefones.map((tel) => (
                <li key={tel}>
                  <a href={`tel:${tel.replace(/\D/g, "")}`}>{tel}</a>
                </li>
              ))}
            </ul>
            
            <div className={styles.social}>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <FaXTwitter size={24} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>

          <div className={styles.brandCol}>
            <a href="/" className={styles.brandName}>
              Fox<b>Store</b>
            </a>
            <p className={styles.tagline}>
              Equipe-se com o instinto de um campeão.
            </p>
          </div>

        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomContent}>
          <p>&copy; 2026 Fox Store. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00 &mdash; Todos os preços em Reais (R$)</p>
        </div>
      </div>

    </footer>
  );
}