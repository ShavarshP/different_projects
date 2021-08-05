import { useCallback, useEffect, useState } from "react";
import check from "./2048Func/check";
import "./2048Func/2048.css";
import pour from "./2048Func/pour";
import startEvent, { endEvent } from "./2048Func/startEvent";
import isSimilar from "./2048Func/isSimilar";

const GamBam = () => {
  const [gametablevalue, setgametablevalue] = useState([]);
  const [table, setTable] = useState(<div></div>);

  const move = useCallback((newMtr) => {
    if (gametablevalue.length != 0) {
      let value = newMtr;
      if (isSimilar(value, gametablevalue)) {
        value = pour(value);
      }
      setgametablevalue(value);
      setTable(check(value));
    }
  });

  useEffect(() => {
    let value = [];
    for (let i = 0; i < 4; i++) {
      value[i] = [];
      for (let j = 0; j < 4; j++) {
        value[i] = [...value[i], false];
      }
    }

    value = pour(value);
    value = pour(value);
    setgametablevalue(value);
    setTable(check(value));
  }, []);

  useEffect(() => {
    startEvent("start", move, gametablevalue);
  }, [table]);
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 justify-center py-10">
      <div className="flex items-center justify-around flex-wrap p-1 bg-gray-600 table_2048">
        {table}
      </div>
    </div>
  );
};
export default GamBam;
