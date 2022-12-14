import React from "react";
import style from "./programinfo.module.scss";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import FamilyImage from "../../svgs/images/ACS-Illustration-06.svg";

const MyCasePage = (props) => (
  <Layout activePage={props.uri}>
    <section className={style.programInfoPage}>
      <div className={style.col30}>
        <Sidebar currentPage={props.uri} />
      </div>
      <div className={style.col70}>
        <h5 className={style.preTitle}>For Families with ACS Cases:</h5>
        <h2>Choosing to get family support</h2>
        <FamilyImage />
        <hr className="hr-thick-black" />
        <div className={style.caseDescriptions}>
          <h3>Support strengthens families</h3>
          <p>
            Families who complete Family Support programs with all or some goals achieved, typically don&apos;t have another ACS case in the future.
          </p>
          <h3>Choosing services for different types of ACS cases</h3>
          <p>
            What happens when your family decides whether or not to get support depends on what your ACS worker has decided about the case.
          </p>
          <h4>Still being investigated</h4>
          <p>
            Your family can start the progress of getting services even if your ACS worker hasn&apos;t made a decision about the case yet.
          </p>
          <h4>Unfounded - No evidence for the case</h4>
          <p>
            Your family can choose whether or not you&apos;d like services and it won&apos;t affect your case.
          </p>
          <h4>Indicated - ACS found evidence for the case</h4>
          <p>
            Your family can choose wethere or not you&apos;d like services. However, if you choose not to get services, ACS may decide to take your family to court to address the issue of the case.
          </p>
          <h4>Court mandated</h4>
          <p>
            The court has decided that your family must receive services or you&apos;ll face further legal action.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default MyCasePage;
