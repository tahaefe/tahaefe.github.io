/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
  );

export default function Footer() {
  return (
    <footer className="bg-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Dermo Denlife</h2>
            <p className="text-gray-600">Estetik & Güzellik Salonu</p>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-3">
             <a href="tel:+905320131207" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <Phone size={18} className="mr-2" />
                <span>0532 013 12 07</span>
            </a>
            <a href="https://wa.me/905320131207" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <WhatsAppIcon />
                <span>WhatsApp'tan Ulaşın</span>
            </a>
            <div className="text-gray-600">
                <p className="font-semibold">Adres:</p>
                <p>Tabakhane Mah. Mehmet Akif Ersoy Cad. No:25/B Bafra / Samsun</p>
                <p>(Alparslan Türkeş Parkı'nın karşı sokağı -19 Mayıs Parkı'nın yanında)</p>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 border-t border-gray-200 mt-8 pt-6">
          <p>&copy; {new Date().getFullYear()} Dermo Denlife Estetik Güzellik Salonu. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

