import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    return (
        <div className='shop-container'>
            <div className="product-container">
                <ul>
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h1>This is our product cart</h1>
            </div>

        </div>
    );
};

export default Shop;