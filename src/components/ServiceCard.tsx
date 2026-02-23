/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <img src={service.imageUrl} alt={service.title} className="w-full md:w-2/5 h-64 md:h-auto object-cover" referrerPolicy="no-referrer" />
      <div className="p-8 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </motion.div>
  );
}
