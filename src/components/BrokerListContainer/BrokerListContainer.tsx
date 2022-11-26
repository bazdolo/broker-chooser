import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../redux/store';
import { Broker } from '../../data/brokers'

import SearchInput from "../../components/BrokerListContainer/SearchInput/SearchInput";
import BrokerListItem  from './BrokerListItem/BrokerListItem';

import styles from "./BrokerListContainer.module.scss"

type BrokerListContainerProps = {
}


const BrokerListContainer = () => {

  const {exampleBrokerData} = useSelector((state: AppState) => state.brokerData)

  const [filteredBrokers, setFilteredBrokers] = useState<Broker[] | undefined>(exampleBrokerData)

  
  const handleInputChange = (text: string) => {
    const newFilteredBrokers = exampleBrokerData.filter((broker) => broker.name.toLowerCase().includes(text.toLowerCase()))
    setFilteredBrokers(newFilteredBrokers)
  }


  return (
    <div className={styles.brokerListContainer}>
      <SearchInput handleInputChange={handleInputChange}/>
      <ul>
        {filteredBrokers?.map((broker) => <BrokerListItem broker={broker} key={broker.id}/>)}
      </ul>
    </div>
  )
}

export default BrokerListContainer
