import React, { Component } from "react";
import { connect } from "react-redux";
import BookListItem from "./../book-list-item";
import "./book-list.scss";
import { withBookstoreService } from "../hoc";
import { bookAddedToCart, fetchBooks, onAddedToCart } from "../../actions";
import ErrorIndicator from '../error-indicator'
import { compose } from "redux";
import Spinner from '../spinner'
import ShoppingCartTable from "../shoping-cart-table";

const BookList = ({books, onAddedToCart}) => {
  return (
    <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem 
                book={book} 
                onAddedToCart={() => {onAddedToCart(book.id)}}
              />
            </li>
          );
        })}
    </ul>
  )
}

class BookListConteinter extends Component {

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading){
      return <Spinner/>
    }

    if(error){
      return <ErrorIndicator/>
    }

    return (
      <>
        <BookList books={books} onAddedToCart={onAddedToCart}/>
        <ShoppingCartTable />


      </>
     
    );
  }
}

const mapStateToProps = ({bookList:{ books, loading, error }}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) =>{dispatch(bookAddedToCart(id))}
  }
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListConteinter);
