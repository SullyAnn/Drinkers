import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Go to  <a href="./beers">Beers!</a>
        </h1>
      </main>
    </div>
  )
}
