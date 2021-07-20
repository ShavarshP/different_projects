import { NavLink } from "react-router-dom";

const Cart = (props) => {
  return (
    <div className="my-1 px-1 w-80 mr-18 reletiv">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <NavLink to={props.link} activeClassName="selected">
          <img
            alt="Placeholder"
            className="block h-30 w-30 cursor-pointer  focus:outline-none"
            src={props.img}
          />
        </NavLink>
      </article>
    </div>
  );
};

export default Cart;
