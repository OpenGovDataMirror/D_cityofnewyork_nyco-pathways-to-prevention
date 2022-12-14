import React from "react";
import style from "./providers.module.scss";
import ProvidersIndexPage from "./";
import ModalAlert from "../../components/modalalert";
import Input from "../../components/input";
import IconUpCircle from "../../svgs/icons/icon-chevron-circle-up.svg";
import IconDownCircle from "../../svgs/icons/icon-chevron-circle-down.svg";
import SearchIconCircle from "../../svgs/icons/icon-search-circle.svg";

const ProvidersFilterViewPage = () => (
  <>
    <ModalAlert linkBack="/providers">
      <div className={style.filterView}>
        <h3>Use the location search and filters to find family support providers near you:</h3>
        <div className={style.categoryContainer}>
          <h5>Location</h5>
          <IconUpCircle />
        </div>
        <Input icon={<SearchIconCircle />} />
        <hr className="hr-thick-black" style={{ marginTop: '28px' }} />
        <div className={style.categoryContainer}>
          <h5>Language</h5>
          <IconDownCircle />
        </div>
        <hr className="hr-thick-black" />
        <div className={style.categoryContainer}>
          <h5>Hours</h5>
          <IconDownCircle />
        </div>
        <hr className="hr-thick-black" />
        <div className={style.categoryContainer}>
          <h5>Program Type</h5>
          <IconDownCircle />
        </div>
        <hr className="hr-thick-black" />
        <div className={style.categoryContainer}>
          <h5>Onsite Services</h5>
          <IconDownCircle />
        </div>
        <hr className="hr-thick-black" />
      </div>
    </ModalAlert>
    <ProvidersIndexPage />
  </>
);

export default ProvidersFilterViewPage;
