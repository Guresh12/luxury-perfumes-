import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-white text-center mb-16">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center group">
            <div className="flex items-center justify-center w-16 h-16 bg-amber-400/10 rounded-full mx-auto mb-4 group-hover:bg-amber-400/20 transition-all">
              <Phone className="text-amber-400 w-6 h-6" />
            </div>
            <h3 className="text-white font-light mb-2">Phone</h3>
            <p className="text-gray-400">+254 XXX XXX XXX</p>
          </div>

          <div className="text-center group">
            <div className="flex items-center justify-center w-16 h-16 bg-amber-400/10 rounded-full mx-auto mb-4 group-hover:bg-amber-400/20 transition-all">
              <Mail className="text-amber-400 w-6 h-6" />
            </div>
            <h3 className="text-white font-light mb-2">Email</h3>
            <p className="text-gray-400">info@lpgnairobi.com</p>
          </div>

          <div className="text-center group">
            <div className="flex items-center justify-center w-16 h-16 bg-amber-400/10 rounded-full mx-auto mb-4 group-hover:bg-amber-400/20 transition-all">
              <MapPin className="text-amber-400 w-6 h-6" />
            </div>
            <h3 className="text-white font-light mb-2">Location</h3>
            <p className="text-gray-400">Nairobi, Kenya</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-black border border-amber-400/20 p-8">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-zinc-900 border border-amber-400/30 text-white px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-zinc-900 border border-amber-400/30 text-white px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full bg-zinc-900 border border-amber-400/30 text-white px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-400 text-black py-3 text-sm tracking-wider hover:bg-amber-500 transition-all duration-300 font-medium"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
