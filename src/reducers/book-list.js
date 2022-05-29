const updateBooksList = (state, action) => {

   if(state === undefined){
      return{
         
         books: [],
         loading: true,
         error: null,
          
      }
   } 

  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        books: [],
        loading: true,
      };

    case "FETCH_BOOKS_SUCCESS":
      return {
        books: action.payload,
        loading: false,
      };

    case "FETCH_BOOKS_FAILURE":
      return {
        error: action.payload,
      };
    default:
      return state.bookList;
  }
};

export default updateBooksList;