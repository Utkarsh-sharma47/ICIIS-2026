import { Footer, Navbar } from "../components/index.js";
import tentativeSchedule from "../assets/ICIIS_Tentative_Conference_Schedule.pdf";
import { Download } from "lucide-react";

function Schedule() {
  return (
    <>
      <Navbar />

      <div className="inter primary-bg text-cl py-2 px-4 md:px-12 sm:py-4 md:py-8 max-w-[1280px] mx-auto">

        {/* TENTATIVE PROGRAMME SCHEDULE */}
        <div className="text-2xl font-semibold mb-6">
          Tentative Programme Schedule
        </div>
        <div className="mt-5">
          <a
            href={tentativeSchedule}
            target="_blank"
            className="flex items-center w-fit gap-2 hover:bg-blue-200 hover:text-blue-800 bg-[#043A75] text-white mt-2 px-6 py-3 rounded-full transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="font-semibold text-sm">
              Tentative Programme Schedule
            </span>
          </a>
        </div>

        {/* PDF embed */}
        <div className="w-full border rounded-lg overflow-hidden shadow mt-6 mb-10">
          <iframe
            src={tentativeSchedule}
            title="Tentative Programme Schedule PDF"
            className="w-full h-[900px]"
          />
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Schedule;
