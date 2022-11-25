import React from 'react'
import {useSelector} from "react-redux";
import HeaderBroker from "../../components/HeaderBroker/HeaderBroker"
import BrokerListContainer from "../../components/BrokerListContainer/BrokerListContainer"
import SearchInput from "../../components/BrokerListContainer/SearchInput/SearchInput";
import { BrokerListItem } from '../BrokerListContainer/BrokerListItem/BrokerListItem';
import styles from "./PageContainer.module.scss"
import { AppState } from '../../redux/store';

const PageContainer = () => {

  const headerTitle = "Find the right broker and invest on your own"


  const {exampleBrokerData} = useSelector((state: AppState) => state.brokerData)

    // console.log(exampleBrokerData);


  return (
    <div className={styles.pageContainer}>
        <HeaderBroker headerTitle={headerTitle}/>
          <BrokerListContainer>
              <SearchInput />
              <ul>
                {exampleBrokerData.map(() => <BrokerListItem />)}
              </ul>
        </BrokerListContainer>
    </div>
  )
}

export default PageContainer