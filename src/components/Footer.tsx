import { Globe2, Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Globe2 className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">Zengage Global</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Engineering growth through innovation, design, and data. Creativity, performance, and technology united under one roof.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5 text-slate-300" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Divisions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Zengage Digital</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Zengage Media</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Zengage Labs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Zengage Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
