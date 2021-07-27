import React, { useEffect, useState } from "react";
import Button from "../componet/button/button";
import TetrisComp from "../componet/tetrisComp/block";

const Tetris2 = (props) => {
  const [gametablevalue, setgametablevalue] = useState([]);
  const d3 = [
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
  ];

  useEffect(() => {
    let value = [];

    for (let i = 0; i < 14; i++) {
      value[i] = [];
      for (let j = 0; j < 8; j++) {
        value[i] = [...value[i], true];
      }
    }

    setgametablevalue(value);
  }, []);

  const start = () => {
    check(d3);
  };
  const check = (type, tabl = gametablevalue) => {
    let value = JSON.parse(JSON.stringify(tabl));
    type.forEach((element) => {
      value[element[0]][element[1]] = false;
    });
    try {
      console.log(type.every((item) => value[item[0] + 1][item[1]]));
      if (type.every((item) => value[item[0] + 1][item[1]])) {
        setgametablevalue(value);
        setTimeout(() => {
          type.forEach((element) => {
            value[element[0]][element[1]] = true;
          });
          check(
            type.map((item) => [item[0] + 1, item[1]]),
            value
          );
        }, 600);
        return undefined;
      }
    } catch (e) {}
    setgametablevalue(value);
    setTimeout(() => {
      return check(d3, value);
    }, 600);
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
