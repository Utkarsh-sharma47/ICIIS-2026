import { Download } from "lucide-react"
import { Navbar, Footer } from "../components"
import brochure from "../assets/ReACS_2025_CFP_Brochure_Third_Phase.pdf"

function CFP() {
    const RegularTracks = [
        {
            heading: "Track 1: Vision Computing:",
            content: "Image/video processing, Image/video synthesis, Image Enhancement/Super Resolution/Restoration, Image/Video Retrieval, Remote sensing, Multispectral/Hyperspectral image Processing, Segmentation and Shape Representation, Image/Video Scene Understanding, Medical Image and Video Analysis, Stereo Vision, Document Image Analysis, Image and Video Matching."
        },
        {
            heading: "Track 2: Cybersecurity and Forensics:",
            content: "Network and cyber security, Computer security, Systems security, Security policy, model and architecture, Formal methods and verification, Security in mobile and wireless communications,  Privacy and trust, Attacks on AI models, Privacy preservation of AI, Malware forensics, Mobile app forensics, Blockchains and distributed ledger security, IoT security."
        },
        {
            heading: "Track 3: AI and Data Science:",
            content: "Computational Intelligence, Optimization Techniques, Explainable AI, Value AI, Robotic Intelligence, Data Intelligence, Multimedia Intelligent Systems, Document and Synthetic Visual Processing, Transfer Learning, Multi-task Learning, Evolutionary Algorithms, Graph Convolutional Networks, Applications in AI."
        },
        {
            heading: "Track 4: Communication Networks:",
            content: "Next-Generation Internet Architectures, Software-Defined Networking (SDN), Network Function Virtualization (NFV), Protocol Design and Optimization, Network Interoperability, Cellular Networks (5G, 6G, and Beyond), Ad Hoc, Mesh, and Sensor Networks, Vehicular Networks (VANETs, V2X), Data Dissemination in Intelligent Transportation System, Low-Power Wide-Area Networks (LPWANs), Wireless Body Area Networks (WBANs), AI/ML in Communication Networks, Multimedia Streaming Services, IoT-Fog interconnection Network, Mobile Edge Computing, Cloud Computing etc."
        },
        {
            heading: "Track 5: Cyber Physical Systems and IoT:",
            content: "Smart Cities and Infrastructure, Industrial IoT (IIoT) and Smart Manufacturing, Edge Computing and IoT, Security and Privacy in IoT and CPS, Sensors and Actuators in IoT, IoT Data Analytics and Machine Learning, Healthcare and Medical IoT (Health IoT), Energy Management and Smart Grids, CPS for autonomous robots and drones, Standards and Interoperability in IoT."
        },
        {
            heading: "Track 6: Robotics and Autonomous Systems:",
            content: "SLAM, Sensor Fusion, AI navigation, Deep/reinforcement learning in robotics, Swarm coordination, Automation in manufacturing, Healthcare, Agriculture. Autonomous Vehicles, UAVs, Underwater Robots, Human-Robot interaction and Assistive Robotics, Cybersecurity in Robotics, Multi Agent Systems, Emergent behaviour."
        },
        {
            heading: "Track 7: Computer and Software Systems:",
            content: "Computer Architecture, Distributed Systems, High-Performance Computing, Embedded Systems, Cloud Computing, Human-Computer Interaction, Software architecture and design patterns, Secure software development and Static Code Analysis, Model-driven engineering and low-code development, Open-source software development and governance, Software testing, verification, and validation."
        },
        {
            heading: "Track 8: Emerging Computing Technologies and Systems:",
            content: "Social Networks and Complex Networks, Algorithmic Game Theory and Computational Economics, Blockchain and Decentralized Systems, Post-Quantum Computing and Cryptography, Emerging Computing Paradigms, Ethics, Privacy, and Trust in Emerging Technologies, Applications of Emerging Technologies."
        },
    ]
    return (
        <>
        {/* <Header/> */}
        <Navbar/>
        <div className="inter tracking-wide text-justify py-3 px-4 md:px-12 sm:py-4 md:py-8 max-w-[1280px] mx-auto">
            <div className="pb-8">
                <div className="text-2xl font-semibold">Call for Papers</div>
                <div className="text-sm mt-4">
                    The present world is witnessing unprecedented advancements in the field of <span className="font-semibold">Computing and Systems</span>, with rapid technological progress transforming the way we interact, compute, analyze, and automate. To foster academic and industry collaboration and to showcase the latest breakthroughs, the <span className="font-semibold">2025 IEEE International Conference on Recent Advances in Computing and Systems (ReACS 2025)</span> is being organized by the <span className="font-semibold">Department of Computer Science and Engineering, Atal Bihari Vajpayee Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior, Madhya Pradesh, India.</span>
                </div>
                <div className="text-sm mt-4">
                    REACS 2025 aims to serve as a vibrant platform for the dissemination of high-quality research and innovation in the wide domain of <span className="font-semibold">Computer Science and Engineering</span>, bringing together leading researchers, academicians, industry professionals, and students from around the globe. The conference will provide a unique opportunity to present and discuss the most recent innovations, trends, challenges, and solutions in various specialized tracks.
                </div>
                <div className="text-sm mt-4">
                    The conference will emphasize active participation from <span className="font-semibold">PhD scholars, postdoctoral researchers, early-career scientists</span>, and professionals, offering a space for <span className="font-semibold">collaborative discussion, knowledge exchange, and networking.</span> The conference will also feature <span className="font-semibold">keynote talks by eminent speakers</span> from academia and industry in the respective domains.
                </div>
                <div className="mt-5">
                <a
                    href={brochure}
                    target="_blank"
                    className="flex items-center w-fit gap-2 hover:bg-blue-200 hover:text-blue-800 bg-[#043A75] text-white mt-2 px-6 py-3 rounded-full transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span className="font-semibold text-sm">
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
                                <div className="text-justify tracking-wider text-sm/relaxed mt-1">{item.content}</div>
                            </div>
                        ))}
            </div>
            <hr />
            <div className="py-8">
                <div className="pb-8">
                    <div className="text-2xl font-bold">Conference Proceedings</div>
                    <div className="mt-3 text-sm">
                        The <span className="font-bold">proceedings of ReACS 2025 will be published by IEEE</span> (<a href="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/67479" className="text-blue-600 underline">Conference ID: 67479</a>). All accepted and presented papers will be submitted to <span className="font-bold">IEEE Xplore,</span> which is indexed with world’s leading Abstracting & Indexing (A&I) databases (SCOPUS etc.) subject to meeting <span className="font-bold">IEEE’s quality and scope requirements.</span> Papers accepted for presentation but <span className="font-bold">not presented at the conference (no-show)</span> will <span className="font-bold">not be included in the final proceedings.</span>
                    </div>
                </div>
                <hr />
                <div className="pt-8">
                    <div className="text-2xl font-bold">Manuscript Templates</div>
                    <div className="mt-3 text-sm">
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
