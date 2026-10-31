import { Footer, Navbar } from "../components";

const sectionHeadingClasses = "text-lg md:text-xl font-semibold text-slate-900";
const bodyTextClasses = "mt-3 text-sm leading-relaxed text-slate-700";
const listClasses = "mt-3 ml-5 list-disc space-y-2 text-sm leading-relaxed text-slate-700";
const linkClasses = "text-blue-700 underline hover:text-blue-900";

function CRS() {
  return (
    <>
      <Navbar />
      <main className="inter mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-12">
        <header className="mb-8 rounded-lg border-l-4 border-blue-700 bg-slate-50 p-6 md:p-8">
          <h1 className="text-2xl font-bold text-slate-900 md:text-3xl">
            Camera Ready Submission Guidelines
          </h1>
          <p className="mt-4 text-sm font-semibold text-red-700 md:text-base">
            Please note that the last date for uploading the final camera-ready
            manuscript of Accepted Papers is 12-11-2026, 23:59 IST.
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-800 md:text-base">
            At least one author must complete registration before uploading the
            final manuscript.
          </p>
        </header>

        <section className="border-b border-slate-200 pb-8">
          <h2 className={sectionHeadingClasses}>
            1. Preparation of Camera Ready Manuscript
          </h2>
          <ul className={listClasses}>
            <li>
              Authors are requested to submit using the IEEE conference
              template. The IEEE paper template can be downloaded{" "}
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                className={linkClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              . Use the A4 format. DO NOT use the US Letter format and do not
              paginate your paper.
            </li>
            <li>
              Revise your manuscript as per REVIEWERS&apos; COMMENTS, which are
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
        </section>

        <section className="border-b border-slate-200 py-8">
          <h2 className={sectionHeadingClasses}>
            2. Validate your paper PDF using IEEE PDF eXpress
          </h2>
          <p className={bodyTextClasses}>First-time users should do the following:</p>
          <ol className="mt-3 ml-5 list-decimal space-y-2 text-sm leading-relaxed text-slate-700">
            <li>
              Access the{" "}
              <a
                href="https://ieee-pdf-express.org/"
                className={linkClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                IEEE PDF eXpress Plus site
              </a>
              .
            </li>
            <li>Select the New Users link.</li>
            <li>
              Enter <span className="font-mono font-semibold">71472X</span> for
              the Conference ID.
            </li>
            <li>Enter your email address and a password.</li>
            <li>Continue to enter information as prompted.</li>
          </ol>
          <p className={bodyTextClasses}>
            An online confirmation will be displayed and an email confirmation
            will be sent verifying your account setup.
          </p>
          <p className={bodyTextClasses}>
            Previous users of PDF eXpress need to follow the above steps, but
            should enter the same password that was used for previous
            conferences. Verify that your contact information is valid.
          </p>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-800">
            Before creating PDF, proofread the tex or doc file thoroughly to
            confirm that it requires no revision.
          </p>
        </section>

        <section className="pt-8">
          <h2 className={sectionHeadingClasses}>
            3. Submission of Camera Ready Manuscripts and IEEE eCopyright Form
            to ICIIS-2026
          </h2>
          <ol className="mt-3 ml-5 list-decimal space-y-4 text-sm leading-relaxed text-slate-700">
            <li>
              Login to Microsoft CMT as an author of ICIIS2026 and click the link
              to submit the eCopyright form. Then follow the on-screen
              instructions.{" "}
              <a
                href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICIIS2026%2F"
                className={linkClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                Login to CMT
              </a>
            </li>
            <li>
              From the Author Console in CMT, click on the link &quot;Create
              Camera Ready Submission&quot;. Submit the following files. Please
              note that XXX is the three-digit paper ID (zero-padded if
              necessary):
              <ul className={listClasses}>
                <li>IEEE PDF eXpress verified paper (as XXX.pdf) <p>[Please approve the generated pdf on IEEE PDF eXpress]</p></li>
                <li>
                  Duly signed copyright form downloaded from IEEE (as CR-XXX.pdf)
                </li>
                <li>
                  Source Editable (Word/LaTeX format) file of Camera Ready Copy
                  (in Zip folder) with all supporting files (as XXX.zip).
                </li>
              </ul>
            </li>
            <li>
              For detailed instructions on how to submit IEEE eCopyright form
              and Camera-Ready Copy on Microsoft CMT,{" "}
              <a
                href="https://cmt3.research.microsoft.com/docs/help/author/camera-ready-submission.html"
                className={linkClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                click here
              </a>
              .
            </li>
            <li>
              Click the &quot;Submit&quot; button or &quot;Save changes&quot;
              button if you&apos;re editing a previous submission at the bottom
              of the page to save all your changes. Unless you press the
              &quot;Submit&quot;/&quot;Save changes&quot; button, any changes
              you&apos;ve made to the camera-ready submission (including file
              uploads and changes to the title, abstract, and author list) will
              not be saved.
            </li>
          </ol>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default CRS;
