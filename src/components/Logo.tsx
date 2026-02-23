/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function Logo() {
  return (
    <div className="flex items-center space-x-3">
        <svg width="48" height="48" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M45,5 C45,25 25,45 5,45 C25,45 45,65 45,85 C45,65 65,45 85,45 C65,45 45,25 45,5 Z" fill="#f7d9d9" />
            <path d="M55,5 C55,25 75,45 95,45 C75,45 55,65 55,85 C55,65 35,45 15,45 C35,45 55,25 55,5 Z" fill="#c8a2c8" opacity="0.7" />
        </svg>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dermo Denlife</h1>
          <p className="text-gray-500 text-sm">Estetik & Güzellik</p>
        </div>
    </div>
  );
}
