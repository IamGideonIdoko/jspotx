import Jobs from '@/components/Jobs';
import styles from '@/styles/home.module.css';

export default function Bookmarks() {
  return (
    <main className={`mx-lg-5 mx-md-2 mx-2 ${styles.main}`}>
      <Jobs />
    </main>
  );
}
