import { useState } from "react";
import styles from "./Counter.module.scss";

interface ICounter {}

export function Counter(props: ICounter) {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.block}>
      <div>
        <h1>counter</h1>
      </div>
      <span>{count}</span>
      <button
        className={styles.btn}
        onClick={() => setCount((prev) => prev + 1)}
      >
        incr
      </button>
      <button
        className={styles.btn}
        onClick={() => setCount((prev) => prev - 1)}
      >
        descr
      </button>
    </div>
  );
}
