import updateBooksList from "./book-list";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
  return{
     bookList: updateBooksList(state, action),
     shoppingCart: updateShoppingCart(state, action) 
  }

};

export default reducer;
