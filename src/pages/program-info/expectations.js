import React from "react";
import style from "./programinfo.module.scss";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import FamilyImage from "../../svgs/images/ACS-Illustration-05.svg";

const ExpectationsPage = props => (
  <Layout activePage={props.uri}>
    <section className={style.programInfoPage}>
      <div className={style.col30}>
        <Sidebar currentPage={props.uri} />
      </div>
      <div className={style.col70}>
        <h5 className={style.preTitle}>For Families with ACS Cases:</h5>
        <h2>How support can help your ACS case</h2>
        <FamilyImage />
        <hr className="hr-thin-black" />
        <h4>Family support works to address the challenges that led to ACS cases</h4>
        <ul className={style.unorderedList}>
          <li>
            Families are connected to support to work on many topics, from a child's attendance at school to safety at the home.
          </li>
          <li>
            96 out of 100 families that complete a family support program don't have another ACS case.
          </li>
          <li>
            Support works with families to become stronger and avoid future ACS cases.
          </li>
        </ul>
        <h4>Family support Locations are contracted by ACS, but are not part of ACS</h4>
        <ul className={style.unorderedList}>
          <li>
            Providers are paid by ACS to provide support programs that have been proven to work with families.
          </li>
          <li>
            Family Support Workers share your family's progress to ACS
          </li>
          <li>
            As part of services, family support workers will provide updates to ACS
          </li>
          <li>
            These updates show that your family is receiving services and is working on the issue that led to an ACS case.
          </li>
        </ul>
        <h4>Case Planners decide with ACS when to close cases</h4>
        <ul className={style.unorderedList}>
          <li>
            Once your family has made enough progress on your goals, the family support worker will contact ACS to start the process of closing the case.
          </li>
          <li>
            The length of services depends on what each family is dealing with. Many families get services for 6 months to a year.
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default ExpectationsPage;
