import React from "react";
import { Link } from "gatsby";
import style from "./providers.module.scss";
import Layout from "../../components/layout";
import Input from "../../components/input";
import SearchIconCircle from "../../svgs/icons/icon-search-circle.svg";
import IconPlusCircle from "../../svgs/icons/icon-plus-circle.svg";
import IconMapPin from "../../svgs/icons/icon-map-pin.svg";
import IconMapPinCluster from "../../svgs/icons/icon-map-pin-cluster.svg";
import ProvidersMap from "../../images/providers-map.png";

const ProvidersMapViewPage = props => (
  <Layout activePage={props.uri}>
    <section className={`textCenter ${style.providersPage}`}>
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
            <Link to="/providers">List</Link>
            <Link to="/providers/map-view">
              <div className={style.active}>
                Map <hr />
              </div>
            </Link>
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
      <div>
        <div className={style.mapPins}>
          <IconMapPin />
          <IconMapPin />
          <IconMapPin />
          <IconMapPin />
          <IconMapPin />
          <IconMapPin />
          <IconMapPinCluster />
        </div>
        <img
          alt="Providers map showing location pins"
          className={style.map}
          src={ProvidersMap}
        />
      </div>
    </section>
  </Layout>
);

export default ProvidersMapViewPage;
