import React from 'react';

export default function Compliance() {
  return (
    <section id="compliance">
      <div className="container">
         <div className="section-title">
            <h2>Regulatory Disclosures &amp; Grievance Redressal</h2>
            <span className="section-sub">As mandated by AMFI, IRDAI, PFRDA and RBI for regulated financial
               distribution.</span>
         </div>
         <div className="grid cols-2">

            {/*  AMFI / SEBI  */}
            <article className="card" aria-labelledby="comp-amfi">
               <span className="badge">Mutual Funds — AMFI / SEBI</span>
               <h3 id="comp-amfi">Mutual Fund Distribution</h3>
               <p>Vemuri Financial Services is an <b>AMFI-registered Mutual Fund Distributor</b> (ARN‑<span
                     className="muted">[ARN number]</span>, valid till <span className="muted">[validity date]</span>). We
                  facilitate distribution only and do not provide investment advice or portfolio management services
                  unless separately registered to do so.</p>
               <ul className="list">
                  <li>Mutual Fund investments are subject to market risks. Read all scheme related documents
                     carefully.</li>
                  <li>No assured or guaranteed returns are offered on any scheme.</li>
                  <li>Past performance is not indicative of future results.</li>
               </ul>
               <p style={{marginTop: '8px'}}><b>Grievance escalation:</b> Contact our Grievance Officer first (see
                  Contact section) → AMFI investor helpline → SEBI SCORES if unresolved.</p>
               <div className="svc-links">
                  <a className="chip" href="https://www.amfiindia.com/" target="_blank" rel="noopener noreferrer">🌐
                     AMFI</a>
                  <a className="chip" href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer">🌐 SEBI
                     SCORES</a>
               </div>
            </article>

            {/*  IRDAI  */}
            <article className="card" aria-labelledby="comp-irdai">
               <span className="badge">Insurance — IRDAI</span>
               <h3 id="comp-irdai">Insurance Distribution</h3>
               <p>Vemuri Financial Services is a registered Insurance Agent / Corporate Agent / POSP with IRDAI
                  (Registration No. <span className="muted">[IRDAI registration no.]</span>, valid till <span
                     className="muted">[validity date]</span>). <b>Insurance is the subject matter of solicitation.</b>
               </p>
               <ul className="list">
                  <li>For more details on risk factors, terms & conditions, read the product brochure before
                     concluding a sale.</li>
                  <li>IRDAI does not sell policies, invest premiums or announce bonuses — beware of fraudulent
                     calls/offers.</li>
               </ul>
               <p style={{marginTop: '8px'}}><b>Grievance escalation:</b> Insurer's grievance cell → our Grievance
                  Officer → IRDAI Bima Bharosa (Toll‑free 155255 / 1800‑4254‑732).</p>
               <div className="svc-links">
                  <a className="chip" href="https://bimabharosa.irdai.gov.in/" target="_blank" rel="noopener noreferrer">🌐
                     IRDAI Bima
                     Bharosa</a>
               </div>
            </article>

            {/*  PFRDA / NPS  */}
            <article className="card" aria-labelledby="comp-pfrda">
               <span className="badge">NPS — PFRDA</span>
               <h3 id="comp-pfrda">NPS Distribution</h3>
               <p>Vemuri Financial Services facilitates NPS onboarding as an authorised Point of Presence (POP) /
                  subscriber-facilitation channel registered with PFRDA (POP Reg. No. <span className="muted">[PFRDA POP
                     reg. no.]</span>). NPS returns are market-linked and <b>not guaranteed</b>
                  by PFRDA or the Government of India.</p>
               <ul className="list">
                  <li>Subscribers should read the NPS Offer Document and scheme information before investing.</li>
                  <li>PFRDA does not collect any charges directly from subscribers for grievance redressal.</li>
               </ul>
               <p style={{marginTop: '8px'}}><b>Grievance escalation:</b> POP grievance officer → CRA (NSDL/KFintech/CAMS)
                  → PFRDA Pension Sahayak Portal → NPS Trust Ombudsman (Toll‑free NPS: 1800 110 708).</p>
               <div className="svc-links">
                  <a className="chip" href="https://pensionsahayak.pfrda.org.in/" target="_blank"
                     rel="noopener noreferrer">🌐 Pension Sahayak
                     (PFRDA)</a>
               </div>
            </article>

            {/*  RBI  */}
            <article className="card" aria-labelledby="comp-rbi">
               <span className="badge">Loans — RBI</span>
               <h3 id="comp-rbi">Loan Referral Disclosure</h3>
               <p>For Loan Against Mutual Funds, Home Loan and Personal Loan services, Vemuri Financial Services acts
                  <b>only as a referral partner / Direct Selling Agent (DSA)</b> for RBI-regulated Banks and NBFCs
                  (e.g., our lending partners). We are <b>not a lender</b> and do not sanction, disburse or hold
                  custody of loan funds — all approvals, interest rates and disbursement remain solely at the
                  discretion of the respective RBI-regulated lender.
               </p>
               <ul className="list">
                  <li>Please read the Key Fact Statement (KFS) and loan agreement carefully before signing, as per
                     RBI's Fair Practices Code.</li>
                  <li>We do not charge you anything for referring you to a lending partner.</li>
               </ul>
               <p style={{marginTop: '8px'}}><b>Grievance escalation:</b> Lender's Nodal/Grievance Officer → RBI
                  Complaint Management System, CMS (Toll‑free 14448), if unresolved after 30 days.</p>
               <div className="svc-links">
                  <a className="chip" href="https://cms.rbi.org.in/" target="_blank" rel="noopener noreferrer">🌐 RBI
                     CMS Portal</a>
               </div>
            </article>

         </div>
         <p className="muted" style={{marginTop: '16px', fontSize: '.85rem'}}>Disclaimer: Registration numbers above are
            placeholders and will be updated with our current AMFI ARN, IRDAI and PFRDA POP registration details.
            Vemuri Financial Services does not guarantee returns on any investment, insurance or loan product; all
            products are offered by their respective regulated principals (AMCs, insurers, PFRDA-registered pension
            funds, banks &amp; NBFCs) and are subject to their terms, conditions and regulatory guidelines.</p>
      </div>
   </section>
  );
}