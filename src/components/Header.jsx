import React from 'react'
import styles from '../assets/styleModules/header.module.css'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1>AnalyticsRe</h1>
        <Navbar />
    </header>
  )
}

export default Header