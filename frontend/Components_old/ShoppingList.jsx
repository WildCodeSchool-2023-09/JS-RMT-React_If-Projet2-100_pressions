// function ShoppingList({ cart, updateCart }) {
//   // Petite précision : categories nous vient de la partie précédente pour récupérer toutes les catégories uniques

//   const categories = cartList.reduce(
//     (acc, id) =>
//       acc.includes(id.category) ? acc : acc.concat(id.category),
//     []
//   );

//   function addToCart (id, name, price){
//     const currentCartAdded = cart.find ((id) => cart.name === name)
//     // .find verifie si la biere est deja presente autrement on cree nouveau tableau sans elle avec filter
//     if (currentCartAdded) {
//         const cartFilterCurrentCart =cart.filter(
//             (cart) => cart.name !== name
//         )
//         updateCart([
//             ...cartFilterCurrentCart,
//             {id, name, price, amount: currentCartAdded.amount +1 }
//             // j'ajoute un objet avec la quantité precedente (amount)
//         ])
//     } else {
//         updateCart([... cart, {id, name, price, amount: 1}])
//     }
//   }

//   return (
//     <div className="lmj-shopping-list">
//       <ul>
//         {categories.map((cat) => (
//           <li key={cat}>{cat}</li>
//         ))}
//       </ul>
//       <ul className="lmj-plant-list">
//         {cartList.map(({ id, price, name, id,  }) => (
//           <div key={id}>
//             {/* <PlantItem price={price} name={name} id={id} ={}/> */
//             <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;
