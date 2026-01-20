import { Link } from "react-router-dom";
import { MapPin, Mail, ExternalLink, ChevronRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 font-sans border-t-[6px] border-[#2563eb]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        {/* Top Section: Conference Header */}
        <div className="flex flex-col items-center justify-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
            ICIIS <span className="text-[#3b82f6]">2026</span>
          </h2>
          <div className="h-1 w-20 bg-[#3b82f6] rounded-full"></div>
          <p className="text-center text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            International Conference on Industrial and Information Systems
          </p>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-slate-800 pb-12">
          
          {/* Column 1: About (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#3b82f6] rounded-sm"></span>
              About The Conference
            </h3>
            <p className="text-slate-400 text-sm leading-7 text-justify pr-0 lg:pr-6">
              The 2026 IEEE International Conference on Industrial and Information Systems brings together leading academic scientists, researchers, and scholars to exchange and share their experiences and research results on all aspects of Industrial and Information Systems.
            </p>
          </div>

          {/* Column 2: Quick Links (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">
              Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Call for Papers", path: "/cfp" },
                { name: "Paper Submission", path: "/submission" },
                { name: "Registration", path: "/registration" },
                { name: "Committee", path: "/committee" }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-slate-400 hover:text-[#60a5fa] transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore (Spans 2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="group flex items-center text-slate-400 hover:text-[#60a5fa] transition-colors duration-200">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center text-slate-400 hover:text-[#60a5fa] transition-colors duration-200"
                >
                  <ExternalLink className="w-3 h-3 mr-2 opacity-50 group-hover:scale-110 transition-all" />
                  Locate on Map
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Venue (Spans 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#3b82f6] rounded-sm"></span>
              Contact & Venue
            </h3>
            
            <div className="bg-[#1e293b] rounded-xl p-5 border border-slate-700/50 space-y-4 shadow-lg">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-[#3b82f6]/10 p-2.5 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#60a5fa]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold uppercase mb-1">Venue</h4>
                  <p className="text-slate-400 text-sm leading-snug">
                    ABV-IIITM Campus, Morena Link Road,<br/>Gwalior, Madhya Pradesh, India
                  </p>
                </div>
              </div>

              {/* Separator */}
              <div className="h-px w-full bg-slate-700/50"></div>

              {/* Email */}
              <div className="flex items-start gap-4">
                 <div className="bg-[#3b82f6]/10 p-2.5 rounded-lg flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#60a5fa]" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold uppercase mb-1">Email Us</h4>
                  <a href="mailto:contact@iiitm.ac.in" className="text-slate-400 text-sm hover:text-white transition-colors block break-all">
                    *****@iiitm.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p className="text-center md:text-left">
            &copy; 2026 <span className="text-slate-300">ICIIS Conference</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-[#60a5fa] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[#60a5fa] cursor-pointer transition-colors">Terms & Conditions</span>
            <span className="hover:text-[#60a5fa] cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;