import React from "react";
import FAQBlock from "./FAQBlock";
import styles from "../assets/styleModules/FAQ.module.css"

const FAQ = () => {
    return(
        <section className={styles.FAQ}>
            <FAQBlock title="How long until we deliver your first blog" text="123"/>
            <FAQBlock title="How long until we deliver your first blog" text="123"/>
            <FAQBlock title="How long until we deliver your first blog" text="123"/>
            <FAQBlock title="How long until we deliver your first blog" text="123"/>
            <FAQBlock title="How long until we deliver your first blog" text="123"/>
        </section>
    )
}
export default FAQ