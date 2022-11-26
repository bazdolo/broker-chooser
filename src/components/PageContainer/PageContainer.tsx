import React from 'react'
import HeaderBroker from "../../components/HeaderBroker/HeaderBroker"
import BrokerList from "../../components/BrokerList/BrokerList"
import Top5BrokersContainer from '../Top5BrokersContainer/Top5BrokersContainer'
import styles from "./PageContainer.module.scss"

const PageContainer = () => {

  const headerTitle = "Find the right broker and invest on your own"

  return (
    <div className={styles.pageContainer}>
        <HeaderBroker headerTitle={headerTitle}/>
        <div className={styles.listsLayout}>
          <BrokerList/>
          <Top5BrokersContainer />  
        </div>
            
    </div>
  )
}

export default PageContainer