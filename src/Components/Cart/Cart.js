import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    const {cart} = props;
    

    let total=0;
    for(const member of cart){
       total = total + member.donation;
    }
    return (
        <div className="cart">
            <h1>Donation Summery</h1>
            <h2>Total Donators: {cart.length}</h2>
            <p>Total Donation: ${total} billion</p>
            <h4 className="name-cart">
                {
                    <ul>
                        {
                            cart.map(
                                data => <li key={data.id}>
                                    {
                                        data.name 
                                    }
                                    </li>
                            )
                        }
                    </ul>
                }

            </h4>
           
        </div>
    );
};

export default Cart;