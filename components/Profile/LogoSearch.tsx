import React from 'react'
import styles from './LogoSearch.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

const LogoSearch = () => {
  return (
    <div className={styles.logoSearch}>
      <img src="/images/logo.png" alt="logo" />
      <div className={styles.search}>
        <input type="text" placeholder="#Explore" />
        <div className={styles.searchIcon}>
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
