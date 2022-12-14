import React from "react";
import style from "./support-types.module.scss";
import Layout from "../../components/layout";
import LinkCard from "../../components/linkcard";
import SupportIcon1 from "../../svgs/icons/icon-SelfCare.svg";
import SupportIcon2 from "../../svgs/icons/icon-FamilyConflict.svg";
import SupportIcon3 from "../../svgs/icons/icon-ParentingStrengths.svg";
import SupportIcon4 from "../../svgs/icons/icon-BasicNeeds.svg";
import SupportIcon5 from "../../svgs/icons/icon-SupportingKids.svg";
import SupportIcon6 from "../../svgs/icons/icon-NavigatingACS.svg";
import SupportIcon7 from "../../svgs/icons/icon-PartnerViolence.svg";
import SupportIcon8 from "../../svgs/icons/icon-DrugsAlcohol.svg";
import SupportIcon9 from "../../svgs/icons/icon-NavigatingImmigration.svg";
import Button from "../../components/button";
import { Link } from "gatsby";

const SupportTypesPage = props => {
  const cards = [
    {
      cardIcon: <SupportIcon1 />,
      title: "Self Care and Mental Health",
    },
    {
      cardIcon: <SupportIcon2 />,
      title: "Overcoming Family Conflict",
    },
    {
      cardIcon: <SupportIcon3 />,
      title: "Building Parenting Strengths",
    },
    {
      cardIcon: <SupportIcon4 />,
      title: "Meeting Basic Needs",
    },
    {
      cardIcon: <SupportIcon5 />,
      title: "Supporting Kids at School",
    },
    {
      cardIcon: <SupportIcon6 />,
      title: "Navigating ACS, Schools or Courts",
    },
    {
      cardIcon: <SupportIcon7 />,
      title: "Healing from Partner Violence",
    },
    {
      cardIcon: <SupportIcon8 />,
      title: "Recovering from Drug or Alcohol Use",
    },
    {
      cardIcon: <SupportIcon9 />,
      title: "Navigating Immigration",
    },
  ];
  return (
    <Layout activePage={props.uri}>
      <section className={style.supportTypesPage}>
        <h1 className={`textCenter ${style.title}`}>Types of Family Support</h1>
        <p className={`textCenter ${style.subtitle}`}>
          Every family is unique. Learn more about the types of support
          available and begin building your profile.
        </p>
        <div className={style.supportCardContainer}>
          {cards.map(({ cardIcon, title }) => (
            <div className={style.supportCard} key={title}>
              <LinkCard supportType>
                {cardIcon}
                <h4>{title}</h4>
                <div className={style.buttonContainer}>
                  <Link to="/support-types/alert">
                    Learn More
                  </Link>
                  <Link to="/support-types/profile-added">
                    Add to Profile
                  </Link>
                </div>
              </LinkCard>
            </div>
          ))}
        </div>
        <div className={`textCenter ${style.buildButton}`}>
          <div>
            <Button>Go to Profile Builder</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SupportTypesPage;
