import React from 'react';
import { Link } from 'react-router-dom';
import './book-list-item.scss'
const BookListItem = ({book, onAddedToCart}) => {
      const {title, author, price, imgSrc} = book;

      return (
         <div className='book-list-item'>
            <div className="book-cover">
               <img src={imgSrc} alt="cover" />
            </div>
            <div className="book-details">
               <p className='book-title'>{title}</p>
               <div className="book-author">{author}</div>
               <div className="book-price">{price} руб.</div>
               <button 
                  onClick={onAddedToCart}
                  className='btn btn-info add-to-cart'  
               >
                  Add to cart
               </button>
            </div>
         </div>
      )
}

export default BookListItem;