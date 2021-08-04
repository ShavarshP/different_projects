import MoveTop from "./blockMovement";

const escFunction = (event) => {
  switch (event.keyCode) {
    case 37:
      MoveTop();
      break;
    case 38:
      console.log(38);
      break;
    case 39:
      console.log(39);
      break;
    case 40:
      console.log(40);
      break;
    default:
      console.log("maladec");
      break;
  }
};
const startEvent = () => {
  document.addEventListener("keydown", escFunction, false);
};
export const endEvent = () => {
  console.log("avart");
  document.removeEventListener("keydown", escFunction, false);
};
export default startEvent;
