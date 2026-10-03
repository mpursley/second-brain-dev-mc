import React from 'react';

export function NDA() {
  return (
    <div className="space-y-3">
      <h1 className="text-lg font-display font-bold text-center mb-4 tracking-wide text-slate-900 border-b border-dashed border-slate-300 pb-3 inline-block mx-auto w-full">
        MUTUAL NON-DISCLOSURE AGREEMENT
      </h1>

      <p className="text-slate-700">
        This MUTUAL NON-DISCLOSURE AGREEMENT (the <strong>"Agreement"</strong>) is entered into by and between{' '}
        <strong>Open World Tech Inc.</strong>, a Delaware corporation (<strong>"Company"</strong>), and the individual whose name and signature appear below (<strong>"Applicant"</strong>), and is effective as of the date of the last signature below (the <strong>"Effective Date"</strong>).
      </p>

      <div className="space-y-2 mt-2">
        <section className="break-inside-avoid">
          <h2 className="text-[15px] font-display font-bold text-slate-900 mb-0.5">1. Purpose</h2>
          <p className="text-slate-700">
            The parties wish to explore a potential business relationship in connection with the Applicant's candidacy for a position in Open World Tech Inc. (the <strong>"Relationship"</strong>). In connection with the Relationship, each party (as the <strong>"Disclosing Party"</strong>) may disclose to the other party (as the <strong>"Receiving Party"</strong>) certain confidential technical and business information.
          </p>
        </section>

        <section className="break-inside-avoid">
          <h2 className="text-[15px] font-display font-bold text-slate-900 mb-0.5">2. Confidential Information</h2>
          <p className="text-slate-700">
            <strong>"Confidential Information"</strong> means any information disclosed by the Disclosing Party to the Receiving Party, either directly or indirectly, in writing, orally, or by inspection of tangible objects, which is designated as "Confidential," "Proprietary," or some similar designation, or which the Receiving Party should reasonably understand to be confidential given the nature of the information and the circumstances of disclosure. Confidential Information includes, without limitation, business plans, financial data, product roadmaps, technical specifications, customer lists, and details regarding the Company's "AI PRODUCTIVITY & INSIGHTS FOR LIFE" initiatives.
          </p>
        </section>

        <section className="break-inside-avoid">
          <h2 className="text-[15px] font-display font-bold text-slate-900 mb-0.5">3. Non-Use and Non-Disclosure</h2>
          <p className="text-slate-700 mb-2">The Receiving Party shall:</p>
          <ul className="list-[lower-alpha] pl-6 space-y-1 text-slate-700">
            <li>hold the Disclosing Party's Confidential Information in strict confidence;</li>
            <li>use such Confidential Information solely for the Purpose of evaluating the Relationship; and</li>
            <li>not disclose such Confidential Information to any third party without the prior written consent of the Disclosing Party.</li>
          </ul>
        </section>

        <section className="break-inside-avoid">
          <h2 className="text-[15px] font-display font-bold text-slate-900 mb-0.5">4. Exclusions</h2>
          <p className="text-slate-700 mb-2">Confidential Information does not include information that:</p>
          <ul className="list-[lower-alpha] pl-6 space-y-1 text-slate-700">
            <li>is or becomes part of the public domain through no fault of the Receiving Party;</li>
            <li>was in the Receiving Party's possession prior to disclosure by the Disclosing Party;</li>
            <li>is rightfully received by the Receiving Party from a third party without restriction on disclosure; or</li>
            <li>is independently developed by the Receiving Party without use of the Disclosing Party's Confidential Information.</li>
          </ul>
        </section>

        <section className="break-inside-avoid">
          <h2 className="text-[15px] font-display font-bold text-slate-900 mb-0.5">5. Return of Materials</h2>
          <p className="text-slate-700">
            Upon termination of the Relationship or at the Disclosing Party's request, the Receiving Party shall promptly return or destroy all copies of the Disclosing Party's Confidential Information.
          </p>
        </section>

        <section className="break-inside-avoid">
          <h2 className="text-[15px] font-display font-bold text-slate-900 mb-0.5">6. No Obligation</h2>
          <p className="text-slate-700">
            Nothing in this Agreement shall be construed as an obligation on either party to enter into any further agreement or Relationship.
          </p>
        </section>
        
        {/* We can cut out Term to keep it to one page, or shrink text */}
        <section className="break-inside-avoid print:break-before-page print:pt-16">
          <h2 className="text-[15px] font-display font-bold text-slate-900 mb-0.5">7. Term & Governing Law</h2>
          <p className="text-slate-700">
            The obligations of confidentiality under this Agreement shall survive for a period of three (3) years from the date of disclosure. This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, without reference to its conflict of laws principles.
          </p>
        </section>
      </div>

      {/* Signature Block */}
      <div className="mt-4 pt-4 flex justify-between gap-12 break-inside-avoid">
        <div className="flex-1 space-y-4">
          <p className="font-bold text-slate-900">Open World Tech Inc.</p>
          <div className="space-y-4 text-sm pt-4">
            <p className="text-slate-700 flex"><span className="w-20 inline-block font-semibold">Name:</span> ______________________</p>
            <p className="text-slate-700 flex items-end"><span className="w-20 inline-block font-semibold">Signature:</span> ______________________</p>
            <p className="text-slate-700 flex"><span className="w-20 inline-block font-semibold">Title:</span> ______________________</p>
            <p className="text-slate-700 flex"><span className="w-20 inline-block font-semibold">Date:</span> ______________________</p>
          </div>
        </div>
        
        <div className="flex-1 space-y-4">
          <p className="font-bold text-slate-900 uppercase">Applicant</p>
          <div className="space-y-4 text-sm pt-4">
            <p className="text-slate-700 flex"><span className="w-20 inline-block font-semibold">Name:</span> ______________________</p>
            <p className="text-slate-700 flex items-end"><span className="w-20 inline-block font-semibold">Signature:</span> ______________________</p>
            <p className="text-slate-700 flex"><span className="w-20 inline-block font-semibold">Date:</span> ______________________</p>
          </div>
        </div>
      </div>
    </div>
  );
}
