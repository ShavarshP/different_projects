import MoveTop from "./blockMovement";

const startEvent = (condition = "start", func = false, mtr) => {
  const escFunction = (event) => {
    switch (event.keyCode) {
      case 37:
        func(MoveTop("left", mtr));
        document.removeEventListener("keydown", escFunction, false);
        break;
      case 38:
        func(MoveTop("top", mtr));
        document.removeEventListener("keydown", escFunction, false);
        break;
      case 39:
        func(MoveTop("right", mtr));
        document.removeEventListener("keydown", escFunction, false);
        break;
      case 40:
        func(MoveTop("bottom", mtr));
        document.removeEventListener("keydown", escFunction, false);
        break;
      default:
        console.log("maladec");
        break;
    }
  };

  console.log("maladec3");
  document.addEventListener("keydown", escFunction, false);
};
export const endEvent = () => {
  console.log("avart");
};
export default startEvent;
