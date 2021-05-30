import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Button from './general/Button'
const Home = () => {
    return (
        <motion.div className="home container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }} >
            <motion.h2 animate={{ fontSize: 50, color: '#ff2994', x: 100, y: -100 }}
                transition={{ duration: 2 }} >
                `Pizza Joint` - д тавтай морил!
            </motion.h2>
            <Button url="/base" text="Пицца захиалах!" />
        </motion.div>
    )
}

export default Home;