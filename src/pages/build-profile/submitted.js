import React from "react";
import style from "./buildprofile.module.scss";
import Layout from "../../components/layout";
import LinkCard from "../../components/linkcard";
import Button from "../../components/button";
import SupportIconSelfCare from "../../svgs/icons/icon-SelfCare.svg";
import SupportIconParenting from "../../svgs/icons/icon-ParentingStrengths.svg";
import IconEmail from "../../svgs/icons/icon-email.svg";
import IconDownload from "../../svgs/icons/icon-download.svg";
import IconPhone from "../../svgs/icons/icon-text.svg";

const BuildProfileSubmittedPage = props => {
  return (
    <Layout activePage={props.uri} showNotification>
      <section className={`${style.buildProfilePage} textCenter`}>
        <h1>Family Support Profile</h1>
        <p className={style.subtitle}>
          Your referral has been successfully submitted. Here&apos;s what you
          said your family is interested in:
        </p>
        <div className={style.linkCardContainer}>
          <LinkCard disabled>
            <div className={style.submittedContent}>
              <div className={`${style.cardContent} ${style.submitted}`}>
                <div className={style.col20}>
                  <SupportIconSelfCare />
                </div>
                <div className={style.col80}>
                  <h4 className={style.mb30}>Self Care and Mental Health</h4>
                  <div className={style.answerDetail}>
                    <span className={style.question}>
                      Feeling more in control of stress, anger or mental health
                      challenges.
                    </span>
                    <p>
                      We fight over issues with money, which makes us stressed
                      around the kids. We&apos;re looking for someone to work
                      with them on communicating better.
                    </p>
                  </div>
                  <div className={style.answerDetail}>
                    <span className={style.question}>
                      Finding someone they feel comfortable talking things out
                      with.
                    </span>
                  </div>
                  <div className={style.answerDetail}>
                    <span className={style.question}>
                      Looking to get connected to a therapist or counselor.
                    </span>
                  </div>
                  <hr className={`hr-thick-black ${style.divider}`} />
                </div>
              </div>
              <div className={`${style.cardContent} ${style.submitted}`}>
                <div className={style.col20}>
                  <SupportIconParenting />
                </div>
                <div className={style.col80}>
                  <h4 className={style.mb30}>Building Parenting Strengths</h4>
                  <div className={style.answerDetail}>
                    <span className={style.question}>Getting counseling for family conflicts</span>
                  </div>
                  <div className={style.answerDetail}>
                    <span className={style.question}>Parenting advice for disciplining children.</span>
                  </div>
                </div>
              </div>
            </div>
          </LinkCard>
        </div>
        <h3>Finish by choosing one of the following:</h3>
        <div className={style.actionIcons}>
          <Button>
            <IconPhone />
            <h4>Text</h4>
          </Button>
          <Button>
            <IconEmail />
            <h4>Email</h4>
          </Button>
          <Button>
            <IconDownload />
            <h4>Download</h4>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default BuildProfileSubmittedPage;
