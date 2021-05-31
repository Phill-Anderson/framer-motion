import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button'
const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}
const modal = {
    hidden: {
        y: '-110vh',
        opacity: 0
    },
    visible: {
        y: '200px',
        opacity: 1,
        transition: { delay: 0.5 }
    }

}
const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            { showModal && (
                <motion.div className="backdrop"
                    variants={backdrop}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div className="modal"
                        variants={modal}
                    >
                        <p>Өөр пицца захиалахыг хүсч байна уу?</p>
                        <Button url="/" text="Дахин эхлэх" onClick={() => setShowModal(false)} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Modal
