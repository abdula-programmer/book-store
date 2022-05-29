// const updateOrderTotal = (state) =>{
//    console.log(state);
//    let orderTotal =  state.shoppingCart.cartItems.reduce(( sum, item)=> {
//       return  sum + item.total
//    })

//    return{
//       ...state,
//       shoppingCart:{
//          ...state.shoppingCart,
//          orderTotal
//       }
      
//    }
// }


const updateCartItems = (cartItems, item, idx) => {
  if (item.count == 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (item = {}, book, quantity) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };

  
};

const updateOrder = (bookId, state, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems, orderTotal},
  } = state;

  const book = books.find((book) => bookId == book.id),
    itemIndex = cartItems.findIndex(({ id }) => id == bookId),
    item = cartItems[itemIndex];
  let newItem = updateCartItem(item, book, quantity);
  return {
    cartItems: updateCartItems(
      state.shoppingCart.cartItems,
      newItem,
      itemIndex
    ),
    orderTotal: orderTotal + quantity*book.price,
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case "BOOK_ADDED_TO_CART":

      return updateOrder(action.payload, state, 1);

    case "BOOK_DECREASE_FROM_CART":

      return updateOrder(action.payload, state, -1);

    case "BOOK_DELETE_FROM_ORDER":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id == action.payload
      );
      return updateOrder(action.payload, state, -item.count);
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;