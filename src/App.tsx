import { ToDo } from "./components/ToDo";
import { Header } from "./components/Header";

import styles from "./App.module.css"

export default function App() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.container}>
        <ToDo />
      </div>
    </div>
  )
}
