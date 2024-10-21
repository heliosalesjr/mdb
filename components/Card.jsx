"use client";
// components/Card.jsx

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Card({ post }) {
  return (
    <motion.div
      className="bg-slate-800 text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }} // Começa invisível e um pouco abaixo
      animate={{ opacity: 1, y: 0 }} // Fica totalmente visível e se move para a posição original
      transition={{ duration: 0.5 }} // Duração da animação
    >
      {/* Imagem do post */}
      <div
        className="h-48 bg-cover bg-center rounded-t-lg"
        style={{ backgroundImage: `url(${post.image})` }}
      />
      {/* Conteúdo do Card */}
      <div className="p-5">
        <Link href={`/posts/${post.slug}`}>
          <h3 className="text-xl font-semibold text-red-400 hover:text-red-300 transition-colors">{post.title}</h3>
        </Link>
        <p className="mt-3 text-slate-300">{post.description}</p>
      </div>
    </motion.div>
  );
}
