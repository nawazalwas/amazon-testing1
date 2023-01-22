import React from 'react';
/* import CurrencyFormat from 'react-currency-format'; */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getBasketTotal } from './Reducer';
import { AmazonUseContext } from './StateProvider';
import './Subtotal.css';

function Subtotal() {
    const [{ cart, user }] = AmazonUseContext();
    const navigate = useNavigate();
    const location = useLocation();

    const paymentPageRender = () => {
        if (user) {
            navigate('/payment', {
                state : {
                    previousUrl : location.pathname,
                }
            }) 

        } else {
            navigate('/login', {
                state : {
                    previousUrl : location.pathname,
                }
            }) 

        }
    }

    return (
        <div className='subtotal'>
            

            <button
                className='subtotal_button'
                onClick={paymentPageRender}
            >Proceed for Checkout</button>


        </div>
    )
}

export default Subtotal;