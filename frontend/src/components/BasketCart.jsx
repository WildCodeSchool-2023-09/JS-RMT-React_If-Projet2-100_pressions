// import { useEffect, useState } from "react";
// import axios from "axios";
import "./BasketCart.css";

import LACHOUFFE from "../assets/LACHOUFFE.png";

// import Basket from "../pages/Basket.css";
// import ItemCart from "../components/ItemCart";
// import Button from "../components/Button";

// const beersInBasket = [
//   {
//     beerId: 1,
//     quantity: 1,
//   },
//   {
//     beerId: 5,
//     quantity: 1,
//   },
//   {
//     beerId: 25,
//     quantity: 1,
//   },
// ];

function BasketCart() {
  // Mettre en place un state pour mémoriser les bières dans le panier
  // const [cart, setCart] = useState([]);

  // Mettre en place un useEffect pour cahrger en automatique les données relatives au bière
  // Pour se faire, utiliser axios
  // Mettre en place un route backend /basket?beers=1|5|25 (id venant de la variable beerInbasket)

  // En backend sur ma route, je récupère req.query.beers (eq. 1|5|25). Utiliser split('|') pour récupérer un tableau d'id puis faire une requete select ..... from .... where id IN ?, [montableau]
  // SELECT * FROM beer WHERE id in (1,5,25) LIMIT 100

  return (
    <div className="">
      {/* <div>
        <ItemCart />
        <Button />
      </div> */}
      <div>
        <h2 className="basket">My Cart</h2>
      </div>
      <img src={LACHOUFFE} alt="LACHOUFFE" />

      <div className="beerOne">
        <h3 className="name">Trashy Blonde - Black</h3>
        <p className="price">$</p>
        <p className="sous-total">Sous-total</p>
      </div>

      <div className="footer">
        <p className="number of items ">Number of items</p>
        <p className="total">Total</p>
      </div>
    </div>
  );
}

export default BasketCart;

// export default BasketCart;

// // import React from "react";
// // // fichier provisoire en+ facultatif? Basket.jsx avant modif
// // function Basket(Basket) {
// //   return <div className={'title ${colorClass}'}>
// //       <h2 className="basket">My Cart</h2>
// //     </div>

// //     <div>
// //         <h3 className="name">Trashy Blonde - Black</h3>
// //         <img src={LACHOUFFE} alt="LACHOUFFE"
// //         <p className="price">{beer.price}$</p>
// //         <button>+-</button>
// //         <p className="sous-total">Sous-total</p>
// //     </div>

// //     <div>
// //       <h3 className="name">Trashy Blonde - Black</h3>
// //       <img src="../src/assets/LACHOUFFE.png" alt="LACHOUFFE" />
// //       <p className="price">{beer.price}$</p>
// //       <button></button>
// //       <p className="sous-total">Sous-total</p>
// //     </div>

// //     <div className={'title ${colorClass}'}>
// //       <p className="number of items ">Number of items</p>
// //       <p className="total">Total</p>
// //       <button>Valider panier</button>
// //     </div>;
// // }

// // export default Basket;
