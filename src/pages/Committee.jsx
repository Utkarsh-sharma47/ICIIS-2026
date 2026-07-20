import React, { useState, useEffect, useRef } from 'react';
import { User, ArrowDown, ArrowUp } from 'lucide-react'; 
import { Footer, Navbar } from "../components/index.js";

// --- DATA: Main Committee ---
const committeeData = [
  {
    title: "Patron",
    members: [
       { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1650440085_Prof.-Sri-Niwas-Singh.jpg", 
        name: "Prof. S. N. Singh", 
        dsgn: "Director, ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/prof-sri-niwas"
      },
    ]
  },
  {
    title: "General Chairs",
    members: [
      { 
        src: "/committee/kv-arya.png", 
        name: "Prof. K.V. Arya", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/prof-karm-veer-arya"
      },
      { 
        src: "/committee/shashikala.jpeg", 
        name: "Prof. Shashikala Tapaswi", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/prof-shashikala-tapaswi"
      },
      { 
        src: "/Drmd.png", 
        name: "Prof. Manish Dixit", 
        dsgn: "ChairPerson (Elected), IEEE MP Section, MITS Gwalior, India",
        link: "https://web.mitsgwalior.in/faculty-profiles-cse-2/dr-manish-dixit-2"
      },
    ]
  },
  {
    title: "General Co-Chairs",
    members:[
      { 
        src: "https://web2.ee.pdn.ac.lk/sites/default/files/inline-images/DrID.jpg", 
        name: "Dr. Isuru Dasanayake", 
        dsgn: "Univ. of Peradeniya, Sri Lanka",
        link: ""
      },
      { 
        src: "/committee/vinod-kumar.jpg", 
        name: "Dr. Vinod Kumar Jain", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-vinod-kumar-jain"
      }
    ]
  },
  {
    title: "Conference Secretary",
    members:[
      { 
        src: "/committee/rahul-kala.jpg", 
        name: "Dr. Rahul Kala", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/drrahul-kala" 
      }
    ]
  },
  {
    title: "Finance Chairs",
    members: [
      { 
        src: "/committee/rahul-kala.jpg", 
        name: "Dr. Rahul Kala", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/drrahul-kala" 
      },
      { 
        src: "/committee/wilfred.jpg", 
        name: "Dr. Wilfred Godfrey", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-w-wilfred-godfrey"
      },
      { 
        src: "https://ieeemp.org/img/Dr.%20Vijayalaxmi%20Biradar.jpeg", 
        name: "Dr. Vijayalaxmi Biradar", 
        dsgn: "IEEE MP Section",
        link: ""
      }
    ]
  },
  {
    title: "Technical Program Chairs (TPC)",
    members: [
      { 
        src: "/committee/anuraj-singh.jpg", 
        name: "Dr. Anuraj Singh", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-anuraj-singh"
      },
      { 
        src: "/committee/vinod-kumar.jpg", 
        name: "Dr. Vinod Kumar Jain", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-vinod-kumar-jain"
      },
      { 
        src: "/committee/manoj.jpg", 
        name: "Dr. Manoj Singh Parihar", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-manoj-singh-parihar"
      },
      { 
        src: "/committee/saumya.jpg", 
        name: "Dr. Saumya Bhadauria", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-saumya-bhadauria"
      },
      { 
        src: "/committee/sunil.png", 
        name: "Dr. Sunil Kumar", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-sunil-kumar"
      }
    ]
  },
  {
    title: "Publicity & Website Chairs",
    members: [
      { 
        src: "/committee/gaurav-kaushal.jpg", 
        name: "Dr. Gaurav Kaushal", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-gaurav-kaushal"
      },
      { 
        src: "/committee/mahendra.jpg", 
        name: "Dr. Mahendra Shukla", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-mahendra-kumar-shukla"
      },
      { 
        src: "/committee/vivek-kumar-singh.png", 
        name: "Dr. Vivek Kumar Singh", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/drvivek-kumar-singh"
      },
      { 
        src: "https://static.wixstatic.com/media/e26087_5e05a06b9abf4ca1955a2f14850073d6~mv2.jpg/v1/crop/x_0,y_19,w_302,h_220/fill/w_350,h_254,al_c,lg_1,q_80,enc_avif,quality_auto/rana.jpg", 
        name: "Dr. Prashant Singh Rana", 
        dsgn: "Thapar Institute of Engg & Tech,Patiala Punjab",
        link: "https://www.psrana.com"
      }
    ]
  },
  {
    title: "Publication Chairs",
    members: [
      { 
        src: "/committee/joydip-dhar.png", 
        name: "Prof. Joydip Dhar", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/prof-joydip-dhar"
      },
      { 
        src: "/committee/sunil.png", 
        name: "Dr. Sunil Kumar", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-sunil-kumar"
      },
      { 
        src: "/committee/vijaypal.jpg", 
        name: "Dr. Vijay Pal Rathore", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-vijaypal-singh-rathor"
      },
      
    ]
  },
  {
    title: "Registration Chairs",
    members: [
      { 
        src: "/committee/rohit-kumar.png", 
        name: "Dr. Rohit Kumar", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-rohit-kumar"
      },
      { 
        src: "/committee/bhanu.jpeg", 
        name: "Dr. Bhanu Chander", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/drbhanu-chander"
      }
    ]
  },
  {
    title: "International Relation Chairs",
    members: [
      { 
        src: "/committee/anjali.jpg", 
        name: "Dr. Anjali", 
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-anjali"
      },
      { 
        src: "https://illinois-state-dm-s3.imgix.net/vdevabh/pci/Vijay%20profile%20pic-1.jpg?auto=format&w=150&h=225&crop=faces&fit=crop&fm=jpeg&q=90", 
        name: "Prof. Vijay Devabhaktuni", 
        dsgn: "Illinois State University, USA",
        link: "https://illinois-state-dm-s3.imgix.net/vdevabh/pci/Vijay%20profile%20pic-1.jpg?auto=format&w=150&h=225&crop=faces&fit=crop&fm=jpeg&q=90"
      }
    ]
  }
];

// --- DATA: Track Chairs ---
const trackChairs = [
  {
    track: "Track 1: Image, Signal & Artificial Intelligence",
    members: [
      {
        src: "/committee/sunil.png",
        name: "Dr. Sunil Kumar",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-sunil-kumar"
      },
      {
        src: "https://csed.thapar.edu/files/microfaculty/21/17307845311428.jpg",
        name: "Dr. Suresh C Raikwar",
        dsgn: "TIET Patiala",
        link: "https://csed.thapar.edu/facultydetails/MTQyOA=="
      }
    ]
  },
  {
    track: "Track 2: Embedded & Intelligent Systems",
    members: [
      {
        src: "/committee/biswabandhu-jana.jpg",
        name: "Dr. Biswabandhu Jana",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-biswabandhu-jana"
      },
      {
        src: "/committee/rohit-kumar.png",
        name: "Dr. Rohit Kumar",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-rohit-kumar"
      }
    ]
  },
  {
    track: "Track 3: Communication & Information Technologies",
    members: [
      {
        src: "/committee/vivek-kumar-singh.png",
        name: "Dr. Vivek Kumar Singh",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/drvivek-kumar-singh"
      },
      {
        src: "/committee/bhanu.jpeg",
        name: "Dr. G. Bhanu Chander",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/drbhanu-chander"
      }
    ]
  },
  {
    track: "Track 4: Power, Energy & High Voltage Engineering",
    members: [
      {
        src: "/committee/neelesh-yadav.png",
        name: "Dr. Neelesh Yadav",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-neelesh-yadav"
      },
      {
        src: "https://www.mnnit.ac.in/images/newstories/2017/R_gupta.jpg",
        name: "Prof. Rajesh Gupta",
        dsgn: "MNNIT Allahabad",
        link: "https://mnnit.ac.in/profile/previewp.php?id=1643"
      },
      {
        src: "https://www.mnnit.ac.in/images/newstories/2017/ak_singh.jpg",
        name: "Prof. Asheesh K. Singh",
        dsgn: "MNNIT Allahabad, Prayagraj, India",
        link: "https://mnnit.ac.in/profile/asheesh"
      }
    ]
  },
  {
    track: "Track 5: Control, Robotics & Automation",
    members: [
      {
        src: "/committee/wilfred.jpg",
        name: "Dr. Wilfred Godfrey",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-w-wilfred-godfrey"
      },
      {
        src: "/committee/rahul-kala.jpg",
        name: "Dr. Rahul Kala",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/drrahul-kala"
      }
    ]
  },
  {
    track: "Track 6: FPGA, EDA Tools & VLSI Design",
    members: [
      {
        src: "/committee/gaurav-kaushal.jpg",
        name: "Dr. Gaurav Kaushal",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-gaurav-kaushal"
      },
      {
        src: "/committee/vijaypal.jpg",
        name: "Dr. Vijaypal Singh Rathore",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-vijaypal-singh-rathor"
      }
    ]
  },
  {
    track: "Track 7: RF, Microwave & Photonics",
    members: [
      {
        src: "/committee/pinku.jpeg",
        name: "Dr. Pinku Ranjan",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-pinku-ranjan"
      },
      {
        src: "/committee/jatoth.jpg",
        name: "Dr. Jatoth Deepak Naik",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-jatoth-deepak-naik"
      },
      {
        src: "https://www.iiitm.ac.in/images/demo/teachers/1714042630_IMG_GP.jpg",
        name: "Dr. Gaurav Pandey",
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/drgaurav"
      }
    ]
  },
  {
    track: "Track 8: Data-Driven Technologies",
    members: [
      {
        src: "/committee/anuraj-singh.jpg",
        name: "Dr. Anuraj Singh",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/dr-anuraj-singh"
      },
      {
        src: "/committee/ramanjaneyulu.jpg",
        name: "Dr. V. Ramanjaneyulu Yannam",
        dsgn: "ABV-IIITM, India",
        link: "https://iiitm.ac.in/staff/faculty/drv-ramanjaneyulu-yannam"
      }
    ]
  }
];

function Committee() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const trackChairsRef = useRef(null);

  // --- Scroll Logic for Button ---
  useEffect(() => {
    const handleScroll = () => {
      if (!trackChairsRef.current) return;
      
      const trackSectionTop = trackChairsRef.current.offsetTop;
      const currentScroll = window.scrollY + window.innerHeight / 2; // Trigger mid-screen

      if (currentScroll > trackSectionTop) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFloatingButtonClick = () => {
    if (showScrollUp) {
      // Scroll to Top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to Track Chairs
      trackChairsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 relative">
      <Navbar />
      
      {/* --- HEADER SECTION: ORGANIZING COMMITTEE --- */}
      <div className="pt-20 pb-10 bg-gradient-to-b from-[#043A75] to-[#022a55] text-white flex flex-col items-center px-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide mb-2">
            Organizing Committee
          </h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full mb-4"></div>
        </div>
      </div>

      <div className="flex-grow">
        
        {/* 1. Main Committee List */}
        <div className="inter py-12 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
            {committeeData.map((section, index) => (
            <div key={index} className="mb-16 last:mb-0">
                <div className="flex items-center justify-center mb-10">
                <h2 className="px-6 text-2xl md:text-3xl font-bold text-[#043A75] text-center relative inline-block">
                    {section.title}
                    <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-1/3 h-[3px] bg-gray-200 rounded-full"></span>
                </h2>
                </div>
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {section.members.map((member, i) => (
                    <MemberCard key={i} member={member} />
                ))}
                </div>
            </div>
            ))}
        </div>

        {/* 2. HEADER LABEL: TRACK CHAIRS (Same Style as Top) */}
        {/* Added ref here to scroll to this section */}
        <div ref={trackChairsRef} className="py-10 bg-gradient-to-b from-[#043A75] to-[#022a55] text-white flex flex-col items-center px-4 mt-8 shadow-lg">
            <div className="max-w-4xl w-full text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide mb-2">
                Track Chairs
            </h1>
            <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full mb-4"></div>
            </div>
        </div>

        {/* 3. Track Chairs List */}
        <div className="inter py-12 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
            <div className="space-y-16">
                {trackChairs.map((track, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {/* BIGGER Heading for Specific Tracks */}
                        <h3 className="text-2xl md:text-3xl font-bold text-[#043A75] mb-8 text-center">
                            {track.track}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                            {track.members.map((member, i) => (
                                <MemberCard key={i} member={member} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
      
      <Footer />

      {/* --- FLOATING ACTION BUTTON --- */}
      <button
        onClick={handleFloatingButtonClick}
        className="fixed bottom-8 right-8 z-50 bg-blue-900 text-white p-3 rounded-full shadow-lg  transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        title={showScrollUp ? "Scroll to Top" : "Go to Track Chairs"}
      >
        {showScrollUp ? (
          <ArrowUp className="w-6 h-6" />
        ) : (
          <ArrowDown className="w-6 h-6" />
        )}
      </button>

    </div>
  );
}

// Reusable Card Component
const MemberCard = ({ member }) => {
    const CardWrapper = member.link ? 'a' : 'div';
    const wrapperProps = member.link 
      ? { href: member.link, target: "_blank", rel: "noopener noreferrer" } 
      : {};

    return (
      <CardWrapper 
        {...wrapperProps}
        className={`group relative bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-[260px] md:w-64 border border-gray-100 overflow-hidden flex flex-col items-center 
          ${member.link ? 'hover:-translate-y-2 cursor-pointer' : ''}`}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10"></div>

        <div className="pt-8 pb-6 px-4 flex flex-col items-center w-full">
          <div className="relative mb-5">
            <div className="absolute -inset-1 rounded-full border-2 border-transparent group-hover:border-amber-500/30 transition-all duration-500 scale-110 group-hover:scale-100"></div>
            
            {member.src ? (
              <img 
                src={member.src} 
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover object-top shadow-md group-hover:shadow-lg transition-all duration-300 filter grayscale-[10%] group-hover:grayscale-0"
                loading="lazy"
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-slate-100 flex items-center justify-center shadow-md border-2 border-slate-200 group-hover:border-amber-500/20 transition-colors">
                 <User className="w-12 h-12 text-slate-300" />
              </div>
            )}
          </div>

          <div className="text-center w-full">
            <h3 className="font-bold text-lg text-slate-800 mb-1 group-hover:text-[#043A75] transition-colors duration-300 font-sans">
              {member.name}
            </h3>
            <p className="text-xs font-semibold tracking-wider text-amber-700 uppercase mt-1">
              {member.dsgn}
            </p>
          </div>
        </div>

        {member.link && (
          <div className="w-full py-2 bg-gray-50 text-[10px] text-center text-gray-400 font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t border-gray-100">
            View Profile
          </div>
        )}
      </CardWrapper>
    );
};

export default Committee;