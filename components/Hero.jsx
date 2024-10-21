"use client"; // Adicione isso no topo do arquivo

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/stones_band.jpg')" }} // Certifique-se de que essa imagem esteja no diretório public
      />
      
      {/* Overlay (Camada preta com opacidade) */}
      <div className="absolute inset-0 bg-black opacity-40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Coluna 1: Texto */}
            <div className="text-white">
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                The Rolling Stones
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl mb-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Bem vindos ao blog em homenagem aos Rolling Stones, aqui você pode ler sobre seus integrantes, discos e shows históricos. Tem uma história pra contar? Entre em contato conosco!
              </motion.p>
              <motion.button
                className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg inline-flex items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Leia mais
                
              </motion.button>
            </div>

            {/* Coluna 2: Espaço vazio para visual balance */}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
