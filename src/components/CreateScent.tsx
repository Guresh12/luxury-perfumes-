import { Droplet, Sparkles, Package, Truck } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Droplet,
    title: 'Choose your base notes',
    description: 'Select from our premium collection of base fragrances',
  },
  {
    number: 2,
    icon: Sparkles,
    title: 'Add your top notes',
    description: 'Personalize with unique top note combinations',
  },
  {
    number: 3,
    icon: Package,
    title: 'Personalize your bottle',
    description: 'Customize your bottle with engraving and packaging',
  },
  {
    number: 4,
    icon: Truck,
    title: 'Pick up or have it delivered',
    description: 'Choose convenient pickup or doorstep delivery',
  },
];

export default function CreateScent() {
  return (
    <section id="create" className="bg-zinc-950 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            Create Your Own Scent
          </h2>
          <p className="text-gray-400 text-lg">
            Craft a signature fragrance that's uniquely yours
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-gradient-to-b from-black to-zinc-900 border border-amber-400/20 p-8 hover:border-amber-400/60 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-amber-400/10 rounded-full mb-6 group-hover:bg-amber-400/20 transition-all">
                  <Icon className="text-amber-400 w-8 h-8" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-light text-amber-400">
                    {step.number}
                  </span>
                  <div className="h-px flex-1 bg-amber-400/30" />
                </div>
                <h3 className="text-xl font-light text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button className="bg-amber-400 text-black px-10 py-4 text-sm tracking-wider hover:bg-amber-500 transition-all duration-300 font-medium">
            START YOUR CREATION
          </button>
        </div>
      </div>
    </section>
  );
}
