import React from 'react';
import styles from './Button.module.css'
import { motion } from 'framer-motion';

const Button = () => {
    return (
        <div className={styles.buttonParent}>
            <motion.button
                drag
                dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
                className={styles.discord}
                animate={{ rotate: [0, 220, 220, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 2 }}>
                <i class="fa-brands fa-discord"></i>   Join Discord
            </motion.button>
            <motion.button
                drag
                dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
                className={styles.register}
                animate={{ x: [0, 200, 200, 0] }}
                transition={{ repeat: Infinity, duration: 3, delay: 2 }}>
                <i class="fa-solid fa-check"></i>   REGISTER NOW!
            </motion.button>
        </div>
    );
};

export default Button;