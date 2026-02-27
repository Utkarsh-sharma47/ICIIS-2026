import { Footer, Navbar } from "../components/index.js"
import { Calendar, AlertCircle, Mail, ArrowRight } from 'lucide-react';

function Registration() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800 flex flex-col">
      <Navbar />
      
      {/* Main Content Container - Added top padding for spacing from Navbar */}
      <div className="flex-grow py-12 px-4 md:px-8 max-w-6xl mx-auto space-y-12 w-full">
        
        {/* Section 1: Important Dates - Clean List */}
        <div className="border-b border-slate-200 pb-10">
            <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-blue-700" />
                <h2 className="text-2xl font-bold text-[#0f172a]">Important Dates</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Paper Submission Open", date: "01 March, 2026" },
                    { label: "Submission Deadline", date: "30 April, 2026" },
                    { label: "Acceptance Notification", date: "30 June, 2026" },
                    { label: "Camera Ready Submission", date: "15 July, 2026" }
                ].map((item, index) => (
                    <div key={index} className="border-l-2 border-blue-100 pl-4 py-1 hover:border-blue-500 transition-colors duration-300">
                        <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">{item.label}</p>
                        <p className="text-lg font-bold text-blue-900 mt-1">{item.date}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Section 2: Guidelines & Instructions - Two Column Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-200 pb-10">
            
            {/* Registration Guidelines */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0f172a] mb-4">Registration Guidelines</h3>
                <ul className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                    <li className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></span>
                        <span>Every accepted paper must have at least one author registration.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></span>
                        <span>Papers exceeding 6 pages are subject to an extra page charge of INR 1180 (inclusive of 18% GST) per additional page, up to a maximum of 8 pages.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></span>
                        <span>Authors must fully comply with requirements (Registration, Camera Ready Format, Presentation) to be published in proceedings.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></span>
                        <span>Attendees without a paper may register at Listener rates.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></span>
                        <span>Conference registration includes the Banquet Dinner.</span>
                    </li>
                </ul>
            </div>

            {/* Submission Instructions */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#0f172a] mb-4">Submission Instructions</h3>
                <ul className="space-y-4 text-slate-700 leading-relaxed text-sm md:text-base">
                    <li className="flex gap-3 items-start">
                        <span className="text-blue-600 font-bold text-xs mt-0.5 border border-blue-200 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0">1</span>
                        <span>Please enter your Paper ID in the remarks column while making the payment.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-blue-600 font-bold text-xs mt-0.5 border border-blue-200 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0">2</span>
                        <span>After payment, kindly take a printout or screenshot of your registration receipt.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-blue-600 font-bold text-xs mt-0.5 border border-blue-200 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0">3</span>
                        <span>Once fee is paid, fill out the registration form below and upload your receipt.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-blue-600 font-bold text-xs mt-0.5 border border-blue-200 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0">4</span>
                        <span>First-phase accepted papers must register before the deadline to be included in proceedings.</span>
                    </li>
                    <li className="flex gap-3 items-start">
                        <span className="text-blue-600 font-bold text-xs mt-0.5 border border-blue-200 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0">5</span>
                        <span>The author's information (Addition/Deletion of Authors) can not be altered after the acceptance of the paper.</span>
                    </li>

                </ul>
            </div>
        </div>

        {/* Section 3: Terms - Compact & Clean */}
        <div className="bg-slate-50 p-6 md:p-8 rounded-lg border border-slate-200">
            <h3 className="text-lg font-bold text-[#0f172a] mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-slate-500" />
                Terms & Conditions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-slate-600 leading-relaxed">
                <p>• Papers exceeding 6 pages are subject to extra charges.</p>
                <p>• Registration fees are <span className="font-semibold text-slate-900">non-refundable</span>.</p>
                <p>• At least one author must register and present the paper.</p>
                <p>• Fee includes: Kit, Sessions, Lunch/Snacks, Social Events.</p>
                <p>• Student authors must upload valid proof of student status.</p>
                <p>• Accommodation is <strong>not included</strong>.</p>
                <p>• IEEE members must upload valid membership proof.</p>
                <p>• The registration fee includes 18% GST.</p>
            </div>
        </div>

        {/* Action Area - Professional Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 pb-8">
            
            {/* Contact Info */}
            <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="bg-blue-50 p-2 rounded-full">
                    <Mail className="w-4 h-4 text-blue-700" />
                </div>
                <div>
                    <span className="block font-semibold text-slate-900">Registration Queries?</span>
                    <a href="mailto:iciis2026@iiitm.ac.in" className="hover:text-blue-600 transition-colors">
                        iciis2026@iiitm.ac.in
                    </a>
                </div>
            </div>

            {/* Registration Button */}
            <a
                href="#"
                className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded transition-all duration-300 shadow-sm hover:shadow-md"
            >
                Proceed to Registration Form <ArrowRight className="w-4 h-4" />
            </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Registration;