import { Award, Heart, Leaf } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="bg-black py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              The Art of Perfumery
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              At Luxury Perfumes Group Nairobi, we believe that fragrance is more than just a scent—it's an expression of identity, a memory, and an art form.
            </p>
            <p className="text-gray-300 leading-relaxed mb-8">
              Our master perfumers craft each fragrance with meticulous attention to detail, using only the finest ingredients sourced from around the world.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-400/10 rounded-full mx-auto mb-3">
                  <Award className="text-amber-400 w-6 h-6" />
                </div>
                <p className="text-sm text-gray-400">Premium Quality</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-400/10 rounded-full mx-auto mb-3">
                  <Heart className="text-amber-400 w-6 h-6" />
                </div>
                <p className="text-sm text-gray-400">Handcrafted</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-400/10 rounded-full mx-auto mb-3">
                  <Leaf className="text-amber-400 w-6 h-6" />
                </div>
                <p className="text-sm text-gray-400">Natural Ingredients</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-400/20 to-transparent rounded-lg flex items-center justify-center border border-amber-400/30">
              <div className="text-center">
                <div className="text-6xl text-amber-400 mb-4">✦</div>
                <p className="text-white text-xl font-light">Crafted with Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
