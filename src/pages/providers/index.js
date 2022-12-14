import React from "react";
import { Link } from "gatsby";
import style from "./providers.module.scss";
import Layout from "../../components/layout";
import Input from "../../components/input";
import LinkCard from "../../components/linkcard";
import SearchIconCircle from "../../svgs/icons/icon-search-circle.svg";
import IconPlusCircle from "../../svgs/icons/icon-plus-circle.svg";
import AAFSCLogo from "../../images/providers-logo-AAFSC.png";
import ShelteringArmsLogo from "../../images/providers-logo-ShelteringArms.png";
import ChildCenterLogo from "../../images/providers-logo-TheChildCenter.png";
import BanaProfileImage from "../../images/providers-pointofcontact-Bana.png";
import MikaylaProfileImage from "../../images/providers-pointofcontact-Mikayla.png";

const ProvidersIndexPage = props => (
  <Layout activePage={props.uri}>
    <section className={style.providersPage}>
      <h1 className={`textCenter ${style.title}`}>
        Find a family support
        <br /> provider near you
      </h1>
      <p className={`textCenter ${style.subtitle}`}>
        Prevention Providers are community-based organizations located across
        New York City that provide a variety of free services to help
        individuals and families to navigate and overcome challenges.
      </p>
      <div className={style.inputViewSection}>
        <div className={style.inputContainer}>
          <Input icon={<SearchIconCircle />} />
          <span className={style.locationLabel}>Use current location</span>
        </div>
        <div className={style.viewType}>
          View as:{" "}
          <div className={style.navItems}>
            <Link to="/providers">
              <div className={style.active}>
                List <hr />
              </div>
            </Link>
            <Link to="/providers/map-view">Map</Link>
          </div>
        </div>
      </div>
      <div className={style.filters}>
        <Link to="/providers/filter-view">
          <span>
            <IconPlusCircle />
          </span>
          Show More Filters
        </Link>
      </div>
      <div className={style.linkCardContainer}>
        <LinkCard>
          <div className={style.linkCardContent}>
            <h3>Arab American Family Support Center</h3>
            <div className={style.dFlex}>
              <div className={style.col70}>
                <div className={style.row}>
                  <div>Address:</div>
                  <div>
                    150 Court Street, 3rd Fl.
                    <br />
                    Brooklyn, NY 11201
                  </div>
                </div>
                <div className={style.row}>
                  <div>Phone:</div>
                  <div>718-643-8000</div>
                </div>
                <div className={style.row}>
                  <div>Hours:</div>
                  <div>
                    Mon-Thu: 9am - 5pm
                    <br />
                    Fri: 10am - 6pm
                  </div>
                </div>
                <div className={style.row}>
                  <div>Languages:</div>
                  <div>English, Arabic, Spanish</div>
                </div>
                <div className={style.row}>
                  <div>Point of Contact:</div>
                  <div className={style.dFlex}>
                    <div className={style.profilePhoto}>
                      <img src={BanaProfileImage} alt="Bana Alani" />
                    </div>
                    <div className={style.contactInfo}>
                      Bana Alani,
                      <br />
                      balanil@aafscny.org
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style.col30} ${style.imageContainer}`}>
                <img src={AAFSCLogo} alt="AAFSC logo" />
              </div>
            </div>
          </div>
        </LinkCard>
      </div>
      <div className={style.linkCardContainer}>
        <LinkCard linkTo="/providers/sheltering-arms">
          <div className={style.linkCardContent}>
            <h3>Sheltering Arms</h3>
            <div className={style.dFlex}>
              <div className={style.col70}>
                <div className={style.row}>
                  <div>Address:</div>
                  <div>
                    150 Court Street, 3rd Fl.
                    <br />
                    Brooklyn, NY 11201
                  </div>
                </div>
                <div className={style.row}>
                  <div>Phone:</div>
                  <div>718-526-2400</div>
                </div>
                <div className={style.row}>
                  <div>Hours:</div>
                  <div>
                    Mon, Tue, Thu: 9am - 5pm
                    <br />
                    Wed: 9am - 9pm
                  </div>
                </div>
                <div className={style.row}>
                  <div>Languages:</div>
                  <div>English, Spanish</div>
                </div>
                <div className={style.row}>
                  <div>Point of Contact:</div>
                  <div className={style.dFlex}>
                    <div className={style.profilePhoto}>
                      <img src={MikaylaProfileImage} alt="Mikayla Terrell" />
                    </div>
                    <div className={style.contactInfo}>
                      Mikayla Terrell,
                      <br />
                      mterrell@shelteringarms.com
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style.col30} ${style.imageContainer}`}>
                <img src={ShelteringArmsLogo} alt="Sheltering Arms logo" />
              </div>
            </div>
          </div>
        </LinkCard>
      </div>
      <div className={style.linkCardContainer}>
        <LinkCard>
          <div className={style.linkCardContent}>
            <h3>The Child Center of NY</h3>
            <div className={style.dFlex}>
              <div className={style.col70}>
                <div className={style.row}>
                  <div>Address:</div>
                  <div>
                    89-56 162nd Street
                    <br />
                    3rd Floor Jamaica 11377
                  </div>
                </div>
                <div className={style.row}>
                  <div>Phone:</div>
                  <div>718-643-8000</div>
                </div>
                <div className={style.row}>
                  <div>Hours:</div>
                  <div>
                    Mon, Tue, Thu: 9am - 5pm
                    <br />
                    Wed: 9am - 9pm
                  </div>
                </div>
                <div className={style.row}>
                  <div>Languages:</div>
                  <div>English, Spanish</div>
                </div>
                <div className={style.row}>
                  <div>Point of Contact:</div>
                  <div className={style.dFlex}>
                    <div className={style.profilePhoto}>
                      <img src={MikaylaProfileImage} alt="Mikayla Terrell" />
                    </div>
                    <div className={style.contactInfo}>
                      Mikayla Terrell,
                      <br />
                      mterrell@shelteringarms.com
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${style.col30} ${style.imageContainer}`}>
                <img src={ChildCenterLogo} alt="Child Center logo" />
              </div>
            </div>
          </div>
        </LinkCard>
      </div>
    </section>
  </Layout>
);

export default ProvidersIndexPage;
