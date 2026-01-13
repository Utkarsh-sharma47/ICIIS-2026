import { Footer, Navbar } from "../components";

function CRS() {
  return (
    <>
      <Navbar />
      <div className="inter py-4 px-4 md:px-12 sm:py-4 md:py-6 max-w-[1280px] mx-auto">
        <div className="pb-6">
          <div className="text-2xl font-semibold">
            Camera Ready Submission Guidelines
          </div>
          <div className="text-sm text-red-600 font-semibold mt-2">
            Please note that the last date for uploading the final camera-ready
            manuscript for the First Phase of Accepted Papers is 31st July 2025,
            23:59 IST.
          </div>
          <div className="text-sm font-semibold mt-2">
            At least one author must complete registration before uploading the
            final manuscript.
          </div>
        </div>
        <div className="pb-5">
          <div className="text-lg">
            1. Preparation of Camera Ready Manuscript
          </div>
          <ul className="list-disc ml-5 mt-2 space-y-2 text-sm">
            <li>
              Authors are requested to submit using the IEEE conference
              template. The IEEE paper template can be downloaded from{" "}
              <a
                href="https://www.ieee.org/conferences/publishing/templates"
                className="text-blue-600 underline"
              >
                here
              </a>
              . Use the A4 format. DO NOT use the US Letter format and do not
              paginate your paper.
            </li>
            <li>
              Revise your manuscript as per REVIEWERS&#39; COMMENTS, which are
              intended to improve the quality of your paper before the final
              publication. The listed comments should be addressed carefully in
              your revision. It is mandatory for all authors to incorporate all
              the changes suggested by reviewers and adhere to IEEE conditions.
              Else, their paper will be excluded from conference proceedings.
            </li>
            <li>
              In accordance with the IEEE policy, plagiarism in any form, at any
              level, is unacceptable. Therefore, the conference reserves the
              right to reject the final manuscript which is found to have high
              degree of plagiarism (more than 20%) after registration without
              refund.
            </li>
          </ul>
        </div>
        <div className="pb-6">
          <div className="text-lg">
            2. Add Copyright Information to your document
          </div>
          <div className="text-sm mt-2">
            Add the copyright notice to the bottom left corner of the first page
            of your source document. If necessary, contact Dr. Saumya Bhadauria
            (saumya@iiitm.ac.in) or Dr. Debanjan Sadhya (debanjan@iiitm.ac.in)
            for the appropriate copyright notice:
          </div>
          <ul className="list-disc ml-5 mt-2 space-y-2 text-sm">
            <li>
              For papers in which all authors are employed by the US government,
              the copyright notice is:{" "}
              <span className="font-mono">
                U.S. Government work not protected by U.S. copyright
              </span>
            </li>
            <li>
              For papers in which all authors are employed by a Crown government
              (UK, Canada, and Australia), the copyright notice is:{" "}
              <span className="font-mono">
                979-8-3315-4927-5/25/$31.00 ©2025 Crown
              </span>
            </li>
            <li>
              For papers in which all authors are employed by the European
              Union, the copyright notice is:{" "}
              <span className="font-mono">
                979-8-3315-4927-5/25/$31.00©2025 European Union
              </span>
            </li>
            <li>
              For all other papers the copyright notice is:{" "}
              <span className="font-mono">
                979-8-3315-4927-5/25/$31.00 ©2025 IEEE
              </span>
            </li>
            <li>
              LATEX users for the "all other" category can directly add the
              following lines just before{" "}
              <code>\\begin&#123;document&#125;</code> for the copyright notice to show up:
              <pre
                style={{
                  whiteSpace: "pre-wrap",
                  fontFamily: "monospace",
                  backgroundColor: "#f8f8f8",
                  padding: "0.5em",
                }}
              >
                {
                  "\\IEEEoverridecommandlockouts\n\\IEEEpubid{\\makebox[\\columnwidth]{ 979-8-3315-4927-5/25/\\$31.00 ~\\copyright~2025~IEEE \\hfill}}"
                }
              </pre>
            </li>

            <li>
              MSWord users can use: Insert Text box, insert the appropriate
              copyright notice in the textbox, and place the box (without
              border) at the bottom left on the first page.
            </li>
          </ul>
        </div>

        <div className="pb-6">
          <div className="text-lg">
            3. Validate your paper PDF using IEEE PDF eXpress
          </div>
          <div className="text-sm mt-2">
            First-time users should do the following:
          </div>
          <ul className="list-disc ml-5 mt-2 space-y-2 text-sm">
            <li>
              Access the{" "}
              <a
                href="https://ieee-pdf-express.org/"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                IEEE PDF eXpress Plus site
              </a>
              .
            </li>
            <li>
              Select the <span className="font-semibold">New Users</span> link.
            </li>
            <li>
              Enter <span className="font-mono">67479X</span> for the Conference
              ID.
            </li>
            <li>Enter your email address and a password.</li>
            <li>Continue to enter information as prompted.</li>
          </ul>
          <div className="mt-2 text-sm">
            An Online confirmation will be displayed and an email confirmation
            will be sent verifying your account setup.
          </div>
          <div className="mt-2 text-sm">
            Previous users of PDF eXpress need to follow the above steps, but
            should enter the same password that was used for previous
            conferences. Verify that your contact information is valid.
          </div>
          <div className="mt-2 text-sm font-semibold">
            Before creating PDF, proofread the tex or doc file thoroughly to
            confirm that it requires no revision.
          </div>
        </div>

        <div className="pb-6">
          <div className="text-lg">
            4. Submission of Camera Ready Manuscripts and IEEE eCopyright Form
            to REACS-2025
          </div>
          <div className="text-sm mt-2">
            STEP 1: Login to Microsoft CMT as an author of REACS2025{" "}
            <a
              href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FReACS2025%2F"
              className="text-blue-600"
            >
              (here)
            </a>{" "}
            and click the link to submit the eCopyright form. Then follow the
            on-screen instructions.
          </div>
          <div className="text-sm mt-2">
            Step 2: From the Author Console in CMT, click on the line 'Create
            Camera Ready Submission'.{" "}
            <span className="font-semibold">Submit the following files.</span>{" "}
            Please note that XXX is the three-digit paper ID (zero-padded if
            necessary):
          </div>
          <ul className="list-disc ml-5 mt-2 space-y-2 text-sm">
            <li>IEEE PDF eXpress verified paper (as XXX.pdf)</li>
            <li>
              Duly signed copyright form downloaded from IEEE (as CR-XXX.pdf)
            </li>
            <li>
              Source Editable (Word/LaTeX format) file of Camera Ready Copy (in
              Zip folder) with all supporting files (as XXX.zip).
            </li>
          </ul>
          <div className="mt-2 text-sm">
            STEP 3: For detailed instructions on how to submit IEEE eCopyright
            form and Camera-Ready Copy on Microsoft CMT, click here.
          </div>
          <div className="mt-2 text-sm">
            STEP 4: Click the “Submit” button or “Save changes” button if
            you&#39;re editing a previous submission—at the bottom of the page
            to save all your changes. Unless you press the “Submit”/“Save
            changes” button, any changes you&#39;ve made to the camera-ready
            submission (including file uploads and changes to the title,
            abstract, and author list) will not be saved.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CRS;
