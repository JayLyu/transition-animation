import styles from './page.module.scss'

import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>BaiKKK</nav>
      <section className={styles.content}>
        <Link href={'/Case1'}><div className={styles.card}>Case 1</div></Link>
        <Link href={'/Case2'}><div className={styles.card}>Case 2</div></Link>
        <Link href={'/Case3'}><div className={styles.card}>Case 3</div></Link>
        <Link href={'/Case4'}><div className={styles.card}>Gallery Effect</div></Link>
      </section>
    </main>
  )
}
