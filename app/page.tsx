import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Go to  <Link href="/beers">Beers!</Link>
        </h1>
      </main>
    </div>
  )
}
