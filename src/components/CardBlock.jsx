import React from 'react'
import Card from './Card'
import styles from '../assets/styleModules/cardBlock.module.css'

import iconCode from '../assets/images/iconCode.svg'
import iconDiamond from '../assets/images/iconDiamond.svg'
import iconEye from '../assets/images/iconEye.svg'

const CardBlock = () => {
  return (
    <section className={styles.cardBlock}>
            <Card src={iconCode} 
            title="We create &amp; plan a customized content strategy for your blog"
            text="Get paid by your listeners, every month, predictably. No CPMs, and no scheduling required."
            />
            <Card src={iconDiamond} 
            title="We write articles that blend content with optimization"
            text="Get paid by your listeners, every month, predictably. No CPMs, and no scheduling required."
            />
            <Card src={iconEye} 
            title="We promote your blog posts so they can get backlinks"
            text="Get paid by your listeners, every month, predictably. No CPMs, and no scheduling required."
            />
    </section>
  )
}

export default CardBlock