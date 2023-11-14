// import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";
// import { useState } from "react";

// function Cart({ cart, updateCart }) {
//   const monsteraPrice = 8;
//   const [isOpen, setIsOpen] = useState(true);

//   return isOpen ? (
//     <div className="lmj-cart">
//       <button>
//         className="lmj-cart-toggle-button"
//         onClick={() => setIsOpen(false)}
//       />
//         Fermer
//       </button>
//       <h2>Panier</h2>
//       <h3>Total : {Price * cart}$</h3>
//       <button onClick={() => updateCart(0)}>Vider le panier</button>
//     </div>
//   ) : (
//     <div className="lmj-cart-closed">
//       <button
//         className="lmj-cart-toggle-button"
//         onClick={() => setIsOpen(true)}
//       >
//         Ouvrir le Panier
//       </button>
//     </div>
//   );
// }

// export default Cart;

// // const router = createBrowserRouter([
// //     {
// //       path: "/" /*Cart*/,
// //       element: (
// //         <div>
// //           Cart
// //           <nav>
// //             <Link to="/Add">Add</Link>
// //             <Link to="/Delete">Delete</Link>
// //           </nav>
// //         </div>
// //       ) /*élement à rendre (.jsx)*/,
// //     },

// // export default App;
