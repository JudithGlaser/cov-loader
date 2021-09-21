import React from 'react';
import {motion} from 'framer-motion';

export default function Box1() {
    return (
        <div className="box-container">
            <motion.div 
                className="box" 
                animate={{
                    x: 1000,
                    opacity: 1
                }}
                initial= {{
                    // x: 50,
                    opacity: 0.1,
                }}
                transition = {{
                    type: "spring",
                    stiffness: 50,
                    damping: 80
                }}
                >
            </motion.div>
        </div>
    )
}
