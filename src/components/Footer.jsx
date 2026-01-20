import { Link } from "react-router-dom";
import { MapPin, Mail, ExternalLink, ChevronRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#0b2144] text-slate-300 font-sans border-t-4 border-blue-600">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Conference Title Row */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wider mb-2 drop-shadow-md">
            ICIIS 2026
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-sm">
          
          {/* Column 1: Conference Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-b-2 border-blue-500/50 pb-2 inline-block">
              About ICIIS
            </h3>
            <p className="text-slate-300 leading-relaxed hover:text-white transition-colors duration-300">
              The 2026 IEEE International Conference on Industrial and Information Systems brings together leading academic scientists, researchers, and scholars.
            </p>
            <div className="bg-[#132c56] p-4 rounded-lg border border-blue-900/50 mt-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <span className="block text-white font-bold text-xs uppercase mb-1">Venue</span>
                  <span className="text-slate-300 leading-tight block">ABV-IIITM Gwalior,<br/>Madhya Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-b-2 border-blue-500/50 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Call for Papers", path: "/cfp" },
                { name: "Paper Submission", path: "/submission" },
                { name: "Registration Details", path: "/registration" },
                { name: "Committee", path: "/committee" }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-slate-300 hover:text-white transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4 text-blue-500 mr-2 group-hover:translate-x-1 transition-transform" />
                    <span className="group-hover:underline decoration-blue-500 decoration-1 underline-offset-4">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-b-2 border-blue-500/50 pb-2 inline-block">
              Explore
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300">
                  <ChevronRight className="w-4 h-4 text-blue-500 mr-2 group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:underline decoration-blue-500 decoration-1 underline-offset-4">About Us</span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center text-slate-300 hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 text-blue-500 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:underline decoration-blue-500 decoration-1 underline-offset-4">Locate on Map</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-b-2 border-blue-500/50 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-blue-900/30 p-2 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-blue-200 text-xs font-bold uppercase mb-0.5">Address</span>
                  <p className="text-slate-300 leading-snug">ABV-IIITM Campus,<br/>Morena Link Road, Gwalior</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <div className="bg-blue-900/30 p-2 rounded-full group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <span className="block text-blue-200 text-xs font-bold uppercase mb-0.5">Email</span>
                  <a href="mailto:contact@iiitm.ac.in" className="text-slate-300 hover:text-white hover:underline decoration-blue-400 underline-offset-2 transition-all">
                    *****@iiitm.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#051329] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © 2026 <span className="text-blue-400 font-semibold">ICIIS</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500 font-medium">
            <span className="hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-blue-400 cursor-pointer transition-colors">Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;