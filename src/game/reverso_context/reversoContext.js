import React, { useEffect } from "react";
import { useHttp } from "../../componet/hooks/useHttp";

function Gamebum() {
  const { loading, request, error, clearError } = useHttp();
  const getData = async () => {
    try {
      const data = await request(
        "https://shavarshgame.herokuapp.com/api/play_cards/"
      );
      console.log(data);
    } catch (e) {}
  };
  useEffect(() => {
    const socket = new WebSocket("ws://shavarshgame.herokuapp.com/io/");
    socket.onopen = () => {
      console.log("maladec");
    };
    socket.onmessage = (event) => {
      console.log(event.data);
    };
    getData();
  }, []);

  return <></>;
}

export default Gamebum;
