import React from 'react';
import SlideLayout from './general/SlideLayout'
const Order = ({ pizza }) => {
    return (
        <SlideLayout classes="container order">
            <h2>Thank you for your order : </h2>
            <p>You ordered a {pizza.base} pizza with:</p>
            {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
        </SlideLayout>
    )
}

export default Order;