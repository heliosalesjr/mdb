"use client";
import { motion } from 'framer-motion';
import Card from '@/components/Card';

export default function RecordSection({ posts }) {
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
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="my-8">
      <h2 className="text-3xl font-bold text-slate-700 mb-6">Discos</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }} // Configura o disparo da animação
      >
        {posts.length > 0 ? (
          posts.map((post) => (
            <motion.div key={post.slug} variants={cardAnimation}>
              <Card post={post} />
            </motion.div>
          ))
        ) : (
          <p className="text-slate-400">No record posts available</p>
        )}
      </motion.div>
    </section>
  );
}
