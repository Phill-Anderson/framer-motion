import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
const Button = ({ url, text }) => {
    return (
        <Link to={url}>
            <motion.button whileHover={{ scale: 1.1, textShadow: "0px 0px 8px rgb(255,255,255)", boxShadow: "0px 0px 8px rgb(255,255,255)" }}>
                {text}
            </motion.button>
        </Link>
    )
}

export default Button
