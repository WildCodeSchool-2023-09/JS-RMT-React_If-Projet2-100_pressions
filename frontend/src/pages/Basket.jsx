// import { useState } from "react";
import React from "react";

import BasketCart from "../components/BasketCart";

function Basket() {
  return (
    <div>
      <BasketCart />
    </div>
  );
}

export default Basket;

// function Basket() {
//   return (
//     <div>
//       <div className="">
//         <h2>My Cart</h2>
//       </div>

//       <div className="Cart_1">
//         <h3>Trashy Blonde - Black</h3>
//         <img src={LACHOUFFE} alt="LACHOUFFE" />
//         <p>Price</p>
//         <button>+-</button>
//         <p>Sous-total</p>
//       </div>

//       <div className="Cart_2">
//         <h3>Trashy Blonde - Black</h3>
//         <img src={LACHOUFFE} alt="LACHOUFFE" />
//         <p>Price</p>
//         <button>jhh</button>
//         <p>Sous-total</p>
//       </div>

//       <div className={`title ${colorClass}`}>
//         <p>Number of items</p>
//         <p>Total</p>
//         <button>Valider panier</button>
//       </div>
//     </div>
//   );
// }
// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h2>Counter</h2>
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={increment}>Increment</button>
//         <button onClick={decrement}>Decrement</button>
//       </div>
//     </div>
//   );
// }

// export default Basket;
// Counter;

// import React from "react";
// import "..components/Cart.css";

// function Basket(Basket) {
//   return (
//     <div className="">
//       <h2 >My Cart</h2>
//     </div>

//     <div className="Cart_1">
//         <h3>Trashy Blonde - Black</h3>
//         <img src="../src/assets/LACHOUFFE.png" alt="LACHOUFFE" />
//         <p>Price</p>
//         <button>+-</button>
//         <p>Sous-total</p>
//     </div>

//     <div className="Cart_2">
//       <h3>Trashy Blonde - Black</h3>
//       <img src="../src/assets/LACHOUFFE.png" alt="LACHOUFFE" />
//       <p>Price</p>
//       <button></button>
//       <p>Sous-total</p>
//     </div>

//     <div className={'title ${colorClass}'}>
//       <p>Number of items</p>
//       <p>Total</p>
//       <button>Valider panier</button>
//     </div>

//   );
// }

// export default Basket;

// // fction saveBasket enregistrer panier dans le local storage (basket pour savoir quel panier enregistrer)
// function saveBasket(basket) {
//   localStorage.setItem("basket", basket);
// }

// function getBasket() {
//   localStorage.getItem("basket");
// }
