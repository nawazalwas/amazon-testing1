import React, { useEffect } from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import { NumberFormatBase } from 'react-number-format';

function Order({ created,paymentId,items,amount}) {
    
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <h4 className='order__payment__id'>Payment Id : {paymentId}</h4>
            </p>
            {Object.keys(items).map(key => (
                <CheckoutProduct
                    key={key}
                    id={key}
                    title={items[key].title}
                    image={items[key].image}
                    price={items[key].price}
                    rating={items[key].rating}
                    quantity = {items[key].quantity}
                    hideButton = "order"
                />
            ))}
            <NumberFormatBase 
            renderText={(value) => (
                <h3 className="order__total">Order Total: {value}</h3>
            )}
            decimalScale={2}
            value={amount / 100}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
        </div>
    )
}

export default Order;