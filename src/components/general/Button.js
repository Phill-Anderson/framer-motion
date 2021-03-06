import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.3,
            yoyo: 10
        }
    }
}
const Button = ({ url, text, onClick }) => {
    return (
        <Link to={url} onClick={onClick}>
            <motion.button variants={buttonVariants} whileHover="hover">
                {text}
            </motion.button>
        </Link>
    )
}

export default Button
