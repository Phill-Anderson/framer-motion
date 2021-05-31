import React from 'react'
import { motion } from 'framer-motion'
const containerVariants = {
    hidden: {
        opacity: 0,
        x: '100vw'
    },
    visible: {
        opacity: 1,
        x: 0
    },
    transition: {
        type: 'spring',
        mass: 0.4,
        damping: 8,
        when: 'beforeChildren',
        staggerChildren: 0.4
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}
const SlideLayout = ({ children, classes }) => {
    return (
        <motion.div className={classes}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {children}
        </motion.div>
    )
}

export default SlideLayout
