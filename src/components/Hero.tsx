import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            Create. Scale. Transform.
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
            Creativity <span className="text-blue-400">×</span> Performance <span className="text-blue-400">×</span> Technology
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We unite storytelling, strategy, and engineering to help businesses grow in a connected world.
            <span className="block mt-4">
              From crafting unforgettable brands to scaling them through performance and building digital ecosystems that last — we make growth inevitable.
            </span>
          </p>

          <div className="pt-8">
            <button className="group relative px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Book a Discovery Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full p-1">
            <div className="w-1.5 h-3 bg-slate-400 rounded-full mx-auto animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
