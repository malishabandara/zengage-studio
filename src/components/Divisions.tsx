import { TrendingUp, Film, Code2, ArrowRight } from 'lucide-react';

const divisions = [
  {
    icon: TrendingUp,
    name: 'Zengage Digital',
    tagline: 'Performance Marketing & Growth Systems',
    description: 'We help brands scale through paid social, paid search, conversion funnels, and creative experimentation — all driven by data and strategy.',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Film,
    name: 'Zengage Media',
    tagline: 'Creative Storytelling & Brand Communication',
    description: 'We create powerful brand stories through media production, design, animation, and content creation that make brands unforgettable.',
    color: 'emerald',
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Code2,
    name: 'Zengage Labs',
    tagline: 'Technology & Product Engineering',
    description: 'We design and develop websites, mobile apps, and custom software built for performance, usability, and business growth.',
    color: 'cyan',
    gradient: 'from-cyan-500 to-blue-500'
  }
];

export default function Divisions() {
  return (
    <section id="divisions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            The Zengage Ecosystem
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Zengage Global operates through three specialized divisions — each engineered to solve a different part of the growth puzzle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
              <div
                key={division.name}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${division.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl`}></div>

                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${division.gradient} mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {division.name}
                </h3>

                <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${division.gradient} bg-clip-text text-transparent`}>
                  {division.tagline}
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {division.description}
                </p>

                <a
                  href="#"
                  className={`inline-flex items-center gap-2 text-${division.color}-600 font-semibold hover:gap-4 transition-all duration-300 group/link`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up">
          <p className="text-lg text-slate-700 font-medium">
            Together, these divisions deliver{' '}
            <span className="font-bold text-slate-900">full-spectrum brand transformation</span>
            {' '}— from idea to impact.
          </p>
        </div>
      </div>
    </section>
  );
}
