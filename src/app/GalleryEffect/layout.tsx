import styles from './page.module.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}
