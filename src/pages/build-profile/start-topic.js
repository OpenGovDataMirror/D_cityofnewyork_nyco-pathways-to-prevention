import React, { useState } from "react";
import { Link } from "gatsby";
import style from "./buildprofile.module.scss";
import Layout from "../../components/layout";
import Button from "../../components/button";
import IconPlusCircle from "../../svgs/icons/icon-plus-circle.svg";
import IconCheckCircle from "../../svgs/icons/icon-check-circle.svg";
import SupportIconSelfCare from "../../svgs/icons/icon-SelfCare.svg";
import Radio from "../../components/radio";
import Textarea from "../../components/textarea";

const BuildProfileStartTopicPage = props => {
  const [showFormFields, toggleShowFormFields] = useState(false);
  const [showTextArea, toggleShowTextArea] = useState(false);
  const [showCheckbox, toggleShowCheckbox] = useState(false);

  const handleKeyPress = evt => callback => condition => {
    if (evt.key === "Enter") {
      callback(condition);
    }
  };
  return (
    <Layout activePage={props.uri} showNotification>
      <section className={`${style.buildProfilePage} textCenter`}>
        <h1>More about what your family is looking for:</h1>
        <div className={style.topic}>
          <div className={style.iconHeading}>
            <SupportIconSelfCare />
            <h3>Self Care and Mental Health</h3>
          </div>
          <div className={style.formTopicsContainer}>
            <div className={style.formTopic}>
              <span
                role="button"
                tabIndex={0}
                onKeyPress={evt =>
                  handleKeyPress(evt)(toggleShowFormFields)(!showFormFields)
                }
                onClick={() => toggleShowFormFields(!showFormFields)}
                className={`${style.toggler} ${
                  showFormFields ? style.rotateIcon : ""
                }`}
              >
                <IconPlusCircle /> Managing Stress{" "}
              </span>
              {showTextArea && <IconCheckCircle />}
            </div>
            {showTextArea && !showFormFields && (
              <div className={`${style.answerDetail} ${style.px25}`}>
                <h5>What makes your family interested in these services?</h5>
                <p>
                  We fight over issues with money, which makes us stressed
                  around the kids. We&apos;re looking for someone to work with
                  them on communicating better.
                </p>
              </div>
            )}
            <form
              className={`${style.formContent} ${
                showFormFields ? style.showFormContent : ""
              } ${showTextArea && showFormFields ? style.showTextArea : ""}`}
            >
              <div className={style.formFields}>
                <p>
                  Find ways to cope with stressful city life. Case planners have
                  a lot of different techniques, so everyone can find what works
                  for them.
                </p>
                <h5>Who can get this support:</h5>
                <ul>
                  <li>Kids</li>
                  <li>Adults</li>
                </ul>
                <div>
                  <h5>Interested in this type of support?</h5>
                  <Radio
                    name="interested"
                    options={[
                      {
                        id: "yes",
                        label: "Yes",
                        onClick: () => toggleShowTextArea(true),
                        checked: showTextArea,
                      },
                      {
                        id: "no",
                        label: "No",
                        onClick: () => toggleShowTextArea(false),
                        checked: false,
                      },
                    ]}
                  />
                </div>
                <h5>What makes your family interested in these services?</h5>
                <Textarea>
                  We fight over issues with money, which makes us stressed
                  around the kids. We&apos;re looking for someone to work with
                  them on communicating better.
                </Textarea>
              </div>
            </form>
            <hr className="hr-thick-black" />
            <div className={style.formTopic}>
              <span>
                <IconPlusCircle /> Finding a Therapist or Counselor
              </span>
            </div>
            <hr className="hr-thick-black" />
            <div className={style.formTopic}>
              <span
                role="button"
                tabIndex={0}
                onKeyPress={evt =>
                  handleKeyPress(evt)(toggleShowCheckbox)(true)
                }
                onClick={() => toggleShowCheckbox(true)}
              >
                <IconPlusCircle /> Talking Things Out
              </span>
              {showCheckbox && <IconCheckCircle />}
            </div>
            <hr className="hr-thick-black" />
            <div className={style.formTopic}>
              <span>
                <IconPlusCircle /> Connecting with Other Families
              </span>
              {showCheckbox && <IconCheckCircle />}
            </div>
          </div>
        </div>
        <Link to="/build-profile/finish-topic">
          <Button className={style.submitButton} medium>
            Finish this topic
          </Button>
        </Link>
      </section>
    </Layout>
  );
};

export default BuildProfileStartTopicPage;
