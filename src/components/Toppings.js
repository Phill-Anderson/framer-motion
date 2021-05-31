import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Button from './general/Button'
import SlideLayout from './general/SlideLayout'
const Toppings = ({ addTopping, pizza }) => {
    let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

    return (
        <SlideLayout classes="toppings container" >
            <h3>Алхам 2: Хачираа сонгоно уу</h3>
            <ul>
                {toppings.map(topping => {
                    let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
                    return (
                        <motion.li key={topping} onClick={() => addTopping(topping)}
                            whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <span className={spanClass}>{topping}</span>
                        </motion.li>
                    )
                })}
            </ul>

            <Button url="/order" text="Захиалах" />

        </SlideLayout>
    )
}

export default Toppings;