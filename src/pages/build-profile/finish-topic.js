import React, { useState } from "react";
import { Link } from "gatsby";
import style from "./buildprofile.module.scss";
import Layout from "../../components/layout";
import LinkCard from "../../components/linkcard";
import Button from "../../components/button";
import IconArrowCircleRight from "../../svgs/icons/icon-arrow-circle-right.svg";
import IconCheckCircle from "../../svgs/icons/icon-check-circle.svg";
import SupportIconSelfCare from "../../svgs/icons/icon-SelfCare.svg";
import SupportIconParenting from "../../svgs/icons/icon-ParentingStrengths.svg";
import Checkbox from "../../components/checkbox";

const BuildProfileFinishTopicPage = props => {
  const [disabledButton, toggleDisabledButton] = useState(true);
  return (
    <Layout activePage={props.uri} showNotification>
      <section className={`${style.buildProfilePage} textCenter`}>
        <h1>
          Build Your Family
          <br />
          Support Profile
        </h1>
        <p className={style.subtitle}>
          Now that you&apos;ve selected your topics we&apos;re going to ask you
          a few questions for each one before finalizing your profile to share
          with providers.
        </p>
        <div className={style.linkCardContainer}>
          <LinkCard>
            <div className={style.cardContent}>
              <div className={style.col20}>
                <SupportIconSelfCare />
              </div>
              <div className={style.col80}>
                <h4>Self Care and Mental Health</h4>
                <p>
                  Take care of yourself so you can take care of the ones you
                  love.
                </p>
                <span className={style.question}>
                  You&apos;ve completed this topic <IconCheckCircle />
                </span>
              </div>
            </div>
            <div className={style.col100}>
              <hr className="hr-thick-black" />
            </div>
            <div className={style.cardContent}>
              <div className={style.col20}></div>
              <div className={style.col80}>
                <p className={style.subTitle}>
                  Here&apos;s what you said your family is interested in:
                </p>
                <div className={style.answerDetail}>
                  <span className={style.question}>
                    Feeling more in control of stress, anger or mental health
                    challenges.
                  </span>
                  <p>
                    We fight over issues with money, which makes us stressed
                    around the kids. We&apos;re looking for someone to work with
                    them on communicating better.
                  </p>
                </div>
                <div className={`${style.answerDetail} ${style.mt50}`}>
                  <span className={style.question}>
                    Finding someone they feel comfortable talking things out
                    with.
                  </span>
                </div>
                <div className={style.answerDetail}>
                  <span className={style.question}>Looking to get connected to a therapist or counselor.</span>
                </div>
              </div>
            </div>
          </LinkCard>
        </div>
        <div className={style.linkCardContainer}>
          <LinkCard>
            <div className={style.cardContent}>
              <div className={style.col20}>
                <SupportIconParenting />
              </div>
              <div className={style.col80}>
                <h4>Building Parenting Strengths</h4>
                <p>
                  Get guidance and knowledge to build your unique parenting
                  strengths.
                </p>
                <Link to="/build-profile/start-topic">
                  <h5>
                    Get Started with this topic <IconArrowCircleRight />
                  </h5>
                </Link>
              </div>
            </div>
          </LinkCard>
        </div>
        <form className={style.form}>
          <div>
            <Checkbox
              label="I consent that these are the services and needs I am looking for."
              id="consent"
              onCheck={() => toggleDisabledButton(!disabledButton)}
            />
          </div>
          <div>
            <Link to="/build-profile/submitted">
              <Button disabled={disabledButton} medium>
                Submit Referral
              </Button>
            </Link>
          </div>
        </form>
        <div className={style.buttonLabel}>
          <i>You must complete at least 1 topic before saving</i>
        </div>
        <div className={style.goBack}>
          <b>Or, go back and </b>
          <Link to="/support-types">add more to your profile</Link>.
        </div>
      </section>
    </Layout>
  );
};

export default BuildProfileFinishTopicPage;
