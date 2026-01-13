import { Navbar, Footer } from '../components/index.js'
import iiitm from "../assets/iiit_logo.png"

function About() {
  return (
    <>
      <Navbar />
      <div className='inter py-2 px-4 md:px-12 sm:py-4 md:py-8 max-w-[1280px] mx-auto'>
        <div className="flex items-center flex-col md:flex-row gap-6">
          <div className='w-full md:w-1/3 flex justify-center'>
            <img src={iiitm} alt="IIITM" className="h-[220px]" />
          </div>
          <div className='w-full md:w-2/3'>
            <div className='text-xl font-semibold'>ABV-IIITM Gwalior</div>
            <div className='text-[12px] mt-3 tracking-wide text-justify'>
              <div className='mb-2'>
                Indian Institute of Information Technology and Management (IIITM) in Gwalior, Madhya Pradesh is an autonomous institute set by Government of India, MHRD (Presently Ministry of Education, Govt. of India) in 1997. It is an effort by MHRD (Presently Ministry of Education, Govt. of India) towards creating professionals in areas of management and information technology from the same institute. This institute was created for facilitating higher education, research, and consultancy in areas of information technology (IT) and business management. Initially started as IIITM, this institute was prefixed with ABV in 2002 to honour the then Prime Minister Atal Bihari Vajpayee.
              </div>
              <div>
                Atal Bihari Vajpayee-Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior is an institute committed to taking academics to unprecedented levels of brilliance and efficiency. In this generation of excellence and specialization we aim at achieving an education standard that is comparable to the best globally. Academics at our institute are focussed on advancement of knowledge and systematic understanding of course materials and their application areas.
              </div>
              <div className="mt-5">
                <a
                  href="https://www.iiitm.ac.in/index.php/en/"
                  className="flex items-center w-fit gap-2 hover:bg-blue-200 hover:text-blue-800 bg-[#043A75] text-white mt-2 px-6 py-2 rounded-full transition-colors"
                >
                  <span className="font-semibold text-sm">
                    Know More
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <div className='flex flex-col-reverse md:flex-row gap-8'>
            <div className='w-full md:w-2/3'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3761697805758!2d78.1741388!3d26.249452100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sAtal%20Bihari%20Vajpayee%20Indian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1743697342046!5m2!1sen!2sin" width="100%" height="350" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="w-full md:w-1/3">
              <div className="text-xl">Have A Question?</div>
              <div className="mt-3"><span className='font-semibold'>Address:</span> ABV-IIITM Gwalior, Madhya Pradesh, India</div>
              <div className="mt-2"><span className='font-semibold'>Email:</span> reacs2025@iiitm.ac.in</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default About
