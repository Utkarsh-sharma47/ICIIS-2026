import TimeLine from "./Timeline"
import Marquee from "./Marquee"

function MainSection() {
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
            text: "Accommodation is available at ABV-IIITM Gwalior",
            url: "/attende",
        },
        { text: "Second Phase Acceptance Notification mail has been sent" },
        {
            text: "Keynote Speakers",
            url: "/speakers",
            style: "color: blue;"
        },
        {
            text: "Camera Ready Submission Guidelines",
            url: "/crs",
            style: "color: blue;"
        },
    ]

    return (
        <div className="inter primary-bg text-cl py-2 px-4 md:px-12 sm:py-4 mt-12 md:py-8 max-w-[1280px] mx-auto">
            {/* <div className="pb-6">
                <Marquee updates={updates} />
            </div> */}

            <div className="mb-6 pb-4 border-b-1">
                <div className="heading-cl text-3xl md:text-4xl tracking-normal font-bold">Welcome to ICIIS 2026</div>
                <div className="text-sm/relaxed mt-4 tracking-wide text-justify">
                    <span className="font-semibold">ICIIS 2026 covers a wide range of engineering disciplines, with added focus on sustainability and trustworthiness.</span> The conference is being organised to function as a platform for dissemination of recent high-quality research work. It covers the wide domain of Computer Science, Electronics, and Electrical Engineering and will provide a means to exchange innovative ideas and recent advances among researchers from academia and industry.
                </div>
            </div>

            <div className="flex md:space-x-8">
                <div className="md:w-[70%]">
                    <div>
                        <div className="heading-cl text-2xl md:text-3xl font-bold text-justify mb-8">Regular Tracks</div>
                        {RegularTracks.map((item, index) => (
                            <div key={index} className="mt-6 md:mt-8">
                                {/* Enlarged Heading: text-xl on mobile, text-2xl on desktop, with brand color */}
                                <div className="text-[#000000d0] tracking-wide text-xl md:text-2xl font-bold mb-2">
                                    {item.heading}
                                </div>
                                <div className="text-justify text-gray-700 tracking-wide text-sm/relaxed leading-6">
                                    {item.content}
                                </div>
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