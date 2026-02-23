/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';
import { Service } from '../types';
import ServiceCard from './ServiceCard';

const services: Service[] = [
  {
    title: 'Protez Tırnak & Kalıcı Oje',
    description: 'Tırnaklarınıza sanatsal bir dokunuş! Uzman ekibimizle en trend renkler ve dayanıklı materyallerle hayalinizdeki tırnaklara kavuşun.',
    imageUrl: 'https://picsum.photos/seed/nail-art/600/400',
  },
  {
    title: 'Medikal Cilt Bakımı',
    description: 'Cildinizin ihtiyaçlarına özel olarak hazırlanan medikal bakım kürlerimizle, daha sağlıklı, parlak ve pürüzsüz bir cilde sahip olun.',
    imageUrl: 'https://picsum.photos/seed/skin-treatment/600/400',
  },
  {
    title: '4 Mevsim Lazer Epilasyon',
    description: 'En son teknoloji cihazlarımızla, istenmeyen tüylerle vedalaşın. Her cilt tipine uygun, dört mevsim uygulanabilen konforlu epilasyon deneyimi.',
    imageUrl: 'https://picsum.photos/seed/laser-epilation/600/400',
  },
  {
    title: 'Kalıcı Makyaj',
    description: 'Zaman kazandıran ve doğal güzelliğinizi ön plana çıkaran kalıcı makyaj uygulamalarımızla her an bakımlı ve etkileyici görünün.',
    imageUrl: 'https://picsum.photos/seed/permanent-makeup/600/400',
  },
];

export default function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Hizmetlerimiz</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <motion.div key={service.title}>
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
