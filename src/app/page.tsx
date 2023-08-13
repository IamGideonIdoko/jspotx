import styles from '@/styles/home.module.css'
import { Button } from '@/composables/bootstrap';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Test App</h1>
      <Button>Button</Button>
    </main>
  )
}
