import TimeLine from "./Timeline"
import Marquee from "./Marquee"

function MainSection() {
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
    const updates = [
        // { text: "Third Phase Paper Submission Starts on 02 August 2025" },
        // { text: "Extended Second Phase Paper Submission Deadline 20 July 2025" },
        {
            text: "Conference Successfully Concluded",
            style: "color: blue;",
        },
        {
            text: "Registration instructions and details are updated",
            url: "/registration",
        },
        {
            text: "Program schedule is live now",
            url: "/schedule",
        },
        {
            text: "Accomodation is available at ABV-IIITM Gwalior",
            url: "/attende",
        },
        {text:"Second Phase Acceptance Notification mail has been sent"},
        {
            text: "Keynote Speakers",
            url: "/speakers",
            style: "color: blue;"
        },
        // {text:"First Phase Paper Submission Link", 
        // url: "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FReACS2025%2F",
        // style: ""},
        // {text:"Final Extended Paper Submission Deadline 06 June 2025"},
        {
            text: "Camera Ready Submission Guidelines",
            url: "/crs",
            style: "color: blue;"
        },
        // { text: "Second Phase Paper Submission Starts on 07 June 2025" },
        // {text:"Call for Papers Brochure", url: "https://reacs2025.s3.ap-south-1.amazonaws.com/CFP_Brochure.pdf"}
    ]

    return (
        <div className="inter primary-bg text-cl py-2 px-4 md:px-12 sm:py-4 mt-12 md:py-8 max-w-[1280px] mx-auto">
            <div className="pb-6">
                <Marquee updates={updates} />
            </div>

            <div className="mb-6 pb-4 border-b-1">
                <div className="heading-cl text-3xl md:text-4xl tracking-normal font-bold">Welcome to ReACS 2026</div>
                <div className="text-sm/relaxed mt-4 tracking-wide text-justify"><span className="font-semibold">Welcome to the 2026 IEEE International Conference on Recent Advances in Computing and Systems (ReACS2026) is being organised by the Department of CSE, ABV-IIITM</span>, to functionalize it as a platform for dissemination of recent high-quality research work in the domain of Computing and Systems. This conference (<a href="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/67479" className="text-blue-600 underline font-semibold">IEEE Conference ID: 67479</a>) covers the wide domain of Computer Science and Engineering and will provide a means to exchange innovative ideas and recent advances among researchers from academia and industry.</div>
            </div>
            <div className="flex md:space-x-8">
                <div className="md:w-[70%]">
                    <div>
                        <div className="heading-cl text-2xl md:text-3xl font-bold text-justify mb-6">Regular Tracks</div>
                        {RegularTracks.map((item, index) => (
                            <div key={index} className="mt-4 md:mt-5">
                                <div className="text-black tracking-wider text-md md:text-lg font-bold">{item.heading}</div>
                                <div className="text-justify tracking-wider text-sm/relaxed mt-1">{item.content}</div>
                            </div>
                        ))}
                        <div className="md:hidden my-5 border-t-1 pt-6">
                            <div className="text-2xl md:text-3xl heading-cl font-bold mb-3">Important Dates</div>
                            <TimeLine />
                        </div>
                    </div>
                </div>
                <div className="max-md:hidden w-[30%]">
                    <div className="text-2xl md:text-3xl heading-cl font-bold mb-3">Important Dates</div>
                    <TimeLine />
                </div>
            </div>

        </div>
    )
}

export default MainSection
