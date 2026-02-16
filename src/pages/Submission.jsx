import { Navbar, Footer } from "../components"
import { Upload, FileText, CheckCircle, AlertCircle, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

function Submission() {
    return (
        <div className="bg-white min-h-screen font-sans text-slate-800 flex flex-col">
            <Navbar />

            {/* Main Content - Added padding-top to separate from navbar */}
            <div className="flex-grow py-12 px-4 md:px-8 max-w-7xl mx-auto w-full space-y-12">

                {/* --- Intro Section --- */}
                <div className="bg-slate-50 border-l-4 border-blue-600 p-6 md:p-8 rounded-r-lg shadow-sm">
                    <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-4">Submission Instructions</h2>
                    <div className="space-y-4 text-slate-700 leading-relaxed text-justify text-sm md:text-base">
                        <p>
                            Prospective authors are invited to submit <span className="font-semibold text-slate-900">original, high-quality, and unpublished research papers</span> to the <span className="font-semibold text-slate-900">2026 IEEE 20th International Conference on Industrial and Information Systems (ICIIS 2026).</span>
                        </p>
                        <p>
                            By submitting a manuscript to ICIIS 2026, authors confirm that the work is not simultaneously submitted or published elsewhere (in a journal, conference, or workshop). <span className="text-red-600 font-semibold">Any paper found violating this policy will be rejected without review.</span>
                        </p>
                        <p>
                            Papers not compliant with the IEEE template including appropriate referencing or exceeding the page limit will be returned without review. Only original papers that have not been published or submitted for publication elsewhere will be considered. The paper must clearly indicate the research area, main results, and contributions.
                        </p>
                    </div>
                </div>

                {/* --- Guidelines Grid --- */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle className="w-7 h-7 text-blue-700" />
                        <h2 className="text-2xl font-bold text-[#0f172a]">Submission Guidelines</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { label: "Paper Length", desc: "Max 6 pages (text, figures, tables, refs). Up to 2 extra pages allowed with fee.", icon: <FileText className="w-5 h-5 text-blue-600" /> },
                            { label: "Format", desc: "PDF format only. Maximum file size of 10 MB.", icon: <FileText className="w-5 h-5 text-blue-600" /> },
                            { label: "Review Process", desc: "Single-blind peer-review. Reviewers are anonymous; author identities are visible.", icon: <ShieldCheck className="w-5 h-5 text-blue-600" /> },
                            { label: "Fonts & Formatting", desc: "Use scalable fonts, embed all fonts. No transparent pixels in figures.", icon: <FileText className="w-5 h-5 text-blue-600" /> },
                            { label: "Security Settings", desc: "PDF must NOT be password protected or have document security enabled.", icon: <AlertCircle className="w-5 h-5 text-red-500" /> },
                        ].map((item, index) => (
                            <div key={index} className="bg-white border border-slate-200 p-5 rounded-lg hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-blue-50 p-2 rounded-full flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{item.label}</h3>
                                        <p className="text-slate-600 text-sm mt-1 leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* <hr className="border-slate-200" /> */}

                {/* --- Conference Proceedings --- */}
                {/* <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-6 h-6 text-blue-700" />
                    <h2 className="text-2xl font-bold text-[#0f172a]">Conference Proceedings</h2>
                </div>
                <div className="text-slate-700 leading-relaxed text-sm md:text-base space-y-3">
                    <p>
                        The <span className="font-bold text-slate-900">proceedings of ICIIS 2026 will be published by IEEE</span> (<a href="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/67479" className="text-blue-600 hover:underline font-medium">Conference ID: 67479</a>).
                    </p>
                    <p>
                        All accepted and presented papers will be submitted to <span className="font-bold text-slate-900">IEEE Xplore,</span> which is indexed with world’s leading Abstracting & Indexing (A&I) databases (SCOPUS etc.) subject to meeting <span className="font-bold text-slate-900">IEEE’s quality and scope requirements.</span>
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mt-2 text-sm text-amber-900 rounded-r-lg">
                        <span className="font-bold">Important Note:</span> Papers accepted for presentation but <span className="font-bold">not presented at the conference (no-show)</span> will <span className="font-bold">not be included</span> in the final proceedings.
                    </div>
                </div>
             </div>
        </div> */}

                <hr className="border-slate-200" />

                {/* --- Manuscript Templates --- */}
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                        <FileText className="w-7 h-7 text-blue-700" />
                        <h2 className="text-2xl font-bold text-[#0f172a]">Manuscript Templates</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-slate-700 mb-4 leading-relaxed">
                                Authors must prepare their manuscripts using the <span className="font-bold text-slate-900">IEEE conference templates</span>. Please refer to the IEEE Author Guidelines for detailed instructions on formatting, structuring, headings, figures, tables, and references.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h3 className="font-semibold text-slate-900 mb-2">Download Templates:</h3>
                            <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group">
                                <span className="font-medium text-slate-700 group-hover:text-blue-700">IEEE Word Template</span>
                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                            </a>
                            <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group">
                                <span className="font-medium text-slate-700 group-hover:text-blue-700">IEEE LaTeX Template</span>
                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                            </a>
                            <a href="https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group">
                                <span className="font-medium text-slate-700 group-hover:text-blue-700">IEEE Overleaf Template</span>
                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- Submission Portal Section --- */}
                <div className="border border-blue-200 bg-blue-50/30 rounded-xl p-8 text-center relative overflow-hidden mt-8">
                    <div className="relative z-10">
                        <h2 className="text-2xl font-bold text-[#0f172a] mb-3">Submission Portal</h2>
                        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                            All manuscripts must be submitted electronically through the ICIIS 2026 submission portal.
                            Authors submitting to <span className="font-semibold text-blue-800">Special Tracks or Sessions</span> must select the relevant subject area during submission.
                        </p>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-[#0f172a] hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <Upload className="w-5 h-5" />
                            Submit Manuscript
                        </a>

                        {/* CMT Acknowledgement */}
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        <span className="font-semibold">CMT Acknowledgment:</span> The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                    </p>
                </div>



            </div>
            <Footer />
        </div>
    )
}

export default Submission