/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';

const galleryImages = [
  { seed: 'salon-interior', alt: 'Salonun şık iç mekanı' },
  { seed: 'manicure-station', alt: 'Profesyonel manikür istasyonu' },
  { seed: 'pedicure-spa', alt: 'Rahatlatıcı pedikür koltuğu' },
  { seed: 'facial-room', alt: 'Huzurlu cilt bakım odası' },
  { seed: 'nail-design', alt: 'Yaratıcı tırnak sanatı örneği' },
  { seed: 'makeup-artistry', alt: 'Profesyonel makyaj uygulaması' },
];

export default function Gallery() {
  return (
    <motion.section 
      id="gallery"
      className="py-20 bg-brand-cream"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">Galerimiz</h2>
            <p className="text-gray-600">Salonumuzun atmosferini ve çalışmalarımızdan bazı örnekleri keşfedin.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={`https://picsum.photos/seed/${image.seed}/600/600`} 
                alt={image.alt} 
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
