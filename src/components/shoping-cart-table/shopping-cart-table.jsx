import React from "react";
import { connect } from "react-redux";
import "./shopping-cart-table.scss";
import { bookAddedToCart, bookDecreaseFromCart, allBooksDelete } from "../../actions";
const ShopingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, i) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{++i}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total} руб.</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger "
          >
            <i className="bi bi-trash" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success "
          >
            <i className="bi bi-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease (id)}
            className="btn btn-outline-warning "
          >
            <i className="bi bi-dash-circle" />
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          
        </thead>

        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: {total} руб.</div>
    </div>
  );
};
const mapStateToProps =  ({shoppingCart:{cartItems, orderTotal}}) => {
    return{
        items: cartItems,
        total: orderTotal,
    }
};



const mapDispatchToProps ={
    
  onIncrease: bookAddedToCart, 
  onDecrease: bookDecreaseFromCart,
  onDelete: allBooksDelete
  
}


export default connect(mapStateToProps, mapDispatchToProps)(ShopingCartTable);
