import React from "react";
import { Link } from "gatsby";
import style from "./providers.module.scss";
import Layout from "../../components/layout";
import ShelteringArmsLogo from "../../images/providers-logo-ShelteringArms.png";
import MikaylaProfileImage from "../../images/providers-pointofcontact-Mikayla.png";
import ProviderMap from "../../images/provider-map.png";
import ProviderStaff1 from "../../images/provider-staff-1.png";
import ProviderStaff2 from "../../images/provider-staff-2.png";
import ProviderStaff3 from "../../images/provider-staff-3.png";
import ProviderStaff4 from "../../images/provider-staff-4.png";
import ProviderStaff5 from "../../images/provider-staff-5.png";
import ProviderStaff6 from "../../images/provider-staff-6.png";
import ProviderStaff7 from "../../images/provider-staff-7.png";
import ProviderStaff8 from "../../images/provider-staff-8.png";
import ProviderStaff9 from "../../images/provider-staff-9.png";
import LeftArrowHead from "../../svgs/icons/icon-caret-left.svg";
import IconSelfCare from "../../svgs/icons/icon-SelfCare.svg";
import IconFamilyConflict from "../../svgs/icons/icon-FamilyConflict.svg";
import IconParentingStrengths from "../../svgs/icons/icon-ParentingStrengths.svg";
import IconSupportingKids from "../../svgs/icons/icon-SupportingKids.svg";
import IconMapPinActive from "../../svgs/icons/icon-map-pin-active.svg";

const ProvidersIndexPage = props => (
  <Layout activePage={props.uri}>
    <section className={style.providersDetailPage}>
      <div className={style.smallBackText}>
        <Link to="/providers">
          <span>
            <LeftArrowHead />
          </span>
          Back to results
        </Link>
      </div>
      <div className={style.dFlex}>
        <div className={style.col70}>
          <h2>Sheltering Arms</h2>
          <div className={style.address}>
            <h4>150 Court Street, 3rd Fl.</h4>
            <h4>Brooklyn, NY 11201</h4>
          </div>
          <div className={style.dFlex}>
            <div className={style.col50}>
              <div className={style.info}>
                <div>Phone:</div>
                <div>718-526-2400</div>
              </div>
              <div className={style.info}>
                <div>Web:</div>
                <div>
                  <a
                    href="http://shelteringarmsny.org"
                    className={style.infoLink}
                  >
                    shelteringarmsny.org
                  </a>
                </div>
              </div>
              <div className={style.info}>
                <div>Languages:</div>
                <div>English, Spanish</div>
              </div>
              <div className={style.info}>
                <div>Point of Contact:</div>
                <div className={style.dFlex}>
                  <div className={style.profilePhoto}>
                    <img src={MikaylaProfileImage} alt="Mikayla Terrell" />
                  </div>
                  <div>
                    Mikayla Terrell,
                    <br />
                    <a
                      href="mterrell@shelteringarms.com"
                      className={style.infoLink}
                    >
                      mterrell@shelteringarms.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.col50}>
              <div className={style.info}>
                <div>Hours:</div>
                <div>Monday, 9am-5pm</div>
                <div>Tuesday, 9am-5pm</div>
                <div>Wednesday, 9am-9pm</div>
                <div>Thursday, 9am-5pm</div>
                <div>Friday, 9am-5pm</div>
                <div>Saturday, Closed</div>
                <div>Sunday, Closed</div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.col30} ${style.logoContainer}`}>
          <img
            src={ShelteringArmsLogo}
            className={style.borderShadow}
            alt="Sheltering Arms logo"
          />
        </div>
      </div>
      <div className={style.mapContainer}>
        <div className={style.mapPin}>
          <IconMapPinActive />
        </div>
        <img
          src={ProviderMap}
          className={style.map}
          alt="Location in map"
        />
      </div>
      <div className={style.dFlex}>
        <div className={style.col35}>
          <h4>Types of Support:</h4>
        </div>
        <div className={style.col65}>
          <div className={style.supportType}>
            <IconSelfCare />
            <h5>Self Care and Mental Health</h5>
          </div>
          <div className={style.supportType}>
            <IconFamilyConflict />
            <h5>Overcoming Family Conflict</h5>
          </div>
          <div className={style.supportType}>
            <IconParentingStrengths />
            <h5>Building Parenting Strengths</h5>
          </div>
          <div className={style.supportType}>
            <IconSupportingKids />
            <h5>Supporting Kids at School</h5>
          </div>
        </div>
      </div>
      <hr className={`hr-thick-black ${style.divider}`} />
      <div className={style.dFlex}>
        <div className={style.col35}>
          <h4>Other Offerings:</h4>
        </div>
        <div className={style.col65}>
          <div className={style.offeringDescription}>
            <h5>Education</h5>
            <p>
              We believe that every child deserves an equal chance at future
              success, beginning with the best quality education. We offer early
              childhood education, community schools, and afterschool programs.
            </p>
          </div>
          <div className={style.offeringDescription}>
            <h5>Youth Development</h5>
            <p>
              By connecting youth to positive and adult role models, by
              cultivating their skills and interests, and by creating
              opportunities for them to shine, we&apos;re positioning youth for
              success as healthy adults, strong leaders, and active citizens.
            </p>
          </div>
          <div className={style.offeringDescription}>
            <h5>Health &amp; Wellbeing</h5>
            <p>
              Our community wellbeing programs support the physical and mental
              health of children and adults, and foster the relationships needed
              in order to thrive.
            </p>
          </div>
        </div>
      </div>
      <hr className={`hr-thick-black ${style.divider}`} />
      <div className={style.dFlex}>
        <div className={style.col35}>
          <h4>Staff:</h4>
        </div>
        <div className={style.col65}>
          <div className={style.profileImages}>
            <div className={style.imageWithName}>
              <img src={ProviderStaff1} alt="" />
              Elizabeth
              <br /> McCarthy
            </div>
            <div className={style.imageWithName}>
              <img src={ProviderStaff2} alt="" />
              Dawn
              <br />
              Lewis
            </div>
            <div className={style.imageWithName}>
              <img src={ProviderStaff3} alt="" />
              Jane
              <br />
              Golden, ESQ.
            </div>
            <div className={style.imageWithName}>
              <img src={ProviderStaff4} alt="" />
              Anthony B.
              <br />
              Edwards
            </div>
            <div className={style.imageWithName}>
              <img src={ProviderStaff5} alt="" />
              Susan L.
              <br />
              Magazine
            </div>
            <div className={style.imageWithName}>
              <img src={ProviderStaff6} alt="" />
              Olutunde
              <br />
              Atanda-Ogunleye
            </div>
            <div className={style.imageWithName}>
              <img src={ProviderStaff7} alt="" />
              Jordan
              <br />
              Katon
            </div>
            <div className={style.imageWithName}>
              <img src={ProviderStaff8} alt="" />
              Carolyn
              <br />
              O&apos;Brien, LMSW
            </div>
            <div className={style.imageWithName}>
              <img src={ProviderStaff9} alt="" />
              Merideth
              <br />
              Sopher
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ProvidersIndexPage;
