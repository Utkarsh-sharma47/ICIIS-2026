import React from "react";
import { User } from "lucide-react";
import { Footer, Navbar } from "../components/index.js";

const advisoryCommitteeData = [
  { name: "Prof. Manish Gaur", dsgn: "Director, IIIT Una, India", link: "https://iiitu.ac.in/schools/soc/faculty/66bbc33dbf272288f00f287b", src: "https://cdn.iiitu.ac.in/uploads/faculty/Manish-Gaur1727002407586-268891842.webp" },
  { name: "Prof. C. C. Tripathi", dsgn: "Director, NITTTR Bhopal, India", link: "https://www.linkedin.com/in/c-c-tripathi-64109a20b/", src: "https://media.licdn.com/dms/image/v2/D4D03AQFYc5VRN81A_w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730460333740?e=2147483647&v=beta&t=av8nah74W5XXSl78PgxrfOVDALiR1mQY3MzK629CkrY" },
  { name: "Prof. A. Elayaperumal", dsgn: "Director, NIT Nagaland, India", link: "https://www.nitnagaland.ac.in/index.php/directordesk/directorprofile", src: "https://www.nitnagaland.ac.in/templates/g5_helium/images/testimonials/DIRECTOR/Director_ElayaPerumal.jpeg" },
  { name: "Prof. Sunil Kumar", dsgn: "San Diego State University, USA", link: "https://electrical.sdsu.edu/people/sunil-kumar", src: "https://electrical.sdsu.edu/_resources/images/headshots/sunil-kumar.jpg" },
  { name: "Prof. Humaira Nisar", dsgn: "Universiti Tunku Abdul Rahman, Malaysia", link: "https://www2.utar.edu.my/cv/index.jsp?cv=humaira&reqPageId=aboutMe", src: "https://www2.utar.edu.my/getPic.jsp?fkey=E10011" },
  { name: "Prof. B. K. Kanaujia", dsgn: "Dr B R Ambedkar NIT Jalandhar, India", link: "https://departments.nitj.ac.in/dept/ece/Faculty/6430446f38bff038a7808ab6", src: "https://nitj.ac.in/files/1715231314602-Director1.jpg" },
  { name: "Prof. M. C. Govil", dsgn: "Director, NIT Sikkim, India", link: "https://nitsikkim.ac.in/institute/administration/director.php", src: "https://nitsikkim.ac.in/institute/assets/images/directorImage/mahesh.png" },
  { name: "Prof. Ciro R. Rodriguez", dsgn: "Universidad Nacional Mayor de San Marcos, Peru", link: "https://scholar.google.com/citations?user=mcbgk1wAAAAJ&hl=es", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0YNR-YMf3y-L9mLaGYFg6aM888NxgLTLVA&s" },
  { name: "Prof. Dharmendra Singh", dsgn: "Director, IIIT Vadodara, India", link: "https://iiitvadodara.ac.in/director.php", src: "https://iiitvadodara.ac.in/assets/images/pds.png" },
  { name: "Prof. Girijesh Prasad", dsgn: "Ulster University, UK", link: "https://www.ulster.ac.uk/staff/g-prasad", src: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=xPw66a0AAAAJ&citpid=4" },
  { name: "Prof. Ashutosh Kumar Singh", dsgn: "Director, IIIT Bhopal, India", link: "https://www.iiitbhopal.site/aboutus/directors-desk", src: "https://www.iiitbhopal.site/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdirector.5de14359.png&w=2048&q=75" },
  { name: "Prof. Mireya Garcıa-Vazquez", dsgn: "IPN-CITEDI, Mexico", link: "https://www.citedi.ipn.mx/lineas-investigacion/investigadores/investigadores-trayectoria-garcia.html", src: "https://www.citedi.ipn.mx/assets/files/citedi/assets/uploads/8._mireya_sarai_garc_a.jpg" },
  { name: "Prof. Vineet Kansal", dsgn: "Director, IIIT Pune, India", link: "https://www.linkedin.com/in/vineet-kansal-6528056/", src: "https://media.licdn.com/dms/image/v2/C5603AQF_Z9ye9E95QQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1642316398282?e=1778112000&v=beta&t=4j6Tu_kAs4xiGP3B20UPeGoEqIpraxJuc3bg0LvLraY" }
];

function AdvisoryCommittee() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-20 pb-10 bg-gradient-to-b from-[#043A75] to-[#022a55] text-white flex flex-col items-center px-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold tracking-wide mb-2">
            International Advisory Committee
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

export default AdvisoryCommittee;
