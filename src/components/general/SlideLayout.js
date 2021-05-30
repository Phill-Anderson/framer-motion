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
    }
}
const SlideLayout = ({ children, classes }) => {
    return (
        <motion.div className={classes}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ type: 'spring', delay: 0.5 }}
        >
            {children}
        </motion.div>
    )
}

export default SlideLayout
