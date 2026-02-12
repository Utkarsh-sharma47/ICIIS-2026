import { Navbar, Footer } from '../components/index.js'
import iiitm from "../assets/iiit_logo.png"
import { MapPin, Mail, ExternalLink, Building2, Info } from 'lucide-react';

function About() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 flex flex-col">
      <Navbar />

      {/* Main Content */}
      <div className="flex-grow py-12 px-4 md:px-8 max-w-7xl mx-auto w-full space-y-16">

        {/* --- Institute Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Logo/Image Side */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-1">
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center">
                    <img 
                        src={iiitm} 
                        alt="ABV-IIITM Logo" 
                        className="h-48 md:h-56 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300" 
                    />
                </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-8 space-y-6 order-2 lg:order-2">
                <div className="flex items-center gap-3 mb-2 border-b border-slate-100 pb-4">
                    <Building2 className="w-8 h-8 text-blue-700" />
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a]">ABV-IIITM Gwalior</h1>
                </div>
                
                <div className="text-slate-700 leading-relaxed text-justify space-y-4 text-base md:text-lg">
                    <p>
                        <span className="font-bold text-slate-900">Indian Institute of Information Technology and Management (IIITM)</span> in Gwalior, Madhya Pradesh is an autonomous institute set by the Government of India, Ministry of Education (formerly MHRD) in 1997. It is an effort towards creating professionals in areas of management and information technology from the same institute.
                    </p>
                    <p>
                        This institute was created for facilitating higher education, research, and consultancy in areas of <span className="font-semibold text-blue-800">Information Technology (IT) and Business Management.</span> Initially started as IIITM, this institute was prefixed with ABV in 2002 to honour the then Prime Minister Atal Bihari Vajpayee.
                    </p>
                    <p>
                        We aim at achieving an education standard that is comparable to the best globally. Academics at our institute are focussed on advancement of knowledge and systematic understanding of course materials and their application areas.
                    </p>
                </div>

                <div className="pt-4">
                    <a
                        href="https://www.iiitm.ac.in/index.php/en/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-all shadow-sm hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Visit Official Website <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>

        <hr className="border-slate-200" />

        {/* --- Location & Contact Section --- */}
        <div>
            <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-7 h-7 text-blue-700" />
                <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">Location & Contact</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Map Container */}
                <div className="lg:col-span-2 bg-slate-100 rounded-xl overflow-hidden border border-slate-300 shadow-inner h-[400px]">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.366393596639!2d78.17189677526778!3d26.249767877048744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c66b8c9d46e3%3A0xf64f515e01239c4!2sAtal%20Bihari%20Vajpayee%20Indian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1708536000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="IIITM Gwalior Map"
                        className="w-full h-full"
                    ></iframe>
                </div>

                {/* Contact Info Card */}
                <div className="lg:col-span-1">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8 h-full flex flex-col justify-center space-y-8 shadow-sm">
                        <div>
                            <h3 className="text-xl font-bold text-[#0f172a] mb-6 flex items-center gap-2">
                                <Info className="w-5 h-5 text-blue-600" /> Contact Details
                            </h3>
                            
                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full border border-slate-200 text-blue-700 shadow-sm">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Address</p>
                                        <p className="text-slate-800 font-medium leading-relaxed">
                                            ABV-IIITM Campus,<br />
                                            Morena Link Road,<br />
                                            Gwalior, Madhya Pradesh,<br />
                                            India - 474015
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full border border-slate-200 text-blue-700 shadow-sm">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Email Us</p>
                                        <a href="mailto:iciis2026@iiitm.ac.in" className="text-lg text-blue-700 font-bold hover:underline block break-all">
                                            iciis2026@iiitm.ac.in
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-100/50 p-4 rounded-lg border border-blue-200 text-center">
                            <p className="text-sm text-blue-800 font-medium">
                                We look forward to welcoming you to our campus.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default About