import { Footer, Navbar } from '../components';
import img1 from '../assets/speaker1.jpg';
import img2 from '../assets/speaker2.jpg';
import img3 from '../assets/speaker3.jpeg';
import img4 from '../assets/speaker4.jpg';


function SpeakerCard({ name, title, roles, department, university, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden p-5 transition w-full max-w-sm">
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-bold text-[#0054B0]">{name}</h3>
        <p className="text-sm text-gray-700 mt-1 font-medium">{title}</p>
        {roles.map((role, index) => (
          <p key={index} className="text-sm text-gray-600">{role}</p>
        ))}
        <p className="text-sm text-gray-600">{department}</p>
        <p className="text-sm text-gray-600">{university}</p>
      </div>
    </div>
  );
}

const speakersData = [
  {
    type: "Keynote Speakers",
    members: [

      {
        name: "Prof. Sankar Kumar Pal",
        title: "National Science Chair, GoI",
        roles: ["Padma Shree in Science and Engineering, 2013", "President, ISI"],
        department: "Distinguished Scientist",
        university: "Former Director, ISI Kolkata",
        image: img2
      },
      {
        name: "Prof. Sunil Kumar",
        title: "Professor & Thomas G. Pine Faculty Fellow Director",
        roles: ["Multimedia & Wireless Networks Research Group"],
        department: "Electrical and Computer Engineering Department",
        university: "San Diego State University, USA",
        image: img1
      }
    ]
  },
  {
    type: "Invited Speaker",
    members: [
      {
        name: "Mr. Diptiman Purbey",
        title: "Engineering Manager 2 at Uber",
        roles: ["Adjunct Faculty at IIIT Gwalior"],
        department: "Ex-Senior Software Engineer",
        university: "Microsoft, India",
        image: img3
      },
    ]
  },
  {
    type: "Tutorial Session",
    members: [
      {
        name: "Mr. Gurucharan Singh",
        title: "Faculty Member for Cyber Crimes",
        roles: ["Central Detective Training Institute"],
        department: "Bureau of Police Research & Development, Ministry of Home Affairs",
        university: "CFIs Complex, Sec 36A, Plot No.2, Dakshin Marg, CHANDIGARH –160036",
        image: img4
      },
    ]
  },
  
];

function Speakers() {
  return (
    <>
      <Navbar />
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-10">
        {speakersData.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0054B0] mb-6 text-center">{section.type}</h2>
            <div className={`flex flex-wrap justify-center gap-8`}>
              {section.members.map((speaker, i) => (
                <SpeakerCard key={i} {...speaker} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Speakers;
