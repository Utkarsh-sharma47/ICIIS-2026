import { Card, Footer, Navbar } from "../components/index.js";

const committeeData = [
  {
    title: "Technical Program Committee (TPC)",
    members: [
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1533545473_dranuraj.jpg", name: "Dr. Anuraj Singh", dsgn: "ABV-IIITM, India" },
      { src: "https://www.iiitm.ac.in/images/Photo.jpg", name: "Dr. Vinod Kumar Jain", dsgn: "ABV-IIITM, India" },
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1690365152_Manojsir.png", name: "Dr. Manoj Singh Parihar", dsgn: "ABV-IIITM, India" },
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1533546077_drsaumya.jpg", name: "Dr. Saumya Bhadauria", dsgn: "ABV-IIITM, India" },
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1677819537_SNK.png", name: "Dr. Sunil Kumar", dsgn: "ABV-IIITM, India" }
    ]
  },
  {
    title: "Publicity & Website Committee",
    members: [
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1533546946_kaushalg.jpg", name: "Dr. Gaurav Kaushal", dsgn: "ABV-IIITM, India" },
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1677492702_PIC_Mahendra%20K.%20Shukla.jpg", name: "Dr. Mahendra Shukla", dsgn: "ABV-IIITM, India" },
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1690365448_Viveksir.png", name: "Dr. Vivek Kumar Singh", dsgn: "ABV-IIITM, India" }
    ]
  },
  {
    title: "Publication Committee",
    members: [
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1533094412_jdhar.jpg", name: "Prof. Joydip Dhar", dsgn: "ABV-IIITM, India" },
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1677819537_SNK.png", name: "Dr. Sunil Kumar", dsgn: "ABV-IIITM, India" },
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1723455388_Vijay_Pic.jpg", name: "Dr. Vijay Pal Rathore", dsgn: "ABV-IIITM, India" }
    ]
  },
  {
    title: "Registration Committee",
    members: [
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1761456376_formal_photo1.PNG", name: "Dr. Rohit Kumar", dsgn: "ABV-IIITM, India" },
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1717651111_Bhanu.jpg", name: "Dr. Bhanu Chander", dsgn: "ABV-IIITM, India" }
    ]
  },
  {
    title: "International Relation Committee",
    members: [
      { src: "https://www.iiitm.ac.in/images/demo/teachers/1678951996_Profile_Pic.jpg", name: "Dr. Anjali", dsgn: "ABV-IIITM, India" }
    ]
  }
];

// Keep trackChairs empty or update them similarly if you have that data
const trackChairs = []; 

function Committee() {
  return (
    <>
      <Navbar />
      <div className="inter py-8 px-4 bg-gray-50 min-h-screen">
        <h1 className="text-4xl text-center font-bold mb-12 text-slate-800">Organizing Committee</h1>
        
        {committeeData.map((section, index) => (
          <div key={index} className="flex flex-col items-center mb-16">
            <div className="text-2xl font-semibold mb-8 border-b-2 border-emerald-500 pb-2 text-slate-700">
              {section.title}
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl">
              {section.members.map((member, i) => (
                <Card 
                  key={i} 
                  src={member.src} 
                  name={member.name} 
                  dsgn={member.dsgn} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Committee;