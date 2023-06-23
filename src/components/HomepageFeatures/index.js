import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Integration",
    Svg: require("@site/static/img/link.svg").default,
    description: (
      <>
        MindKey integrations API builds the connection between MindKey and the
        customer’s existing applications. This enables companies to automate
        tasks, keep data synchronized, and integrate their programs and
        databases with MindKey as desired.
      </>
    ),
  },
  {
    title: "Recruiting",
    Svg: require("@site/static/img/recruitment.svg").default,
    description: (
      <>
        The API is used to retrieve vacancies and data for application forms,
        and can also receive submitted applications from candidates. It can be
        used on the customer’s recruitment webpage to integrate with MindKey
        recruitment, while affording a high degree of customizability.
      </>
    ),
  },
  {
    title: "System",
    Svg: require("@site/static/img/computer-settings.svg").default,
    description: <>Customize your installation.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
