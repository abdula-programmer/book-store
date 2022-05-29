const booksLoaded = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

const bookAddedToCart = (bookId) => {
  return {
    type: "BOOK_ADDED_TO_CART",
    payload: bookId
  }
}

const bookDecreaseFromCart = (bookId) => {
  return{
    type: "BOOK_DECREASE_FROM_CART",
    payload: bookId
  }
}

const allBooksDelete = (bookId) => {
  return{
    type: "BOOK_DELETE_FROM_ORDER",
    payload: bookId
  }
}


const fetchBooks = (bookstoreService,  dispatch ) => () => {
  dispatch(booksRequested());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

export { fetchBooks, bookAddedToCart,bookDecreaseFromCart,allBooksDelete };