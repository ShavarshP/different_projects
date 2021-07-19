import Cart from "../componet/cart";

const Home = () => {
  return (
    <div className="flex justify-center">
      <img
        className="h-screen w-screen fixed m-0"
        src="https://s1.1zoom.ru/b4452/360/Texture_Abstraction_Multicolor_520510_3840x2160.jpg"
      ></img>
      <div className="relative">
        <p className="italic text-8xl ">Click to view completed task</p>
        <p className="italic text-6xl #D1D5DB">Armenian wedding</p>
        <Cart img={"https://www.channelfutures.com/files/2016/03/todo_0.png"} />
      </div>
      <div></div>
    </div>
  );
};
export default Home;
