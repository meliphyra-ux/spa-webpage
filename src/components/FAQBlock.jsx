import React, {useState} from "react";
import Open from "../assets/images/open.svg"
import Close from "../assets/images/close.svg"
import styles from "../assets/styleModules/FAQBlock.module.css"

const FAQBlock = ({title, text}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <figure className={styles.FAQBlock}>
            <img src={isOpen ? Close : Open} width={30} height={30} alt="Open/Close button"
                 onClick={() => setIsOpen(!isOpen)}/>
            <h2>{title}</h2>
            {isOpen &&

            <p>{text}</p>

            }
            </figure>
    )
}
export default FAQBlock