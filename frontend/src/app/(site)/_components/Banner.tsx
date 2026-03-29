import styles from './Banner.module.css'

export default function Banner() {
  return (
    <section className={styles.banner}>
      <img
        src="/assets/images/Banner Cruzeiro.jpg"
        alt="Banner Cruzeiro"
        className={styles.bannerImg}
      />
    </section>
  )
}
