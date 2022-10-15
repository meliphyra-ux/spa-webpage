import React from "react";
import styles from "../assets/styleModules/resultBlock.module.css";

const TemplateBlock = ({title, text, backgroundImg, aside = false}) => {
  return (
    <section className={styles.resultBlock} style={{
        backgroundImage: `url("${backgroundImg}")`,
        justifyContent: aside ? 'flex-end' : 'flex-start'
    }}>
      <article>
        <h1>{title}</h1>
        <p>
          {text}
        </p>
      </article>
    </section>
  );
};

export default TemplateBlock;
