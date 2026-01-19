import { Footer, Navbar, RegistrationFees } from "../components/index.js"
import qr from "../assets/qr.png"
function Registration() {
  return (
    <>
      {/* <Header/> */}
      <Navbar />
      <div className="inter py-4 px-4 md:px-12 sm:py-4 md:py-6 max-w-[1280px] mx-auto">
        <div className="pb-5">
          <div className="text-2xl font-semibold">Important Dates (third-phase)</div>
          <ul className="mt-2 ml-5 list-disc space-y-2 text-base">
            <li><span className="font-semibold">Deadline for Early Bird Registration:</span> 10 October 2025</li>
            <li><span className="font-semibold">Deadline for Camera-Ready Submission:</span> 20 October 2025</li>
            <li><span className="font-semibold">All Registration Deadlines Close On:</span> 20 October 2025</li>
          </ul>
        </div>
        <div className="pb-5">
          <div className="text-2xl font-semibold">Registration Guidelines</div>
          <ul className="mt-2 ml-5 list-disc space-y-2 text-base">
            <li>Every accepted paper must have at least one author registration.</li>
            <li>Papers exceeding 6 pages are subject to an extra page charge of INR 1180
              (inclusive of 18% GST) per additional page, up to a maximum of 8 pages.</li>
            <li>Authors who do not comply fully with conference requirements (viz. Registration,
              camera ready format, in-person presentation of the accepted paper etc.) may not
              have their paper published in the conference proceedings.</li>
            <li>Attendees without a paper may register at Listener rates.</li>
            <li>Conference registration includes the Banquet Dinner.</li>
          </ul>
        </div>
        <div className="pb-5">
          <div className="text-2xl font-semibold">Submission Instructions</div>
          <ul className="mt-2 ml-5 list-disc space-y-2 text-base">
            <li>Please enter your Paper ID in the remarks column while making the payment.</li>
            <li>After making the payment, kindly take a printout or screenshot of your
              registration receipt.</li>
            <li>Once the registration fee is paid, fill out the registration form provided below and
              upload your receipt.</li>
            <li>Papers accepted in first-phase of submission must register before the registration
              deadline of the first phase for consideration to be included in the conference
              proceedings.</li>
          </ul>
        </div>
        <div className="pb-5">
          <div className="text-2xl font-semibold">Registration Queries</div>
          <div className="text-base ml-5 mt-2"><p>For any queries regarding registration, kindly contact:</p>
            <p> Registration team, ReACS 2025</p>
            <p>📧 Email: reacs2025@iiitm.ac.in</p>
          </div>
        </div>
        <div className="pb-5">
          <div className="text-2xl font-semibold">Registration Form</div>
          <div className="text-base ml-5 mt-2"><p>For authors with multiple accepted papers, the registration form must be filled out separately for each paper.</p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdzICBCcQgT-De1oPG2xxlKoc_itvNbwmDSApMbmeT_PuRl7A/viewform"
              className="flex items-center w-fit gap-2 hover:bg-blue-200 hover:text-blue-800 bg-[#043A75] text-white mt-2 px-6 py-3 rounded-full transition-colors"
            >
              <span className="font-semibold">
                Register Here
              </span>
            </a>
          </div>
        </div>
        <div className="pb-5">
          <div className="text-2xl font-semibold">Terms and Conditions</div>
          <ol className="mt-2 ml-5 list-decimal space-y-2 text-base">
            <li>Papers exceeding 6 pages are subject to an extra page charge of INR 1180
              (inclusive of 18% GST) per additional page, up to a maximum of 8 pages.</li>
            <li>At least one author of an accepted paper must register and present the paper to be
              included in the conference proceedings.</li>
            <li>Student authors must upload valid proof of student status during registration.</li>
            <li>IEEE members must upload valid membership proof to avail of membership
              discounts.</li>
            <li>The registration fee includes 18% GST.</li>
            <li>Registration fees are non-refundable at any stage.</li>
            <li>The registration fee includes:</li>
            <ul className="ml-3 list-disc space-y-2">
              <li>Conference kit</li>
              <li>Access to all technical sessions, keynote speeches, and tutorials</li>
              <li>Lunch, tea/snacks</li>
              <li>Social events during the conference</li>
            </ul>
            <li>Registration fee does not include accommodation. Accommodation details will be
              shared on the conference website in due course of time.</li>
          </ol>
        </div>
        <div className="text-2xl font-semibold">Registration Fees Details</div>
        <RegistrationFees />
        <div className="mt-2 text-base/relaxed">
          <span className="font-bold">*</span> The registration fee is not refundable.
        </div>
        <div className="py-4">
          <div className="font-semibold">The account details for payment of Registration fees are given as follows:</div>
          <div className="mt-2 text-base ml-5 space-y-1">
            <p><span className="font-bold">Account Name: </span>ABVIIITMG IEEE REACS 2025</p>
            <p><span className="font-bold">Account Number: </span>946210210000051</p>
            <p><span className="font-bold">Bank Name and Branch: </span>Bank of India, IIITM Campus, Morena Link Road, Gwalior, M.P. -474003</p>
            <p><span className="font-bold">Account Type: </span>Saving</p>
            <p><span className="font-bold">MICR Code: </span>474013010</p>
            <p><span className="font-bold">IFSC Code: </span>BKID0009462</p>
            <p><span className="font-bold">SWIFT Code: </span>BKIDINBBGWA</p>
          </div>
        </div>
        <div className="py-2">
          <div className="font-bold">Scan & Pay</div>
          <img className="ml-5 mt-2 h-80" src={qr} alt="Qr code" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Registration
