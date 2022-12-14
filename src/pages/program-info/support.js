import React from "react";
import style from "./programinfo.module.scss";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import FamilyImage from "../../svgs/images/ACS-Illustration-04.svg";

const SupportPage = props => (
  <Layout activePage={props.uri}>
    <section className={style.programInfoPage}>
      <div className={style.col30}>
        <Sidebar currentPage={props.uri} />
      </div>
      <div className={style.col70}>
        <h5 className={style.preTitle}>For Families with ACS Cases:</h5>
        <h2>ACS Case Support Staff and Providers</h2>
        <FamilyImage />
        <hr className="hr-thin-black" />
        <h3>ACS Staff</h3>
        <h4>ACS workers</h4>
        <ul className={style.unorderedList}>
          <li>Also called a Child Protective Specialist or CPS worker.</li>
          <li>
            Visits your home and talks with your family to respond to a report
            of suspected child abuse or neglect.
          </li>
          <li>
            Works with your family to find support services that keep everyone
            healthy, happy and safe.
          </li>
        </ul>
        <h4>Referral Consultants</h4>
        <ul className={style.unorderedList}>
          <li>
            Take info from your family and ACS worker to find the best program
            and support for your family.
          </li>
          <li>
            The process to find support takes most families around two weeks
          </li>
        </ul>
        <h4>Parent Advocates</h4>
        <ul className={style.unorderedList}>
          <li>Parents who have been throught the child welfare system</li>
          <li>
            Work with families to explain investigations, prepare for meetings
            and make sure the family's voice is included.
          </li>
          <li>
            Ask your ACS worker or call (212) 676-9421 if you'd like to be
            connected to a parent advocate
          </li>
        </ul>
        <hr className="hr-thin-black" />
        <h3>Family Support Staff</h3>
        <h4>Family Support Workers (Case Planners)</h4>
        <ul className={style.unorderedList}>
          <li>
            Work for community providers in every neighborhood of New York.
          </li>
          <li>
            They have college degrees and are trained in ways to work with
            families to set and meet goals.
          </li>
          <li>
            Case planners show family progress to ACS to make sure the goals of
            the case are being met.
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default SupportPage;
