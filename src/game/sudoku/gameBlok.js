import styles from "./style.module.css";

const CreateBlok = ({ arrMtr }) => {
  //   console.log(arrMtr);

  const blok = arrMtr.map((item) =>
    item ? (
      <div className={styles.numberBlok}>{item}</div>
    ) : (
      <div class={styles.quantity}>
        <input class={styles.number} type="number" min="1" max="9" />
      </div>
    )
  );
  return <div className={styles.bigNumberBlok}>{blok}</div>;
};
export default CreateBlok;
