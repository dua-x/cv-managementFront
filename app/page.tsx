'use client';

import Link from 'next/link';
import { UserPlus, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-green-50 p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 mb-6">
          Bienvenue au <span className="text-blue-600">Système de CV</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Plateforme moderne pour les candidats et les RH afin de gérer et consulter les candidatures simplement.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <Link href="/submit">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer bg-white rounded-3xl shadow-lg border border-gray-200 p-8 w-80 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <UserPlus className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Soumettre un CV</h2>
              <p className="text-sm text-gray-500 text-center">
                Pour les candidats souhaitant postuler facilement à une opportunité.
              </p>
            </div>
          </motion.div>
        </Link>

        <Link href="/dashboard">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="cursor-pointer bg-white rounded-3xl shadow-lg border border-gray-200 p-8 w-80 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <Briefcase className="w-12 h-12 text-green-600 mb-4" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Tableau de bord RH</h2>
              <p className="text-sm text-gray-500 text-center">
                Espace dédié aux RH pour consulter, trier et analyser les candidatures reçues.
              </p>
            </div>
          </motion.div>
        </Link>
      </div>
    </main>
  );
}
