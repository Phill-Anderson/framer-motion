import React from 'react';
import { motion } from 'framer-motion'
import Button from './general/Button'
import SlideLayout from './general/SlideLayout'
import Loader from './general/Loader';
const Home = () => {
    return (
        <SlideLayout classes="home container">
            <motion.h2 animate={{ fontSize: 50, color: '#ff2994', x: 100, y: -100 }}
                transition={{ duration: 2 }} >
                `Pizza Joint` - д тавтай морил!
            </motion.h2>
            <Button url="/base" text="Пицца захиалах!" />
            <Loader />
        </SlideLayout>
    )
}

export default Home;