import { Download } from "lucide-react"
import { Navbar, Footer } from "../components"
import brochure from "../assets/ReACS_2025_CFP_Brochure_Third_Phase.pdf"

function CFP() {
    const RegularTracks = [
        
        
    ]
    return (
        <>
        {/* <Header/> */}
        <Navbar/>
        <div className="inter tracking-wide text-justify py-3 px-4 md:px-12 sm:py-4 md:py-8 max-w-[1280px] mx-auto">
            <div className="pb-8">
                <div className="text-2xl font-semibold">Call for Papers</div>
                <div className="text-base mt-4">
                    The present world is witnessing unprecedented advancements in the field of <span className="font-semibold">Computing and Systems</span>, with rapid technological progress transforming the way we interact, compute, analyze, and automate. To foster academic and industry collaboration and to showcase the latest breakthroughs, the <span className="font-semibold">2026 IEEE International Conference on Industrial and Information Systems</span> is being organized by the <span className="font-semibold">Department of Computer Science and Engineering, Atal Bihari Vajpayee Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior, Madhya Pradesh, India.</span>
                </div>
                <div className="text-base mt-4">
                    REACS 2026 aims to serve as a vibrant platform for the dissemination of high-quality research and innovation in the wide domain of <span className="font-semibold">Computer Science and Engineering</span>, bringing together leading researchers, academicians, industry professionals, and students from around the globe. The conference will provide a unique opportunity to present and discuss Conference on Industrial and Information Systems.
                </div>
                <div className="text-base mt-4">
                    The conference will emphasize active participation from <span className="font-semibold">PhD scholars, postdoctoral researchers, early-career scientists</span>, and professionals, offering a space for <span className="font-semibold">collaborative discussion, knowledge exchange, and networking.</span> The conference will also feature <span className="font-semibold">keynote talks by eminent speakers</span> from academia and industry in the respective domains.
                </div>
                <div className="mt-5">
                <a
                    href={brochure}
                    target="_blank"
                    className="flex items-center w-fit gap-2 hover:bg-blue-200 hover:text-blue-800 bg-[#043A75] text-white mt-2 px-6 py-3 rounded-full transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span className="font-semibold text-base">
                      Download
                    </span>
                  </a>
                </div>
            </div>
            <hr />
            <div className="py-8">
                <div className="text-2xl font-semibold">Topics of conference</div>
                {RegularTracks.map((item, index) => (
                            <div key={index} className="mt-4 md:mt-5">
                                <div className="text-black tracking-wider text-md md:text-lg font-bold">{item.heading}</div>
                                <div className="text-justify tracking-wider text-base/relaxed mt-1">{item.content}</div>
                            </div>
                        ))}
            </div>
            <hr />
            <div className="py-8">
                <div className="pb-8">
                    <div className="text-2xl font-bold">Conference Proceedings</div>
                    <div className="mt-3 text-base">
                        The <span className="font-bold">proceedings of ReACS 2026 will be published by IEEE</span> (<a href="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/67479" className="text-blue-600 underline">Conference ID: 67479</a>). All accepted and presented papers will be submitted to <span className="font-bold">IEEE Xplore,</span> which is indexed with world’s leading Abstracting & Indexing (A&I) databases (SCOPUS etc.) subject to meeting <span className="font-bold">IEEE’s quality and scope requirements.</span> Papers accepted for presentation but <span className="font-bold">not presented at the conference (no-show)</span> will <span className="font-bold">not be included in the final proceedings.</span>
                    </div>
                </div>
                <hr />
                <div className="pt-8">
                    <div className="text-2xl font-bold">Manuscript Templates</div>
                    <div className="mt-3 text-base">
                        Authors must prepare their manuscripts using the <span className="font-bold">IEEE conference templates.</span> Templates for <span className="font-bold">MS Word, LaTeX, and Overleaf</span> are available at the following links:
                        <ul className="my-3 list-disc ml-6">
                            <li><a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-600 underline">IEEE Word Template</a></li>
                            <li><a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-600 underline">IEEE LaTeX Template</a></li>
                            <li><a href="https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn" className="text-blue-600 underline">IEEE Overleaf Template</a></li>
                        </ul>
                        Please refer to the <span className="font-bold">IEEE Author Guidelines</span> for detailed instructions on formatting, structuring, headings, figures, tables, and references.
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default CFP
