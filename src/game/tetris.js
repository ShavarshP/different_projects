import React, { useEffect, useState } from "react";
import Button from "../componet/button/button";
import TetrisComp from "../componet/tetrisComp/block";

const Tetris2 = (props) => {
  const [gametablevalue, setgametablevalue] = useState([]);

  useEffect(() => {
    let value = [];

    for (let i = 0; i < 14; i++) {
      value[i] = [];
      for (let j = 0; j < 8; j++) {
        value[i] = [...value[i], false];
      }
    }

    setgametablevalue(value);
  }, []);
  const start = () => {
    // setInterval(() => {
    check();
    // }, 1000);
  };
  const check = () => {
    let value = JSON.parse(JSON.stringify(gametablevalue));
    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < 8; j++) {
        value[i][j] = !value[i][j];
      }
    }
    setgametablevalue(value);
    console.log(value);
  };

  return (
    <div className=" flex  justify-center bg-gray-50 h-screen">
      <div className="absolute mr-1 m-96">
        <Button click={start} />
      </div>
      <div className="pl-1 mt-20 flex flex-wrap justify-center bg-gray-800 w-60 h-96">
        {gametablevalue.map((item, index) =>
          item.map((item2, index2) => (
            <TetrisComp key={"" + index + index2} isBlack={item2} />
          ))
        )}
      </div>
    </div>
  );
};

export default Tetris2;
