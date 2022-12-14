import React from "react";
import style from "./support-types.module.scss";
import SupportIcon1 from "../../svgs/icons/icon-SelfCare.svg";
import IconCloseCircle from "../../svgs/icons/icon-close-circle.svg";
import Button from "../../components/button";
import { Link } from "gatsby";
import ModalAlert from "../../components/modalalert";
import SupportTypesPage from "./index";

const SupportTypesAlertPage = () => {
  return (
    <>
      <ModalAlert linkBack="/support-types">
        <div className={style.modalDescription}>
          <div className={style.col20}>
            <SupportIcon1 />
          </div>
          <div className={style.col80}>
            <h4>Self Care and Mental Health</h4>
            <p>
              Take care of yourself so you can take care of the ones you love.
            </p>
            <h5>Goals families have worked on:</h5>
            <ul>
              <li>
                Feeling more in control of{" "}
                <b>stress, anger or mental health challenges</b>.
              </li>
              <li>
                Finding someone they feel comfortable <b>talking things out</b>{" "}
                with.
              </li>
              <li>
                Looking to get connected to a <b>therapist or counselor</b>.
              </li>
              <li>
                <b>Meeting other parents</b> going through similar experiences.
              </li>
              <li>
                Finding <b>therapy or counseling for my child&apos;s</b> mental
                health challenges.
              </li>
            </ul>
            <Link to="/support-types/profile-added">
              <Button medium>Add to Profile</Button>
            </Link>
            <Link to="/support-types">
              <b>Close</b>{" "}
              <span className={style.icon}>
                <IconCloseCircle />
              </span>
            </Link>
          </div>
        </div>
      </ModalAlert>
      <SupportTypesPage />
    </>
  );
};

export default SupportTypesAlertPage;
