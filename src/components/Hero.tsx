/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Hero() {
  return (
    <div 
      className="relative bg-cover bg-center h-[500px] text-white flex items-center justify-center text-center" 
      style={{ backgroundImage: "url('https://picsum.photos/seed/luxury-spa/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 px-4">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-4">Güzelliğin Sanatla Buluştuğu Yer</h2>
        <p className="text-xl md:text-2xl font-light">Kişiye özel hizmetlerimizle içsel parlaklığınızı ortaya çıkarın.</p>
        <a 
          href="#services"
          className="mt-8 inline-block bg-white text-gray-800 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300"
        >
          Hizmetlerimizi Keşfedin
        </a>
      </div>
    </div>
  );
}
