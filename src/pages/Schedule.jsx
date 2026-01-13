import { Footer, Navbar } from "../components/index.js";
import schedule from "../assets/ReACS 2025 Conference Oral presentation Schedule.pdf";
import overall from "../assets/Final overall.pdf";
import { Download } from "lucide-react"

function TableHeading({ track, session, timing, venue }) {
  return (
    <div className="my-6 p-4 bg-gray-100 rounded-lg shadow">
      <div className="text-xl font-semibold">{track}</div>
      <div className="text-md font-medium">Session: {session}</div>
      {timing && <div className="text-sm">Timing: {timing}</div>}
      <div className="text-sm">Venue: {venue}</div>
    </div>
  );
}

function PaperTable({ papers }) {
  return (
    <table className="w-full border-collapse my-4">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2 w-24">Paper ID</th>
          <th className="border p-2">Paper Name</th>
        </tr>
      </thead>
      <tbody>
        {papers.map((p, i) => (
          <tr key={i} className="border">
            <td className="border p-2 text-center">{p.id}</td>
            <td className="border p-2">{p.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


function Schedule() {
  return (
    <>
      <Navbar />

      <div className="inter primary-bg text-cl py-2 px-4 md:px-12 sm:py-4 md:py-8 max-w-[1280px] mx-auto">
        <div className="text-2xl font-semibold mb-6">
          Overall Program Schedule
        </div>
        <div className="mt-5">
          <a
            href={overall}
            target="_blank"
            className="flex items-center w-fit gap-2 hover:bg-blue-200 hover:text-blue-800 bg-[#043A75] text-white mt-2 px-6 py-3 rounded-full transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="font-semibold text-sm">
              Overall Schedule
            </span>
          </a>
        </div>
        <div className="mt-5 text-2xl font-semibold mb-6">
          Oral Paper Presentation Schedule
        </div>
        <div className="mt-5">
          <a
            href={schedule}
            target="_blank"
            className="flex items-center w-fit gap-2 hover:bg-blue-200 hover:text-blue-800 bg-[#043A75] text-white mt-2 px-6 py-3 rounded-full transition-colors"
          >
            <Download className="w-4 h-4" />
            <span className="font-semibold text-sm">
              Program Schedule
            </span>
          </a>
        </div>

        {/* ------------------------------------------------- */}
        {/* OVERALL PROGRAM SCHEDULE (FULL TABLES) */}
        {/* ------------------------------------------------- */}

        <h2 className="text-2xl font-bold mt-10 mb-4">Overall Program Schedule</h2>

        {/* --- DAY 1 TABLE --- */}
        <div className="overflow-x-auto">
          <table className="min-w-[900px] border-collapse w-full text-sm">
            <thead>
              <tr className="bg-gray-200 font-semibold">
                <th className="border p-2 w-32">Day</th>
                <th className="border p-2">Friday, December 19, 2025</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td className="border p-2 font-semibold">Time</td>
                <td className="border p-2 font-semibold">Activity</td>
              </tr>

              <tr>
                <td className="border p-2">09:00–09:30</td>
                <td className="border p-2">
                  <b>Registration</b><br />
                  LT-1, Room no. 105
                </td>
              </tr>

              <tr>
                <td className="border p-2">10:00–11:00</td>
                <td className="border p-2">
                  <b>Inauguration</b><br />
                  LT-1, Room no. 211
                </td>
              </tr>

              <tr>
                <td className="border p-2">11:00–11:30</td>
                <td className="border p-2">
                  <b>High Tea</b><br />
                  LT-1, Second Floor Open Area
                </td>
              </tr>

              <tr>
                <td className="border p-2">11:30–12:30</td>
                <td className="border p-2">
                  <b>Keynote</b><br />
                  "Cross-Layer and Waveform-Aware Routing Protocol for Autonomous UAV Networks"<br />
                  Prof. Sunil Kumar<br />
                  Professor, Dept. of Electrical and Computer Engineering,<br />
                  San Diego State University, CA, USA<br />
                  LT-1, Room no. 211
                </td>
              </tr>

              <tr className="bg-orange-100">
                <td className="border p-2">12:30–14:00</td>
                <td className="border p-2 font-semibold">Technical Sessions — Slot 1</td>
              </tr>

              {/* SLOT 1 SUBTABLE */}
              <tr>
                <td className="border p-2" />
                <td className="border p-2">
                  <div className="overflow-x-auto">
                    <table className="min-w-[800px] w-full border-collapse text-center text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Session</th>
                          <th className="border p-2">1</th>
                          <th className="border p-2">2</th>
                          <th className="border p-2">3</th>
                          <th className="border p-2">4</th>
                          <th className="border p-2">5</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Track</td>
                          <td className="border p-2">Vision Computing</td>
                          <td className="border p-2">Vision Computing</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">Emerging Computing Technologies and Systems</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Venue</td>
                          <td className="border p-2">LT-1, 108</td>
                          <td className="border p-2">LT-1, 106</td>
                          <td className="border p-2">LT-1, 107</td>
                          <td className="border p-2">LT-1, 207</td>
                          <td className="border p-2">LT-1, 208</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border p-2">14:00–15:00</td>
                <td className="border p-2">
                  <b>Lunch Break</b><br />
                  Department of CSE, Ground Floor
                </td>
              </tr>

              <tr className="bg-orange-100">
                <td className="border p-2">15:00–16:30</td>
                <td className="border p-2 font-semibold">Technical Sessions — Slot 2</td>
              </tr>

              {/* SLOT 2 SUBTABLE */}
              <tr>
                <td className="border p-2" />
                <td className="border p-2">
                  <div className="overflow-x-auto">
                    <table className="min-w-[800px] w-full border-collapse text-center text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Session</th>
                          <th className="border p-2">6</th>
                          <th className="border p-2">7</th>
                          <th className="border p-2">8</th>
                          <th className="border p-2">9</th>
                          <th className="border p-2">10</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Track</td>
                          <td className="border p-2">Vision Computing</td>
                          <td className="border p-2">Cybersecurity and Forensics</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">Computer and Software Systems</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Venue</td>
                          <td className="border p-2">LT-1, 108</td>
                          <td className="border p-2">LT-1, 106</td>
                          <td className="border p-2">LT-1, 107</td>
                          <td className="border p-2">LT-1, 207</td>
                          <td className="border p-2">LT-1, 208</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border p-2">16:30–17:00</td>
                <td className="border p-2">
                  <b>High Tea</b><br />
                  LT-1, Second Floor Open Area
                </td>
              </tr>

              <tr>
                <td className="border p-2">19:30</td>
                <td className="border p-2">
                  <b>Welcome Dinner</b><br />
                  Convention Centre
                </td>
              </tr>

            </tbody>
          </table>
        </div>


        {/* --- DAY 2 TABLE --- */}
        <div className="overflow-x-auto mt-12">
          <table className="min-w-[900px] border-collapse w-full text-sm">
            <thead>
              <tr className="bg-gray-200 font-semibold">
                <th className="border p-2 w-32">Day</th>
                <th className="border p-2">Saturday, December 20, 2025</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-2 font-semibold">Time</td>
                <td className="border p-2 font-semibold">Activity</td>
              </tr>

              <tr>
                <td className="border p-2">09:00–09:30</td>
                <td className="border p-2">
                  <b>Registration</b><br />
                  LT-1, Room no. 105
                </td>
              </tr>

              <tr className="bg-orange-100">
                <td className="border p-2">09:30–11:00</td>
                <td className="border p-2 font-semibold">Technical Sessions — Slot 3</td>
              </tr>

              {/* SLOT 3 TABLE */}
              <tr>
                <td />
                <td className="border p-2">
                  <div className="overflow-x-auto">
                    <table className="min-w-[800px] w-full border-collapse text-center text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Session</th>
                          <th className="border p-2">11</th>
                          <th className="border p-2">12</th>
                          <th className="border p-2">13</th>
                          <th className="border p-2">14</th>
                          <th className="border p-2">15</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Track</td>
                          <td className="border p-2">Cybersecurity & Forensics</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">Communication Networks</td>
                          <td className="border p-2">Cyber Physical Systems & IoT</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Venue</td>
                          <td className="border p-2">LT-1, 108</td>
                          <td className="border p-2">LT-1, 106</td>
                          <td className="border p-2">LT-1, 107</td>
                          <td className="border p-2">LT-1, 207</td>
                          <td className="border p-2">LT-1, 208</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border p-2">11:00–11:30</td>
                <td className="border p-2">
                  <b>High Tea</b><br />
                  LT-1, Second Floor Open Area
                </td>
              </tr>

              <tr>
                <td className="border p-2">11:30–13:00</td>
                <td className="border p-2">
                  <b>Tutorial</b><br />
                  "Emerging Cybercrime Trends and Threats"<br />
                  Mr. Gurcharan Singh<br />
                  Central Detective Training Institute, Chandigarh<br />
                  LT-1, Room no. 211
                </td>
              </tr>

              <tr>
                <td className="border p-2">13:00–14:00</td>
                <td className="border p-2">
                  <b>Lunch Break</b><br />
                  Department of CSE, Ground Floor
                </td>
              </tr>

              <tr>
                <td className="border p-2">14:00–15:00</td>
                <td className="border p-2">
                  <b>Keynote</b><br />
                  "The Generative Shift: AI at Work"<br />
                  Mr. Diptiman Purbe<br />
                  Uber<br />
                  LT-1, Room no. 211
                </td>
              </tr>

              <tr>
                <td className="border p-2">15:00–15:30</td>
                <td className="border p-2">
                  <b>High Tea</b><br />
                  LT-1, Second Floor Open Area
                </td>
              </tr>

              <tr className="bg-orange-100">
                <td className="border p-2">15:30–17:00</td>
                <td className="border p-2 font-semibold">Technical Sessions — Slot 4</td>
              </tr>

              {/* SLOT 4 SUBTABLE */}
              <tr>
                <td />
                <td className="border p-2">
                  <div className="overflow-x-auto">
                    <table className="min-w-[800px] w-full border-collapse text-center text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border p-2">Session</th>
                          <th className="border p-2">16</th>
                          <th className="border p-2">17</th>
                          <th className="border p-2">18</th>
                          <th className="border p-2">19</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border p-2">Track</td>
                          <td className="border p-2">AI and Data Science</td>
                          <td className="border p-2">Robotics & Autonomous Systems</td>
                          <td className="border p-2">Computer and Software Systems</td>
                          <td className="border p-2">Emerging Computing Technologies and Systems</td>
                        </tr>
                        <tr>
                          <td className="border p-2">Venue</td>
                          <td className="border p-2">LT-1, 108</td>
                          <td className="border p-2">LT-1, 106</td>
                          <td className="border p-2">LT-1, 107</td>
                          <td className="border p-2">LT-1, 207</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="border p-2">17:00–18:00</td>
                <td className="border p-2">
                  <b>Valedictory Ceremony</b><br />
                  LT-1, Room no. 211
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* ------------------------------------------------- */}
        {/* END OF OVERALL SCHEDULE */}
        {/* ------------------------------------------------- */}

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-3">Important Information</h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Registration Desk: Open daily from 9:00 AM</li>
            <li>
              Conference Website:{" "}
              <a
                href="https://reacs2025.iiitm.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://reacs2025.iiitm.ac.in/
              </a>
            </li>
            <li>
              For paper presentation schedule, see Oral Presentation Schedule at the
              website
            </li>
          </ul>
        </div>



        <h2 className="text-2xl font-bold mt-10 mb-4">Oral Paper Presentation Schedule</h2>

        {/* -------- ORAL PRESENTATION PDF EMBED -------- */}
        <div className="w-full border rounded-lg overflow-hidden shadow mt-6">
          <iframe
            src={schedule}
            title="Oral Paper Presentation Schedule PDF"
            className="w-full h-[900px]"
          />
        </div>
        {/* -------- END PDF EMBED -------- */}


      </div> {/* container end */}

      <Footer />
    </>
  );
}

export default Schedule;



