import { useState } from 'react'
import Container from './components/container'
import { motion } from 'framer-motion'


function App() {
 
  const containerVariant = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: .55,
        delay: .2,
        ease: 'easeIn'
      }
    }
}

  return (
    <motion.div
      className=" flex justify-center items-center text-[black] pt-[60px] bg-Very-light-gray p-[20px] "
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <Container />
    </motion.div>
  );
}

export default App
