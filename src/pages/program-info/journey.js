import React from "react";
import { Link } from "gatsby";
import style from "./programinfo.module.scss";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import FamilyImage from "../../svgs/images/ACS-Illustration-03.svg";
import CircleIcon1 from "../../svgs/icons/icon-1.svg";
import CircleIcon2 from "../../svgs/icons/icon-2.svg";
import CircleIcon3 from "../../svgs/icons/icon-3.svg";
import CircleIcon4 from "../../svgs/icons/icon-4.svg";
import CircleIcon5 from "../../svgs/icons/icon-5.svg";
import CircleIcon6 from "../../svgs/icons/icon-6.svg";

const JourneyPage = props => (
  <Layout activePage={props.uri}>
    <section className={style.programInfoPage}>
      <div className={style.col30}>
        <Sidebar currentPage={props.uri} />
      </div>
      <div className={style.col70}>
        <h5 className={style.preTitle}>For Families with ACS Cases:</h5>
        <h2>Get Connected to Support</h2>
        <FamilyImage />
        <hr className="hr-thin-black" />
        <div className={style.listTitle}>
          <CircleIcon1 />
          <h4>Show your family&apos;s interest</h4>
        </div>
        <p className={style.listDescription}>
          Tell your ACS worker that your family is interested in finding support
          services
        </p>
        <div className={style.listTitle}>
          <CircleIcon2 />
          <h4>Learn more and share your family&apos;s goals</h4>
        </div>
        <p className={style.listDescription}>
          Learn about what services are available. Share what matters to your
          family, like better communication, kids succeeding in school or other
          goals. <a>Build your family profile.</a>
        </p>
        <div className={style.listTitle}>
          <CircleIcon3 />
          <h4>ACS looks for a support provider</h4>
        </div>
        <p className={style.listDescription}>
          ACS will fill out paperwork to connect your family to support. They
          will work to find a support location and case planner for your family.
          For most families, it takes about 2 weeks for ACS to find a support
          provider.{" "}
          <a>
            Learn more about support providers and services they offer.
          </a>
        </p>
        <div className={style.listTitle}>
          <CircleIcon4 />
          <h4>Get matched to a provider</h4>
        </div>
        <p className={style.listDescription}>
          Depending on the family's needs, ACS will find a support provider that
          will connect a family to free services that builds family strengths
          and help overcome challenges.
        </p>
        <div className={style.listTitle}>
          <CircleIcon5 />
          <h4>Attend a transition meeting</h4>
        </div>
        <p className={style.listDescription}>
          Your ACS worker will set a time to meet with your family and new case
          planner. In this meeting you can go over goals, have a change to ask
          quesions, and sign up for services.
        </p>
        <div className={style.listTitle}>
          <CircleIcon6 />
          <h4>Get started with services</h4>
        </div>
        <p className={style.listDescription}>
          Start working with your family&apos;s case planner on goals that matter to
          you.
        </p>
      </div>
    </section>
  </Layout>
);

export default JourneyPage;
