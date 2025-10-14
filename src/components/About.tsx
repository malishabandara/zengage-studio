import { Globe2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in-left">
            <div className="inline-block px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm font-semibold">
              Who We Are
            </div>

            <h2 className="text-5xl font-bold text-slate-900 leading-tight">
              A Modern Growth Ecosystem
            </h2>

            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Zengage Global is a modern growth ecosystem combining creativity, performance, and technology under one roof.
              </p>

              <p>
                We're a collective of marketers, storytellers, designers, developers, and strategists who help businesses stand out, scale up, and stay ahead.
              </p>

              <p className="text-slate-900 font-semibold">
                Our mission is simple — to engineer growth through innovation, design, and data.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#divisions"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300 group"
              >
                <Globe2 className="w-5 h-5" />
                Discover Our Divisions
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ping-slow"></div>
                  <div className="absolute inset-8 border-4 border-cyan-500/30 rounded-full animate-ping-slow animation-delay-1000"></div>
                  <div className="absolute inset-16 border-4 border-emerald-500/30 rounded-full animate-ping-slow animation-delay-2000"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe2 className="w-24 h-24 text-blue-400" />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="text-white text-xl font-bold">Creativity × Performance × Technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
