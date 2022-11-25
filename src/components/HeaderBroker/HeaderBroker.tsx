import React from 'react'
import styles from './HeaderBroker.module.scss'

type HeaderBrokerProps = {
  headerTitle: string
}

const HeaderBroker = ({headerTitle}: HeaderBrokerProps) => {
  return (
    <h1 className={styles.headerContainer}>{headerTitle}</h1>
  )
}

export default HeaderBroker


