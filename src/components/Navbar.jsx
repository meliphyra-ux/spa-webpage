import React from 'react'
import styles from '../assets/styleModules/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a href='#home'>Home</a>
        <a href='#home'>Case Studies</a>
        <a href='#home'>Contact</a>
    </nav>
  )
}

export default Navbar