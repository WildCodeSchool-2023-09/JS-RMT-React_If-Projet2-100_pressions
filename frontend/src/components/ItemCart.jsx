import React from "react";
import LACHOUFFE from "../assets/LACHOUFFE.png";

function ItemCart({ name, type, price, sousTotal }) {
  return (
    <div>
      <div>ItemCart</div>
      <img src={LACHOUFFE} alt="LACHOUFFE" />
      <div>
        <h3 className="name">
          {name} - {type}
        </h3>
        <p className="price">${price}</p>
        <p className="sous-total">{sousTotal}</p>
      </div>
    </div>
  );
}

export default ItemCart;

// {
//   /* <h3 className="name">{name} - {type}</h3>
// <p className="price">${price}</p>
// <p className="sous-total">{sousTotal}</p>

// <h3 className="name">Trashy Blonde - Black</h3>
//         <p className="price">$</p>
//         <p className="sous-total">Sous-total</p> */
// }
