import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

      <div className="absolute inset-0">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-amber-400/20 to-transparent blur-3xl" />
            <Sparkles className="text-amber-400 w-32 h-32 opacity-20" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 z-20 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-6 leading-tight">
            LUXURY
            <br />
            PERFUME
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
            Discover the essence of sophistication with our exclusive collection of luxurious fragrances
          </p>
          <button className="bg-amber-400 text-black px-8 py-4 text-sm tracking-wider hover:bg-amber-500 transition-all duration-300 font-medium">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
