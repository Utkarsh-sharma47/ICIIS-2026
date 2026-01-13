import { Footer, Navbar } from "../components"
import { Upload } from 'lucide-react';

function Submission() {
  return (
    <>
    {/* <Header/> */}
      <Navbar />
      <div>
        <div className="inter tracking-wide text-justify py-3 px-4 md:px-12 sm:py-4 md:py-8 max-w-[1280px] mx-auto">
          <div className="pb-8">
            <div className="text-xl md:text-2xl font-semibold">Paper Submission Instructions</div>
            <div className="text-sm mt-3">
              Prospective authors are invited to submit <span className="font-semibold">original, high-quality, and unpublished research papers</span> to the <span className="font-semibold">2025 IEEE International Conference on Recent Advances in Computing and Systems (ReACS 2025).</span> By submitting a manuscript to ReACS 2025, authors confirm that the work is not simultaneously submitted or published elsewhere (in a journal, conference, or workshop). Any paper found violating this policy will be rejected without review.
            </div>
            <div className="text-sm mt-3">
              Papers not compliant with the IEEE template including appropriate referencing or exceeding the page limit will be returned without review. Only original papers that have not been published or submitted for publication elsewhere will be considered. The paper must clearly indicate the research area, main results, and contributions.
            </div>
            <div className="py-8">
              <div>All submissions must strictly adhere to the following guidelines:</div>
              <div className="mt-3 text-sm ml-6">
                <ul className="list-disc space-y-3">
                  <li><span className="font-bold">Paper Length:</span> The manuscript should <span className="font-bold">not exceed 6 pages,</span> including text, figures, tables, and references. Authors may include <span className="font-bold">up to 2 additional pages</span> (maximum of 8 pages total), subject to <span className="font-bold">an extra page fee.</span></li>
                  <li><span className="font-bold">Format:</span> Submissions must be in <span className="font-bold">PDF format only</span>, with a <span className="font-bold">maximum file size of 10 MB.</span></li>
                  <li><span className="font-bold">Review Process:</span> REACS 2025 follows a <span className="font-bold">single-blind peer-review process</span>, where reviewers are anonymous, but author identities are visible.</li>
                  <li><span className="font-bold">Fonts & Formatting:</span> The PDF must use scalable fonts with all fonts embedded. Ensure that no transparent pixels (alpha channel) are used in figures/images, as these may cause rendering issues during display or print.</li>
                  <li><span className="font-bold">Security Settings:</span> The submitted PDF must <span className="font-bold">not be password protected or have document security settings enabled.</span></li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="py-8">
              <div className="text-2xl font-bold">Conference Proceedings</div>
              <div className="mt-3 text-sm">
                The <span className="font-bold">proceedings of ReACS 2025 will be published by IEEE</span> (<a href="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/67479" className="text-blue-600 underline">Conference ID: 67479</a>). All accepted and presented papers will be submitted to <span className="font-bold">IEEE Xplore,</span> which is indexed with world’s leading Abstracting & Indexing (A&I) databases (SCOPUS etc.) subject to meeting <span className="font-bold">IEEE’s quality and scope requirements.</span> Papers accepted for presentation but <span className="font-bold">not presented at the conference (no-show)</span> will <span className="font-bold">not be included in the final proceedings.</span>
              </div>
            </div>
            <hr />
            <div className="py-8">
              <div className="text-2xl font-bold">Manuscript Templates</div>
              <div className="mt-3 text-sm">
                Authors must prepare their manuscripts using the <span className="font-bold">IEEE conference templates.</span> Templates for <span className="font-bold">MS Word, LaTeX, and Overleaf</span> are available at the following links:
                <ul className="my-3 list-disc ml-6">
                  <li><a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-600 underline">IEEE Word Template</a></li>
                  <li><a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-600 underline">IEEE LaTeX Template</a></li>
                  <li><a href="https://www.overleaf.com/latex/templates/ieee-conference-template/grfzhhncsfqn" className="text-blue-600 underline">IEEE Overleaf Template</a></li>
                </ul>
                Please refer to the <span className="font-bold">IEEE Author Guidelines</span> for detailed instructions on formatting, structuring, headings, figures, tables, and references.
              </div>
            </div>
            <hr />
            <div className="pt-8">
              <div className="text-2xl font-bold">Submission Portal</div>
              <div className="mt-3 text-sm">
                All manuscripts must be submitted electronically through the <span className="font-bold">ReACS 2025 submission portal.</span>
                  <a
                    href="https://cmt3.research.microsoft.com/ReACS2025/"
                    className="flex items-center w-fit gap-2 hover:bg-blue-200 hover:text-blue-800 bg-[#043A75] text-white mt-2 px-6 py-3 rounded-full transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="font-semibold">
                      Submit Here
                    </span>
                  </a>
              </div>
              <div className="text-sm mt-4">
                Authors submitting to <span className="font-bold">Special Tracks or Sessions</span> must select the relevant subject area during submission. Such papers will be directed to the respective <span className="font-bold">Session Chairs</span> for review and evaluation.
              </div>
              <div className="text-sm mt-4">
                <span className="font-bold">CMT Acknowledgement: </span>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Submission
