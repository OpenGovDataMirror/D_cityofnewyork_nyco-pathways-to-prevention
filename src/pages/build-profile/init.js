import React, { Fragment } from "react";
import { Link } from "gatsby";
import style from "./buildprofile.module.scss";
import Layout from "../../components/layout";
import Button from "../../components/button";
import PlusCircleWhite from "../../svgs/icons/icon-plus-circle-white.svg";
import SupportIcon1 from "../../svgs/icons/icon-PartnerViolence.svg";
import SupportIcon2 from "../../svgs/icons/icon-SelfCare.svg";
import SupportIcon3 from "../../svgs/icons/icon-BasicNeeds.svg";
import SupportIcon4 from "../../svgs/icons/icon-FamilyConflict.svg";
import SupportIcon5 from "../../svgs/icons/icon-SupportingKids.svg";
import SupportIcon6 from "../../svgs/icons/icon-DrugsAlcohol.svg";
import SupportIcon7 from "../../svgs/icons/icon-ParentingStrengths.svg";
import SupportIcon8 from "../../svgs/icons/icon-NavigatingACS.svg";
import SupportIcon9 from "../../svgs/icons/icon-NavigatingImmigration.svg";

const BuildProfileInitialPage = props => {
  const icons = [
    <SupportIcon1 />,
    <SupportIcon2 />,
    <SupportIcon3 />,
    <SupportIcon4 />,
    <SupportIcon5 />,
    <SupportIcon6 />,
    <SupportIcon7 />,
    <SupportIcon8 />,
    <SupportIcon9 />,
  ];
  return (
    <Layout activePage={props.uri}>
      <section className={`${style.buildProfilePage} textCenter`}>
        <h1>
          What Your Family Might
          <br />
          Want or Need
        </h1>
        <p className={style.subtitle}>
          Every family is unique and we are here to support you. Use the profile
          builder to choose from a list of topics and determine what your family
          may need. This information about your family will only be seen by ACS
          and will be used to help connect your family to resources.
        </p>
        <div className={style.box}>
          <Link to="/support-types">
            <Button medium>
              <>
                <span className={style.icon}>
                  <PlusCircleWhite />
                </span>
                Choose Topics
              </>
            </Button>
          </Link>
          <div className={style.iconsContainer}>
            {icons.map((icon, index) => (
              <Fragment key={index}>{icon}</Fragment>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BuildProfileInitialPage;
