import React from 'react'
import HeaderBroker from "../../components/HeaderBroker/HeaderBroker"
import BrokerListContainer from "../../components/BrokerListContainer/BrokerListContainer"
import styles from "./PageContainer.module.scss"

const PageContainer = () => {

  const headerTitle = "Find the right broker and invest on your own"

  return (
    <div className={styles.pageContainer}>
        <HeaderBroker headerTitle={headerTitle}/>
        <BrokerListContainer/>
              
    </div>
  )
}

export default PageContainer