import React, { useState } from "react";
import styles from './Sidebar.module.css'
import { motion } from 'framer-motion'

const Sidebar = () => {
    function expandHandler() {
        setExpand(prev => !prev)

    }
    const [expand, setExpand] = useState(false)
    return (
        <div className={`${styles.navBar} ${expand && styles.expandNav}`}>
            {expand && <div className={styles.undraw}></div>}
            <motion.button className={`${styles.expandButton} ${expand && styles.expandButtonExpand}`}
                initial={{ opactiy: 0 }}
                animation={{ opacity: 1 }}
                transition={{ repeat: Infinity, duration: 2 }}
                onClick={expandHandler}>
                {expand ? <i class="fa-solid fa-arrow-left"></i> : <i class="fa-solid fa-arrow-right"></i>}
            </motion.button>
            <nav>
                <ul className={styles.navList}>
                    <li className={`${expand && styles.expandedLi}`}>{expand ? 'HOME' : <i class="fa-solid fa-house"></i>}</li>
                    <li className={`${expand && styles.expandedLi}`}>{expand ? 'ABOUT' : <i class="fa-solid fa-address-card"></i>}</li>
                    <li className={`${expand && styles.expandedLi}`}>{expand ? 'SPONSORS' : <i class="fa-solid fa-money-bill-1"></i>}</li>
                </ul>
            </nav>
        </div>
    )
};

export default Sidebar;
