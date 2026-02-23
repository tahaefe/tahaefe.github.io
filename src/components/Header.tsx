/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#"><Logo /></a>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Ana Sayfa</a>
          <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Hizmetler</a>
          <a href="#campaigns" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Kampanyalar</a>
          <a href="#gallery" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Galeri</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">İletişim</a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white pb-4 px-4">
          <ul className="flex flex-col space-y-4">
            <li><a href="#" onClick={() => setIsOpen(false)} className="block text-center text-gray-600 hover:text-gray-900 font-medium transition-colors py-2">Ana Sayfa</a></li>
            <li><a href="#services" onClick={() => setIsOpen(false)} className="block text-center text-gray-600 hover:text-gray-900 font-medium transition-colors py-2">Hizmetler</a></li>
            <li><a href="#campaigns" onClick={() => setIsOpen(false)} className="block text-center text-gray-600 hover:text-gray-900 font-medium transition-colors py-2">Kampanyalar</a></li>
            <li><a href="#gallery" onClick={() => setIsOpen(false)} className="block text-center text-gray-600 hover:text-gray-900 font-medium transition-colors py-2">Galeri</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block text-center text-gray-600 hover:text-gray-900 font-medium transition-colors py-2">İletişim</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
