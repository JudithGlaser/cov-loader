import React from 'react';
import {motion} from 'framer-motion';
import circle from '../Cov1/covCircle.svg';
import clock from '../Cov1/clock.svg';

export default function Box1() {
    return (
        <div className="box-container">
          <div className="paper">
            <div className="animation-container">
              <motion.div 
                className="dot"
                initial={{
                  x: 90,
                  width: '2rem',
                  height:'2rem' 
                }} 
                animate={{
                  x: 140,
                  width: '4rem',
                  height:'2rem' 
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  repeatType: "mirror",
                }}
              >
              </motion.div>
              <img className="circle" src={circle} alt="covestro circle"/>
              <img  className="clock" src={clock} alt="sand clock icon"/>
            </div> 
            <p><b>Just a moment.</b></p> 
            <p style={{textAlign: 'center'}}>There is a lot data in the back.  <br/>We are loading – this might take a moment. </p>
          </div> 
        </div>
    )
}
