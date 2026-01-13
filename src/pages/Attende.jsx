import { Footer, Navbar } from '../components'

function Attende() {
  return (
    <>
        <Navbar/>
        <div className="inter tracking-wide text-justify py-3 px-4 md:px-12 sm:py-4 md:py-8 max-w-[1280px] mx-auto">
            <div className="pb-8">
                <div className="text-2xl font-semibold">
                Accommodation available at ABV-IIITM Gwalior
                </div>
                <div className="mt-4">
                    The accommodation of guests attending the conference will be arranged in the Visitor Hostel (Pocket-B) of ABV-IIITM Gwalior Campus. The allotment of visitor hostel will be facilitated on a first come first serve during registration. 
                </div>
            </div>

            <div className="pb-8">
                <div className="text-2xl font-semibold">
                Accommodation Charges (Per Day)
                </div>
                <div className="mt-4">
                    Single Occupancy: ₹ 700/-
                </div>
                <div className="mt-4">
                    Double Occupancy: ₹ 1100/-
                </div>
            </div>

            <div className="pb-8">
                <div className="mt-4">
                    For further details regarding accommodation refer to, <a href="https://www.iiitm.ac.in/images/2024/October_2024/Visitor-Hostel-Booking-Form.pdf" className="text-blue-600 underline">Hostel Booking Form (Category B)</a>
                </div>
            </div>

        </div>
        <Footer/>
    </>
  )
}

export default Attende