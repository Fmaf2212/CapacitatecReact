import { motion } from 'framer-motion'
import React from 'react'

const Loader = () => {
    return (
        // <div className="loader-container">
        //     <div className="spinner">Loading...</div>
        //     {/* Puedes agregar cualquier otro estilo o animación aquí */}
        // </div>
        <>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#1ab69d]' initial={{x: "100%", with: "100%"}} animate={{x: "0%", width: "0%"}} exit={{x:["0%","100%"], width:["0%", "100%"]}} transition={{duration:0.8, ease: "easeInOut"}} />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light' initial={{x: "100%", with: "100%"}} animate={{x: "0%", width: "0%"}} transition={{delay: 0.2, duration:0.8, ease: "easeInOut"}} />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#31b978]' initial={{x: "100%", with: "100%"}} animate={{x: "0%", width: "0%"}} transition={{delay: 0.4, duration:0.8, ease: "easeInOut"}} />
        </>
    );
}

export default Loader