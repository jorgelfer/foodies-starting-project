import styles from "./loading.module.css";

// loading is a reserve name, it creates a default loading page for fetching data
export default function MealsLoadingPage() {
  return <p className={styles.loading}>Fetching meals..</p>;
}
