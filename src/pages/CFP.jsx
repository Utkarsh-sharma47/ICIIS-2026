import { Download, Calendar, Layers, FileText, ExternalLink, BookOpen } from "lucide-react"
import { Navbar, Footer } from "../components"
import brochure from "../assets/CFP_ICIIS_2026_submission.pdf" // Ensure this path is correct
import TimeLine from "../components/Timeline"

function CFP() {
    const RegularTracks = [
        {
            heading: "Track 1: Image, Signal & Artificial Intelligence",
            content: "This track explores advanced paradigms in Image and Signal Processing alongside the latest breakthroughs in Artificial Intelligence and Machine Learning. It specifically highlights critical areas such as Trustworthy & Explainable AI and Pattern Recognition, aiming to bridge theoretical models with practical, real-world applications in computer vision and signal analysis."
        },
        {
            heading: "Track 2: Embedded & Intelligent Systems",
            content: "Focusing on the intersection of hardware and intelligence, this track covers Embedded System Design and the emerging challenges in Ethical IoT & Smart Devices. It also addresses Data Engineering methodologies and the development of robust Intelligent Systems and Expert Systems, emphasizing efficient computing and intelligent decision-making frameworks."
        },
        {
            heading: "Track 3: Communication & Information Technologies",
            content: "This track offers a comprehensive look at the future of connectivity, featuring research on Wireless Communication Technologies and Secure & Trustworthy Communications. It delves into the convergence of IoT, Networks & Cybersecurity, with a special emphasis on designing Green and Sustainable Communication Systems for the next generation of networks."
        },
        {
            heading: "Track 4: Power, Energy & High Voltage Engineering",
            content: "Addressing global energy challenges, this track presents innovations in Smart Grid Technologies and Renewable Energy Systems. Discussions will center on advanced Power Electronics and strategies for Energy-Efficient High Voltage Engineering, aiming to ensure reliable, sustainable, and resilient power infrastructure."
        },
        {
            heading: "Track 5: Control, Robotics & Automation",
            content: "Highlighting the evolution of automation, this track spans the cutting edge of Robotics and Autonomous Systems and Human-Centric Control Systems. It explores how these technologies are driving Automation for Sustainable Industries, fostering greater efficiency, safety, and adaptability in modern industrial environments."
        },
        {
            heading: "Track 6: FPGA, EDA Tools & VLSI Design",
            content: "Dedicated to the backbone of computing hardware, this track features research on FPGA-based System Design and Secure Hardware architectures. It examines the latest advancements in VLSI and EDA tools, alongside techniques for creating Low-power Hardware Architectures essential for energy-constrained applications."
        },
        {
            heading: "Track 7: RF, Microwave & Photonics",
            content: "Antenna and Radar Systems, Microwave and Terahertz Technologies for Imaging, Millimetre-Wave and Terahertz Circuits, Photonic Integrated Circuits & Plasmonic."
        },
        {
            heading: "Track 8: Data-Driven Technologies",
            content: "Data Engineering and Analytics, Data mining, Data optimization and decision making, Behavioral and Sentiment Analysis."
        }
    ]

    return (
        <div className="bg-white min-h-screen font-sans text-slate-800 flex flex-col">
            <Navbar />

            {/* Main Content - Added padding-top to separate from navbar */}
            <div className="flex-grow py-12 px-4 md:px-8 max-w-7xl mx-auto w-full space-y-12">

                {/* --- Timeline Section --- */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                        <Calendar className="w-6 h-6 text-blue-700" />
                        <h2 className="text-2xl font-bold text-[#0f172a]">Important Dates</h2>
                    </div>
                    <TimeLine />
                </div>

                {/* --- About / Intro Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6 text-justify text-slate-700 leading-relaxed text-sm md:text-base">
                        <p>
                            The present world is witnessing unprecedented advancements in the field of <span className="font-bold text-slate-900">Computing and Systems</span>, with rapid technological progress transforming the way we interact, compute, analyze, and automate. To foster academic and industry collaboration and to showcase the latest breakthroughs, the <span className="font-bold text-slate-900">2026 IEEE International Conference on Industrial and Information Systems</span> is being organized by the <span className="font-bold text-blue-800">ABV-IIITM Gwalior, India.</span>
                        </p>
                        <p>
                            ICIIS 2026 aims to serve as a vibrant platform for the dissemination of high-quality research and innovation in the wide domain of <span className="font-bold text-slate-900">All Engineering Disciplines</span>. The conference will emphasize active participation from PhD scholars, postdoctoral researchers, early-career scientists, and professionals, offering a space for collaborative discussion, knowledge exchange, and networking.
                        </p>
                    </div>

                    {/* Download Brochure Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-blue-900 text-white rounded-xl p-6 shadow-lg flex flex-col items-center text-center justify-center space-y-4 relative overflow-hidden group h-full">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                            <FileText className="w-12 h-12 text-blue-300" />
                            <div>
                                <h3 className="text-xl font-bold">Official Brochure</h3>
                                <p className="text-blue-200 text-sm mt-1">Download the complete Call for Papers document.</p>
                            </div>
                            <a
                                href={brochure}
                                download="ICIIS_2026_CFP.pdf" // Force download attribute
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-bold px-6 py-3 rounded-full transition-all shadow-md mt-2 cursor-pointer z-10"
                            >
                                <Download className="w-4 h-4" /> Download PDF
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-slate-200" />

                {/* --- Tracks Section --- */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Layers className="w-7 h-7 text-blue-700" />
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a]">Conference Tracks</h2>
                    </div>

                    <p className="text-lg text-slate-600 mb-8 max-w-3xl">
                        ICIIS 2026 welcomes submission of papers related to the conference theme including, but not limited to, the following tracks:
                    </p>

                    <div className="grid grid-cols-1 gap-6">
                        {RegularTracks.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 relative overflow-hidden"
                            >
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 group-hover:bg-blue-500 transition-colors"></div>
                                <h3 className="text-xl font-bold text-[#0f172a] mb-2 group-hover:text-blue-800 transition-colors pl-2">
                                    {item.heading}
                                </h3>
                                <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify pl-2">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="border-slate-200" />
                <div className="">
                    <div className="text-2xl font-bold">Conference Proceedings</div>
                    <div className="mt-3 text-sm">
                        The <span className="font-bold">proceedings of ICIIS 2026 will be published by IEEE</span> (<a href="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/71472" className="text-blue-600 underline">Conference ID: 71472</a>). All accepted and presented papers will be submitted to <span className="font-bold">IEEE Xplore,</span> which is indexed with world’s leading Abstracting & Indexing (A&I) databases (SCOPUS etc.) subject to meeting <span className="font-bold">IEEE’s quality and scope requirements.</span> Papers accepted for presentation but <span className="font-bold">not presented at the conference (no-show)</span> will <span className="font-bold">not be included in the final proceedings.</span>
                    </div>
                </div>
                

                <hr className="border-slate-200" />

                {/* --- Manuscript Templates Section --- */}
                <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 md:p-10">
                    <div className="flex items-center gap-3 mb-6">
                        <BookOpen className="w-7 h-7 text-blue-700" />
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

            </div>
            <Footer />
        </div>
    )
}

export default CFP