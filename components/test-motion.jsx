"use client"
import { motion } from 'framer-motion';

export default function TestMotion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Hello Framer Motion!
    </motion.div>
  );
}
