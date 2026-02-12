import React from 'react';
import { User } from 'lucide-react'; 
import { Footer, Navbar } from "../components/index.js";

const committeeData = [
  {
    title: "General Chairs",
    members: [
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1760430650_Photo-KVA-side.jpg", 
        name: "Prof. K.V. Arya", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.KVArya"
      },
       { 
        src: "/manish_mits.png", 
        name: "DR. MANISH DIXIT", 
        dsgn: "Madhav Institute of Technology and Science, Gwalior, India",
        link: "https://web.mitsgwalior.in/faculty-profiles-cse-2/dr-manish-dixit-2"
      },
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1692009722_WhatsApp%20Image%202023-08-14%20at%2015.46.28.jpeg", 
        name: "Prof. Shashikala Tapaswi", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Prof.Shashikala"
      }
    ]
  },
  {
    title: "General Co-Chairs",
    members:[
      { 
        src: "https://web2.ee.pdn.ac.lk/sites/default/files/inline-images/DrID.jpg", 
        name: "Dr. Isuru Dasanayake", 
        dsgn: "University of Peradeniya, Sri Lanka",
        link: ""
      },
      { 
        src: "https://www.iiitm.ac.in/images/Photo.jpg", 
        name: "Dr. Vinod Kumar Jain", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/dr-vinod-kumar-jain"
      }
    ]
  },
  {
    title: "Conference Secretary",
    members:[
      
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1689745249_photo2.jpg", 
        name: "Dr. Rahul Kala", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Rahul" 
      }
    ]
  },
  {
    title: "Finance Chairs",
    members: [
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1689745249_photo2.jpg", 
        name: "Dr. Rahul Kala", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Rahul" 
      },
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1533544986_godfrey_pic.jpg", 
        name: "Dr. Wilfred Godfrey", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.WWilfredGodfrey"
      }
    ]
  },
  {
    title: "Technical Program Chairs (TPC)",
    members: [
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1533545473_dranuraj.jpg", 
        name: "Dr. Anuraj Singh", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.AnurajSingh"
      },
      { 
        src: "https://www.iiitm.ac.in/images/Photo.jpg", 
        name: "Dr. Vinod Kumar Jain", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/dr-vinod-kumar-jain"
      },
      { 
        src: "https://www.iiitm.ac.in/images/IMG_20191213_010559.jpg", 
        name: "Dr. Manoj Singh Parihar", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/dr-manoj-singh-parihar"
      },
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1533546077_drsaumya.jpg", 
        name: "Dr. Saumya Bhadauria", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.SaumyaBhadauria"
      },
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1677819537_SNK.png", 
        name: "Dr. Sunil Kumar", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.SunilKumar"
      }
    ]
  },
  {
    title: "Publicity & Website Chairs",
    members: [
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1533546946_kaushalg.jpg", 
        name: "Dr. Gaurav Kaushal", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.GauravKaushal"
      },
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1677492702_PIC_Mahendra%20K.%20Shukla.jpg", 
        name: "Dr. Mahendra Shukla", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Mahendra"
      },
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1753786677_VKS.png", 
        name: "Dr. Vivek Kumar Singh", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.VivekKumar"
      }
    ]
  },
  {
    title: "Publication Chairs",
    members: [
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1533094412_jdhar.jpg", 
        name: "Prof. Joydip Dhar", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.JoydeepDhar"
      },
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1677819537_SNK.png", 
        name: "Dr. Sunil Kumar", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.SunilKumar"
      },
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1723455388_Vijay_Pic.jpg", 
        name: "Dr. Vijay Pal Rathore", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Vijaypal"
      }
    ]
  },
  {
    title: "Registration Chairs",
    members: [
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1761456376_formal_photo1.PNG", 
        name: "Dr. Rohit Kumar", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Rohit"
      },
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1753878346_Dr.%20Bahnu%20Profile%20Pic%20for%20Faculty.jpeg", 
        name: "Dr. Bhanu Chander", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Bhanu"
      }
    ]
  },
  {
    title: "International Relation Chairs",
    members: [
      { 
        src: "https://www.iiitm.ac.in/images/demo/teachers/1678951996_Profile_Pic.jpg", 
        name: "Dr. Anjali", 
        dsgn: "ABV-IIITM, India",
        link: "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/dr-anjali"
      }
    ]
  }
];

function Committee() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      {/* HEADER SECTION */}
      <div className="pt-20 pb-10 bg-gradient-to-b from-[#043A75] to-[#022a55] text-white flex flex-col items-center px-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide mb-2">
            Organizing Committee
          </h1>
          {/* Decorative Gold Underline */}
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full mb-4"></div>
        </div>
      </div>

      <div className="inter py-12 px-4 md:px-8 max-w-[1400px] mx-auto w-full flex-grow">
        {committeeData.map((section, index) => (
          <div key={index} className="mb-16 last:mb-0">
            
            {/* Section Title */}
            <div className="flex items-center justify-center mb-10">
              <h2 className="px-6 text-2xl md:text-3xl font-bold text-[#043A75] text-center relative inline-block">
                {section.title}
                <span className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-1/3 h-[3px] bg-gray-200 rounded-full"></span>
              </h2>
            </div>
            
            {/* Card Grid */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {section.members.map((member, i) => {
                // Determine if we should render a Link or a div (if no link provided)
                const CardWrapper = member.link ? 'a' : 'div';
                const wrapperProps = member.link 
                  ? { href: member.link, target: "_blank", rel: "noopener noreferrer" } 
                  : {};

                return (
                  <CardWrapper 
                    key={i} 
                    {...wrapperProps}
                    className={`group relative bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-[260px] md:w-64 border border-gray-100 overflow-hidden flex flex-col items-center 
                      ${member.link ? 'hover:-translate-y-2 cursor-pointer' : ''}`}
                  >
                    {/* "Royal" Gold Top Bar Accent on Hover (Only if link exists or just for style) */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10"></div>

                    <div className="pt-8 pb-6 px-4 flex flex-col items-center w-full">
                      {/* Image Container */}
                      <div className="relative mb-5">
                        {/* Animated Ring */}
                        <div className="absolute -inset-1 rounded-full border-2 border-transparent group-hover:border-amber-500/30 transition-all duration-500 scale-110 group-hover:scale-100"></div>
                        
                        {member.src ? (
                          <img 
                            src={member.src} 
                            alt={member.name}
                            className="w-28 h-28 rounded-full object-cover object-top shadow-md group-hover:shadow-lg transition-all duration-300 filter grayscale-[10%] group-hover:grayscale-0"
                            loading="lazy"
                          />
                        ) : (
                          // Placeholder for Missing Image
                          <div className="w-28 h-28 rounded-full bg-slate-100 flex items-center justify-center shadow-md border-2 border-slate-200 group-hover:border-amber-500/20 transition-colors">
                             <User className="w-12 h-12 text-slate-300" />
                          </div>
                        )}
                      </div>

                      {/* Text Content */}
                      <div className="text-center w-full">
                        <h3 className="font-bold text-lg text-slate-800 mb-1 group-hover:text-[#043A75] transition-colors duration-300 font-sans">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold tracking-wider text-amber-700 uppercase mt-1">
                          {member.dsgn}
                        </p>
                      </div>
                    </div>

                    {/* View Profile Hint - Only show if there is a link */}
                    {member.link && (
                      <div className="w-full py-2 bg-gray-50 text-[10px] text-center text-gray-400 font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 border-t border-gray-100">
                        View Profile
                      </div>
                    )}
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default Committee;