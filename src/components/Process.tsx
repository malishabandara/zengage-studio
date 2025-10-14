import { Search, Palette, Hammer, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description: 'We immerse ourselves in your business, goals, and audience.',
    color: 'blue'
  },
  {
    icon: Palette,
    number: '02',
    title: 'Design',
    description: 'We craft the strategy, story, and experience your brand deserves.',
    color: 'emerald'
  },
  {
    icon: Hammer,
    number: '03',
    title: 'Build',
    description: 'We bring it to life through creative execution and technology.',
    color: 'cyan'
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Scale',
    description: 'We measure, optimize, and amplify to create sustainable growth.',
    color: 'blue'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-white mb-6">
            Our Approach — Engineered for Growth
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Each partnership follows a structured, insight-driven process
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-cyan-500 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="relative animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group h-full">
                    <div className="absolute -top-4 left-8 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg">
                      <span className="text-blue-400 font-bold text-lg">{step.number}</span>
                    </div>

                    <div className="mt-4 mb-6">
                      <div className={`inline-flex p-3 rounded-xl bg-${step.color}-500/10 border border-${step.color}-500/20 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-6 h-6 text-${step.color}-400`} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-slate-300 leading-relaxed">
                      {step.description}
                    </p>

                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-4 -translate-y-1/2 z-20">
                        <div className="w-3 h-3 border-t-2 border-r-2 border-blue-400 transform rotate-45"></div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
