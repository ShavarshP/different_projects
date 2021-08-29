import React, { useEffect, useState } from "react";
import { useHttp } from "../../componet/hooks/useHttp";
import Cards from "./getDataCards";
import styles from "./style.module.css";
import { io } from "socket.io-client";
import Form from "./step0ne";

const socket = io("http://shavarshgame.herokuapp.com");

function Gamebum() {
  const [selected, setSelectedCard] = useState(null);
  // const [comparedata, setComparedata] = useState(null);
  const [roome, setRoom] = useState("");
  const [tableData, setTableData] = useState([]);
  const [condition, setCondition] = useState(true);
  const [cardData, setCartData] = useState(null);
  const [primary, setPrimary] = useState(null);

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
      setCondition(!data);
    });
    socket.emit("TABLE:DATA", { roome, tableData: "null" });
    socket.on("TABLE:DATA", (data) => {
      const nuwData = JSON.parse(data).data;
      if (nuwData) {
        setTableData(nuwData);
      }
    });
  };
  const sendTableData = () => {};

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
    if (!primary) {
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
