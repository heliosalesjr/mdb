"use client"
import { motion } from 'framer-motion';
import Card from '@/components/Card';

export default function HistorySection({ posts }) {
  // Configuração de animação para os cards
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Controla o tempo entre a animação de cada card
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring', // Tipo de transição para uma animação suave
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold text-slate-700 mb-6">História</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {posts.length > 0 ? (
          posts.map((post) => (
            <motion.div key={post.slug} variants={cardAnimation}>
              <Card post={post} />
            </motion.div>
          ))
        ) : (
          <p className="text-slate-300">No tech posts available</p>
        )}
      </motion.div>
    </section>
  );
}
