import React, { useEffect, useState } from "react";
import Button from "../componet/button/button";
import TetrisComp from "../componet/tetrisComp/block";
import typeBloks from "./store";

const Tetris2 = (props) => {
  const [gametablevalue, setgametablevalue] = useState([]);
  const [isStart, setStart] = useState(false);

  const d3 = typeBloks;

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

  useEffect(() => {}, []);

  const checkTable = (value) => {
    return value.map((item) => {
      return item.map((item2, index, arr) => {
        if (arr.every((item) => item === false)) {
          return true;
        }
        return item2;
      });
    });
  };

  const start = () => {
    if (!isStart) {
      check(d3[Math.floor(Math.random() * d3.length)]);
      setStart(true);
    }
  };

  const check = (type = d3, tabl = gametablevalue) => {
    tabl = checkTable(tabl);

    const muve = () => {
      type.forEach((element) => {
        value[element[0]][element[1]] = true;
      });
    };
    const escFunction = (event) => {
      switch (event.keyCode) {
        case 37:
          muve();
          type = type.map((element) => {
            return [element[0], element[1] - 1];
          });
          break;
        case 39:
          muve();
          type = type.map((element) => {
            return [element[0], element[1] + 1];
          });
          break;
        default:
          console.log("maladec");
          break;
      }
    };
    let value = JSON.parse(JSON.stringify(tabl));

    document.addEventListener("keydown", escFunction, false);
    type.forEach((element) => {
      value[element[0]][element[1]] = false;
    });
    try {
      const isCanMuve = emptyBlock(type);

      if (isCanMuve.every((item) => value[item[0] + 1][item[1]])) {
        setgametablevalue(value);
        setTimeout(() => {
          document.removeEventListener("keydown", escFunction, false);
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
      return check(d3[Math.floor(Math.random() * d3.length)], value);
    }, 600);
  };

  const emptyBlock = (bloks) => {
    const bb = bloks.filter(
      (item, index, arr) =>
        !arr.some((i) => item[0] + 1 === i[0] && item[1] === i[1])
    );
    return bb;
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
