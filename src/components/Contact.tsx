/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="bg-white py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Bize Ulaşın</h2>
            <p className="text-gray-600 mb-12">Randevu almak, bilgi sormak veya önerileriniz için bizimle iletişime geçebilirsiniz.</p>
        </div>
        <div className="max-w-lg mx-auto">
          <form className="grid grid-cols-1 gap-6">
            <input type="text" placeholder="Adınız Soyadınız" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
            <input type="email" placeholder="E-posta Adresiniz" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500" />
            <textarea placeholder="Mesajınız" rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"></textarea>
            <button type="submit" className="bg-brand-rose text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300">Mesajı Gönder</button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
