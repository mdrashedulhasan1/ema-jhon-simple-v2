import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCartShoppingFast } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1 className='product-name'>{name}</h1>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button onClick={()=> props.handelAddProduct(props.product)} className='product-button'><FontAwesomeIcon icon={faCartShopping} />
                 Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;