import React, { useState, useEffect } from 'react';
import SlideLayout from './general/SlideLayout'
import { motion, AnimatePresence } from 'framer-motion'
const childVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}
const Order = ({ pizza, setShowModal }) => {
    const [showTitle, setShowTitle] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowModal(true)
        }, 5000)
        return () => clearTimeout(timeout)
    }, [setShowModal])
    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowTitle(false)
        }, 4000);
        return () => clearTimeout(timeout)
    }, [])
    return (
        <SlideLayout classes="container order">
            <AnimatePresence>
                {showTitle && (
                    <motion.h2
                        exit={{ y: -1000 }}
                    >Thank you for your order : </motion.h2>)}
            </AnimatePresence>
            <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
            <motion.div variants={childVariants}>
                {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
            </motion.div>

        </SlideLayout>
    )
}

export default Order;