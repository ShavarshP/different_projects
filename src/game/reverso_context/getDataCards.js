import React, { useCallback, useEffect, useState } from "react";
import { useHttp } from "../../componet/hooks/useHttp";
import { boxLeft } from "./boxLeft";
import { CartClosed, MainTableCards, PleyerCards, rival } from "./getjsx";
import styles from "./style.module.css";

const Cards = ({
  cartLength,
  clickCard,
  compare,
  cardData,
  tableClick,
  tableData,
  primary,
  selected,
  img,
}) => {
  const [playerData, setPlayerData] = useState("mi ban");
  const [tableCards, setTableCards] = useState("mi ban");
  const [rivalData, setRivalData] = useState(null);
  const [requestData, setRequestData] = useState({});
  const { loading, request, error, clearError } = useHttp();

  useEffect(() => {
    setTableCards(MainTableCards(tableData, compare, primary, selected));
    const left = boxLeft(cardData.length);
    setPlayerData(PleyerCards(cardData, left, clickCard));
  }, [tableData, cardData, selected]);

  const getjsx = (data, mainTableCards) => {
    // const newData = data.filter((item, index) => index < 10);
    const left2 = boxLeft(cartLength);

    setRivalData(rival(cartLength, left2));
  };
  const getData = async () => {
    try {
      const data = await request(
        "https://shavarshgame.herokuapp.com/api/all_play_cards/"
      );

      const mainTableCards = await request(
        "https://shavarshgame.herokuapp.com/api/fakeDate_play_cards/"
      );

      getjsx(data, mainTableCards);
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, []);
  const stackCards = CartClosed(img);

  return (
    <div className={styles.tableCards}>
      <div className={styles.cards}>{rivalData}</div>
      <div className={styles.flex}>
        <div className={styles.stackCards}>{stackCards}</div>
        <div
          onClick={primary ? tableClick : undefined}
          className={styles.mainTable}
        >
          {tableCards}
        </div>
      </div>
      <div className={styles.cards2}>{playerData}</div>
    </div>
  );
};

export default Cards;
