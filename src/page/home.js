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
        <div className="flex mt-14">
          <Cart
            img={"https://www.channelfutures.com/files/2016/03/todo_0.png"}
            link={"/todo"}
          />
          <Cart
            img={
              "https://img.paperform.co/fetch/f_jpg,w_1800/https://s3.amazonaws.com/paperform-blog/2020/09/How-To-Create-a-Registration-Form-in-HTML-From-Scratch--1-.png"
            }
            link={"/form"}
          />
          <Cart
            img={
              "https://www.bytelion.com/wp-content/uploads/2020/04/Quickly-search-for-information-online-980x551.png"
            }
            link={"/search"}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
