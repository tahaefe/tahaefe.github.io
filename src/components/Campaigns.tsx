/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'framer-motion';

export default function Campaigns() {
  return (
    <motion.section 
      id="campaigns"
      className="bg-brand-rose text-white py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Açılışa Özel Şok Fiyat!</h2>
        <p className="text-xl mb-8">Tüm Vücut Lazer Epilasyon (10 Seans) Sadece <span className="text-3xl font-bold">3500 TL!</span></p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Medikal Cilt Bakımı</h3>
            <p className="text-lg"><span className="font-bold">Tek Seans:</span> 1000 TL</p>
            <p className="text-lg"><span className="font-bold">6 Seans:</span> 6000 TL</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">Önemli Bilgiler</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Kullandığımız ürünler dünyaca ünlü DR.DERMİSİN ürünleridir.</li>
              <li>Lazer epilasyon cihazımız dört mevsim kullanılabilir.</li>
              <li>Merkezimiz sadece kadınlara özeldir.</li>
              <li>(DERMO DENLIFE'DEN ELDEN TAKSİT İMKANI)</li>
            </ul>
          </div>
        </div>
        <a 
          href="#contact"
          className="mt-12 inline-block bg-white text-brand-dark font-bold py-3 px-10 rounded-full hover:bg-brand-pink transition-colors duration-300"
        >
          Hemen Randevu Al
        </a>
      </div>
    </motion.section>
  );
}
