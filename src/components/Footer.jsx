import {Link} from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#043A75] text-white">
      <div className="px-4 md:px-12 py-4 max-w-[1280px] mx-auto">
        <div className="text-center text-xl font-bold mb-2">ICIIS 2026</div>
        <hr />
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 my-6 text-sm">
        <div className="w-full md:w-1/3">
            <div className="text-xl">ICIIS</div>
            <div className="mt-3">2026 IEEE International Conference on Recent Advances in Computing and Systems</div>
            <div className="mt-2">XX-XX December 2026 &#x2022; ABV-IIITM Gwalior, India</div>
          </div>
          <div className="w-full md:w-1/6">
            <div className="text-xl">Useful Links</div>
            <div className="mt-3 underline"><Link to="/cfp">Call for Papers</Link></div>
            <div className="mt-2 underline"><Link to="/submission">Paper Submission</Link></div>
            <div className="mt-2 underline"><Link to="/registration">Registration</Link></div>
          </div>
          <div className="w-full md:w-1/6">
            <div className="text-xl">About</div>
            <div className="mt-3 underline"><Link to="/about">About Us</Link></div>
            <div className="mt-2 underline"><a href="https://www.google.com/maps/place/Atal+Bihari+Vajpayee+Indian+Institute+of+Information+Technology+and+Management+Gwalior/@26.2494521,78.1741388,17z/data=!3m1!4b1!4m6!3m5!1s0x3976c6e5d32a4d53:0xf834069adc0c9b89!8m2!3d26.2494521!4d78.1741388!16zL20vMGdreHA1?entry=ttu&g_ep=EgoyMDI1MDMzMS4wIKXMDSoASAFQAw%3D%3D">Locate Us</a></div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="text-xl">Have A Question?</div>
            <div className="mt-3">Address: ABV-IIITM Gwalior, Madhya Pradesh</div>
            <div className="mt-2">Email:*** reacs2025@iiitm.ac.in</div>
          </div>
        </div>
      </div>
      <div className="text-center text-[12px] bg-[#3E3F40] py-1">© 2026 All Rights Reserved By ReACS-2026.</div>
    </div>
  )
}

export default Footer
