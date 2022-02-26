import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i=0; i<cart.length; i++){
        let product = cart[i];
        total = total+product.price;
    }
    let shipping = 0;
    
    if(total>30){
        shipping = 30;
    }
    else if(total>0){
        shipping = 10;
    }
    const tax = (total/100).toFixed(2);
    return (
        <div>
            <h4>Order summary:</h4>
            <p>Items ordered:{cart.length}</p>
            <p>Product Price:{total}</p>
            <p>Shipping Cost:{shipping}</p>
            <p>Tax+VAT:{tax}</p>
            <p>Total price:{(total + shipping + parseFloat(tax)).toFixed(2)}</p>
        </div>
    );
};

export default Cart;