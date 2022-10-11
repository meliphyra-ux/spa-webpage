import React from 'react'
import styles from '../assets/styleModules/card.module.css'

const Card = ({src, title, text}) => {
  return (
    <figure className={styles.card}>
        <img width={97} height={91} src={src} alt="Icon of card"/>
        <figcaption>{title}</figcaption>
        <p>{text}</p>
    </figure>
  )
}

export default Card