import styles from "./style.module.css";

const MiniLoading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading_dot}></div>
      <div className={styles.loading_dot}></div>
      <div className={styles.loading_dot}></div>
      <div className={styles.loading_dot}></div>
    </div>
  );
};

export default MiniLoading;
