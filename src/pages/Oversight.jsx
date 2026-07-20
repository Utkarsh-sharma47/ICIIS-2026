import React from "react";
import { User } from "lucide-react";
import { Footer, Navbar } from "../components/index.js";


const advisoryCommitteeData = [
  { name: "Dr. Jitendra Agrawal", dsgn: "IEEE MP Section", link: "https://ieeemp.org/officebearers.html", src: "https://ieeemp.org/img/Jitendra%20Agrawal.jpg" },
  { name: "Dr. Ashish Singhal", dsgn: "IEEE MP Section, India", link: "https://ieeemp.org/exe-com.html", src: "http://ieeemp.org/img/Ashish%20Singhal.jpg" },
  
];

function Oversight() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-20 pb-10 bg-gradient-to-b from-[#043A75] to-[#022a55] text-white flex flex-col items-center px-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide mb-2">
            Oversight Committee 
          </h1>
          <div className="h-1 w-24 bg-amber-500 mx-auto rounded-full mb-4"></div>
        </div>
      </div>

      <div className="flex-grow inter py-12 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {advisoryCommitteeData.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

const MemberCard = ({ member }) => {
  const CardWrapper = member.link ? "a" : "div";
  const wrapperProps = member.link
    ? { href: member.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      {...wrapperProps}
      className={`group relative bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 w-full max-w-[260px] md:w-64 border border-gray-100 overflow-hidden flex flex-col items-center 
        ${member.link ? "hover:-translate-y-2 cursor-pointer" : ""}`}
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

export default Oversight;
