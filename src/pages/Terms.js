import React from "react";
import { NavLink } from "react-router-dom";
import scrollToTop from "../includes/ScrollToTop";

const Terms = () => {
  scrollToTop(); //page load move top
  let pageName = "Terms & Conditions";
  return (
    <main className="subpageMain">
      <section className="subpageHeader">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="h1 p-0 m-0">{pageName}</h1>
            </div>
            <div className="col-md-6 align-self-center">
              <ul className="breadCrumb justify-content-md-end">
                <li>
                  <NavLink to="/"> Home</NavLink>
                </li>
                <li>
                  <NavLink to="">
                    <span className="active"> {pageName}</span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="subPageBody">
        <div className="container">
          <p>
            We care about data privacy and security. Please review our Privacy
            Policy.
          </p>
          <p>
            By using the Site, you agree to be bound by our Privacy Policy,
            which is incorporated into these Terms of Use. Please be advised the
            Site is hosted in the United States. If you access the Site from the
            European Union, Asia or any other region of the world with laws or
            other requirements governing personal data collection, use, or
            disclosure that differ from applicable laws in the United States,
            then through your continued use of the Site, you are transferring
            your data to the United States, and you expressly consent to have
            your data transferred to and processed in the United States.
            Further, we do not knowingly accept, request or solicit information
            from children or knowingly market to children. Therefore, in
            accordance with the U.S. Children’s Online Privacy Protection Act,
            if we receive actual knowledge that anyone under the age of 13 has
            provided personal information to us without the requisite and
            verifiable parental consent, we will delete that information from
            the Site as quickly as is reasonably practical.
          </p>
          <article>
            <h2 className="pb-3">
              Term and <span className="font-bold">Termination</span>
            </h2>
            <p>
              These Terms of Use shall remain in full force and effect while you
              use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS
              OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
              WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE
              (INCLUDING BLOCKING CERTAIN IP ADDRESSES) TO ANY PERSON FOR ANY
              REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH
              OF ANY REPRESENTATION, WARRANTY OR COVENANT CONTAINED IN THESE
              TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
              TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE ANY
              CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
              WARNING IN OUR SOLE DISCRETION.
            </p>
            <p>
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fake or borrowed name or the name of any third party even
              if you may be acting on behalf of the third party. In addition to
              terminating or suspending your account, we reserve the right to
              take appropriate legal action including without limitation
              pursuing civil, criminal and injunctive redress.
            </p>
          </article>

          <article>
            <h2 className="pb-3">
              Binding <span className="font-bold">Arbitration</span>
            </h2>
            <p>
              If the Parties are unable to resolve a Dispute through informal
              negotiations, the Dispute (except those Disputes expressly
              excluded below) will be finally and exclusively resolved by
              binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION,
              YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.
              The arbitration shall be commenced and conducted under the
              Commercial Arbitration Rules of the American Arbitration
              Association (“AAA”) and, where appropriate, the AAA’s
              Supplementary Procedures for Consumer Related Disputes (“AAA
              Consumer Rules”), both of which are available at the AAA website
              www.adr.org. Your arbitration fees and your share of arbitrator
              compensation shall be governed by the AAA Consumer Rules and,
              where appropriate, limited by the AAA Consumer Rules. The
              arbitration may be conducted in person, through the submission of
              documents, by phone, or online. The arbitrator will make a
              decision in writing, but need not provide a statement of reasons
              unless requested by either Party. The arbitrator must follow
              applicable law, and any award may be challenged if the arbitrator
              fails to do so. Except where otherwise required by the applicable
              AAA rules or applicable law, the arbitration will take place in
              __________ County, __________. Except as otherwise provided
              herein, the Parties may litigate in court to compel arbitration,
              stay proceedings pending arbitration or to confirm, modify, vacate
              or enter judgment on the award entered by the arbitrator.
            </p>
            <p>
              If for any reason, a Dispute proceeds in court rather than
              arbitration, the Dispute shall be commenced or prosecuted in the
              state and federal courts located in __________ County, __________,
              and the Parties hereby consent to, and waive all defenses of lack
              of personal jurisdiction, and forum non conveniens with respect to
              venue and jurisdiction in such state and federal courts.
              Application of the United Nations Convention on Contracts for the
              International Sale of Goods and the the Uniform Computer
              Information Transaction Act (UCITA) are excluded from these Terms
              of Use.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Terms;
