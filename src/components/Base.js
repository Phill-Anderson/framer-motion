import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Button from './general/Button'

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0
    }
}

const Base = ({ addBase, pizza }) => {
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

    return (
        <motion.div className="base container"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', delay: 0.5 }}
        >

            <h3>Step 1: Choose Your Base</h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return (
                        <motion.li key={base} onClick={() => addBase(base)}
                            whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    )
                })}
            </ul>

            {pizza.base && (
                <motion.div
                    className="next"
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                >
                    <Button url="/toppings" text="Дараах" />
                </motion.div>
            )}

        </motion.div>
    )
}

export default Base;