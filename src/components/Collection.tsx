import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const perfumes = [
  { id: 1, name: 'ELEGANCE', description: 'Eau de Parfum' },
  { id: 2, name: 'VELOUR', description: 'Eau de Parfum' },
  { id: 3, name: 'DIVINE', description: 'Eau de Parfum' },
  { id: 4, name: 'MYSTIQUE', description: 'Eau de Parfum' },
  { id: 5, name: 'ESSENCE', description: 'Eau de Parfum' },
];

export default function Collection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (perfumes.length - 2));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (perfumes.length - 2)) % (perfumes.length - 2));
  };

  return (
    <section id="shop" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-16">
          Our Collection
        </h2>

        <div className="relative">
          <div className="flex items-center justify-center gap-6 overflow-hidden">
            <button
              onClick={prev}
              className="absolute left-0 z-10 bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 p-3 rounded-full transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-6 transition-transform duration-500">
              {perfumes.slice(currentIndex, currentIndex + 3).map((perfume) => (
                <div
                  key={perfume.id}
                  className="flex-shrink-0 w-64 bg-gradient-to-b from-zinc-900 to-black border border-amber-400/20 p-8 group hover:border-amber-400/60 transition-all duration-300"
                >
                  <div className="aspect-square bg-black/50 mb-6 flex items-center justify-center border border-amber-400/30 group-hover:border-amber-400/60 transition-all">
                    <div className="w-32 h-40 bg-gradient-to-b from-amber-400/20 to-transparent rounded-sm" />
                  </div>
                  <h3 className="text-xl font-light text-white mb-2 tracking-wider">
                    {perfume.name}
                  </h3>
                  <p className="text-sm text-gray-400">{perfume.description}</p>
                </div>
              ))}
            </div>

            <button
              onClick={next}
              className="absolute right-0 z-10 bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 p-3 rounded-full transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
