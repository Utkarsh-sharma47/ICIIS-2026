import logo1 from './../assets/ieee.png';
import logo2 from './../assets/iiitm.png';

const logos = [
  {
    name: "iiitm logo",
    imageUrl: logo2,
    alt: "iiitm logo"
  },
  {
    name: "ieee logo",
    imageUrl: logo1,
    alt: "ieee logo"
  }
];

function LogoSection() {
  return (
    <div className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-2 flex justify-center items-center gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className=""
            >
              <img
                src={logo.imageUrl}
                alt={logo.alt}
                className="h-44 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default LogoSection;