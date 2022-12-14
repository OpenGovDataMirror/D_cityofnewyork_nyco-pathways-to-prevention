import React from "react";
import { Link } from "gatsby";
import style from "./index.module.scss";
import Layout from "../components/layout";
import Button from "../components/button";
import ParentsImage1 from "../svgs/images/ACS-Illustration-01.svg";
import BubbleText1 from "../svgs/icons/home-bubble-1.svg";
import BubbleText2 from "../svgs/icons/home-bubble-2.svg";
import BubbleText3 from "../svgs/icons/home-bubble-3.svg";
import BubbleText4 from "../svgs/icons/home-bubble-4.svg";
import BubbleText5 from "../svgs/icons/home-bubble-5.svg";
import BubbleText6 from "../svgs/icons/home-bubble-6.svg";
import BubbleText7 from "../svgs/icons/home-bubble-7.svg";
import BubbleText8 from "../svgs/icons/home-bubble-8.svg";
import BubbleText9 from "../svgs/icons/home-bubble-9.svg";
import BubbleText10 from "../svgs/icons/home-bubble-10.svg";
import BubbleText11 from "../svgs/icons/home-bubble-11.svg";
import BubbleText12 from "../svgs/icons/home-bubble-12.svg";
import ArrowCircleRight from "../svgs/icons/icon-arrow-circle-right.svg";
import ParentsImage2 from "../svgs/images/ACS-Illustration-02.svg";
import LinkCard from "../components/linkcard";

const IndexPage = () => (
  <Layout>
    <section className={style.homePage}>
      <div className={style.col}>
        <h1 className={style.mainTitle}>
          It&apos;s okay to not have all the answers as a parent.
        </h1>
        <p className={style.subtitle}>
          Family support connects your family with a case planner who will have
          your back no mater what challenges you face.
        </p>
        <ul>
          <li>Support is free</li>
          <li>Any family with a child 0 - 18 is eligible</li>
          <li>Available regardless of immigration status</li>
        </ul>
        <Link to="/program-info/journey"><Button medium>Learn More</Button></Link>
      </div>
      <div className={style.col}>
        <div className={style.backgroundImage}>
          <BubbleText1 />
          <BubbleText2 />
          <BubbleText3 />
          <BubbleText4 />
          <BubbleText5 />
          <BubbleText6 />
          <BubbleText7 />
          <BubbleText8 />
          <BubbleText9 />
          <BubbleText10 />
          <BubbleText11 />
          <BubbleText12 />
        </div>
        <div className={style.frontImage}>
          <ParentsImage1 />
        </div>
      </div>
    </section>
    <section className={style.homePage}>
      <h1>
        Case Planners have your
        <br />
        family&apos;s back.
      </h1>
      <div className={style.row}>
        <div className={style.col}>
          <LinkCard linkTo="/build-profile/init">
            <div className={style.casePlannersCard}>
              <p className={style.description}>
                Case Planners build relationships to learn what matters to each
                individual they work with.{" "}
                <b>
                  Get started by building a profile based on your families needs
                  <span>
                    <ArrowCircleRight />
                  </span>
                </b>
              </p>
              <ParentsImage2 />
            </div>
          </LinkCard>
        </div>
        <div className={`${style.col} ${style.list}`}>
          <div>
            <h5>Talk things out</h5>
            with staff that are trained to listen
          </div>
          <hr className="hr-thick-black" />
          <div>
            <h5>Connect to other families</h5>
            through classes and parenting groups
          </div>
          <hr className="hr-thick-black" />
          <div>
            <h5>Document family progress</h5>
            to work toward closing ACS cases
          </div>
          <hr className="hr-thick-black" />
          <div>
            <h5>Connect with resources</h5>
            like benefits, tutoring, doctors and more
          </div>
          <hr className="hr-thick-black" />
          <div>
            <h5>Set goals and make plans</h5>
            that fit in your family&apos;s day-to-day life
          </div>
        </div>
      </div>
    </section>
    <section className={style.mapBackground}>
      <LinkCard linkTo="/providers">
        <div className={`textCenter ${style.providersDescription}`}>
          <h4>Providers are in every neighborhood in NYC.</h4>
          <p>
            Workers meet you at home, in the community, and at their office.
          </p>
          <b className={style.smallText}>Find a provider near you</b>
        </div>
      </LinkCard>
    </section>
  </Layout>
);

export default IndexPage;
