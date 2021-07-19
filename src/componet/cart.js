import { NavLink } from "react-router-dom";

const Cart = (props) => {
  return (
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article className="overflow-hidden rounded-lg shadow-lg">
            <NavLink to="/todo" activeClassName="selected">
              <img
                alt="Placeholder"
                className="block h-auto w-full cursor-pointer  focus:outline-none"
                src={props.img}
              />
            </NavLink>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Cart;
