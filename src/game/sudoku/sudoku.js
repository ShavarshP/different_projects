import { useEffect, useMemo, useState } from "react";
import { useHttp } from "../../../helpers/hooks/useHttp";
import CreateBlok from "./gameBlok";

import { deleteNumbers } from "./getNumbers";

import styles from "./style.module.css";

let sudoku = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0,
];
const Sudoku = () => {
  const [arrMtr, setArrMtr] = useState([]);
  const [gameMtr, setMtr] = useState([]);
  const { loading, request, error, clearError } = useHttp();

  const setData = async () => {
    try {
      const data = await request(
        "https://shavarshgame.herokuapp.com/api/sudoku/"
      );
      setArrMtr(data);

      console.log(data);
      setMtr(deleteNumbers(data, 35));
    } catch (e) {}
  };
  useEffect(() => {
    setData();
  }, []);

  return (
    <div className={styles.sudoku}>
      <div className={styles.table_sudoku}>
        <CreateBlok arrMtr={gameMtr} />
        <div className={styles.border}></div>
        <div className={styles.border2}></div>
        <div className={styles.border3}></div>
        <div className={styles.border4}></div>
      </div>
    </div>
  );
};
export default Sudoku;
