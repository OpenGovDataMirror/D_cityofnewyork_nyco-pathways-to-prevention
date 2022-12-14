import React from "react";
import style from "./stories.module.scss";
import Layout from "../components/layout";
import ArrowCircleRight from "../svgs/icons/icon-arrow-circle-right.svg";
import MoheebImage from "../images/story-img-1.png";
import SaniaImage from "../images/story-img-2.png";
import LinkCard from "../components/linkcard";

const StoriesPage = props => (
  <Layout activePage={props.uri}>
    <section className={style.storiesPage}>
      <h1 className={`textCenter ${style.title}`}>
        Read Other Family&apos;s
        <br /> Experiences
      </h1>
      <div className={style.row}>
        <LinkCard>
          <div className={style.cardContent}>
            <div className={style.col30}>
              <img src={MoheebImage} alt="Moheeb Profile" />
            </div>
            <div className={style.col70}>
              <h3>Moheeb, Age 13</h3>
              <p>
                "I was finally proud of myself. The center didn&apos;t give up on me.
                It took a while, but I was catching up. I also got to make some
                great friends."
              </p>
              <h5>
                Read this story
                <span className={style.icon}>
                  <ArrowCircleRight />
                </span>
              </h5>
            </div>
          </div>
        </LinkCard>
      </div>
      <div className={style.row}>
        <LinkCard>
          <div className={style.cardContent}>
            <div className={style.col30}>
              <img src={SaniaImage} alt="Sania Profile" />
            </div>
            <div className={style.col70}>
              <h3>Sania, Age 40</h3>
              <p>
                "The classes have helped me so much and my goal is to continue
                to learn English so that I can read, write and speak fluently."
              </p>
              <h5>
                Read this story
                <span className={style.icon}>
                  <ArrowCircleRight />
                </span>
              </h5>
            </div>
          </div>
        </LinkCard>
      </div>
    </section>
  </Layout>
);

export default StoriesPage;
