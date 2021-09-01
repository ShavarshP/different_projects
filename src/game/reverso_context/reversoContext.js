import React, { useEffect, useState } from "react";
import { useHttp } from "../../componet/hooks/useHttp";
import Cards from "./getDataCards";
import styles from "./style.module.css";
import { io } from "socket.io-client";
import Form from "./step0ne";
import { isCardsSuitable } from "./gameFunc";

const socket = io("http://shavarshgame.herokuapp.com");

function Gamebum() {
  const [selected, setSelectedCard] = useState(null);
  // const [comparedata, setComparedata] = useState(null);
  const [roome, setRoom] = useState("");
  const [tableData, setTableData] = useState([]);
  const [condition, setCondition] = useState(true);
  const [cardData, setCartData] = useState([]);
  const [primary, setPrimary] = useState(null);
  const [allCard, setAllCards] = useState([]);
  const [randomCard, setRandomCard] = useState("trefle_d");
  const changeImput = (e) => {
    setRoom(e.target.value);
  };

  const submit = () => {
    socket.emit("ROOM:JOIN", {
      roomId: roome,
      userName: Math.floor(Math.random() * 10),
    });
    socket.on("ROOM:SET_USERS", (data) => {
      const getData = JSON.parse(data);
      setCartData(getData.myCard);
      setPrimary(getData.primary);
      setRandomCard(getData.random[0]);
      console.log("mmmm", getData.random);
      setCondition(!data);
      // console.log(getData);
    });
    socket.on("ROOM:SET_USERS_CARDS", (data) => {
      const getData = JSON.parse(data);
      console.log("sss", getData);
      setAllCards(getData);
    });
    socket.emit("TABLE:DATA", { roome, tableData: "null" });
    socket.on("TABLE:DATA", (data) => {
      const nuwData = JSON.parse(data).data;
      if (nuwData) {
        setTableData(nuwData);
      }
    });
    // socket.emit("NUMBER_OF_CARDS", { roome, allCard });

    socket.on("RECEIVE:CARDS", (data) => {
      const data2 = JSON.parse(data);
      setCartData(data2.myCard);
      const allCards = JSON.stringify(data2.allCards);
      console.log("tt", JSON.parse(data));
      setAllCards(data2.allCards);
      socket.emit("NUMBER_CARDS", { roome, allCards });
    });

    socket.on("NUMBER_CARDS", (data) => {
      console.log("gg", JSON.parse(data));
      if (JSON.parse(data).length < allCard.length) {
        setAllCards(JSON.parse(data));
      }
    });
  };

  useEffect(() => {
    if (cardData.length < 6 && !condition) {
      const amount = JSON.stringify({
        index: cardData.length < 6 ? 6 - cardData.length : 0,
        cardData: cardData,
      });
      const allCards = JSON.stringify({
        cardData: allCard,
      });

      socket.emit("RECEIVE:CARDS", { roome, amount, allCards });
    }
  }, [allCard]);

  const getNewArr = (index) => {
    console.log("maladec");
    console.log("maladec1");
    if (index < 6) {
      const amount = JSON.stringify({
        index: cardData.length < 6 ? 6 - cardData.length : 0,
        cardData: cardData,
      });
      const allCards = JSON.stringify({
        cardData: allCard,
      });

      socket.emit("RECEIVE:CARDS", { roome, amount, allCards });
    }
  };

  const tableClick = () => {
    if (selected && tableData.length !== 6) {
      socket.emit("TABLE:DATA", {
        roome,
        tableData: JSON.stringify([
          ...tableData,
          { open: selected, closed: null },
        ]),
      });
      setCartData(cardData.filter((item) => item.name !== selected.name));
    }
    setSelectedCard(null);
  };

  const compare = (data, card) => {
    // const amount = JSON.stringify({ index: 6 });

    if (isCardsSuitable(data, selected)) {
      return;
    }

    const newdb = tableData.map((item) => {
      if (data.open.name === item.open.name)
        return {
          open: item.open,
          closed: selected,
        };
      return item;
    });

    socket.emit("TABLE:DATA", {
      roome,
      tableData: JSON.stringify(newdb),
    });

    if (selected) {
      setCartData(cardData.filter((item) => item.name !== selected.name));
      setSelectedCard(null);
    }
  };

  const clickCard = (data) => {
    setSelectedCard(data);
  };

  const surrender = () => {
    let newData = [];
    tableData.forEach(
      (item) => (newData = [...newData, item.open, item.closed])
    );
    newData = newData.filter((item) => item);
    if (!primary) {
      setCartData([...cardData, ...newData]);
      getNewArr([...cardData, ...newData].length);
    } else {
      if (newData.length != tableData.length * 2) {
        return;
      }
      // primary;/////////
      getNewArr(cardData.length);
    }
    socket.emit("TABLE:DATA", {
      roome,
      tableData: JSON.stringify([]),
    });
  };

  return (
    <>
      <div className={styles.table}>
        {condition ? (
          <Form changeImput={changeImput} roome={roome} submit={submit} />
        ) : (
          <>
            <img
              className={styles.imgTable}
              src="https://media.istockphoto.com/photos/green-poker-table-background-picture-id643199720?k=6&m=643199720&s=170667a&w=0&h=a6gzxiCk7LHz-l1oDNsXfCcUQXkuIfdw9AV4KFroYqg="
            />
            <Cards
              clickCard={clickCard}
              compare={compare}
              cardData={cardData}
              tableClick={tableClick}
              tableData={tableData}
              primary={primary}
              selected={selected}
              img={randomCard.img_id ? randomCard.img_id : randomCard}
            />
          </>
        )}
      </div>
      {!condition ? (
        <div className={styles.box}>
          <div onClick={surrender} className={styles.item}>
            {!primary ? "to collect" : "bita"}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Gamebum;
