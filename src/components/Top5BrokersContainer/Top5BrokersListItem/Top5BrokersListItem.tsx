import React, {FC} from 'react'
import styles from './Top5BrokersListItem.module.scss'
import { Broker } from '../../../data/brokers'
import { log } from 'console'

type Top5BrokersListItemProps = {
    broker: Broker,
    index: number
}

const Top5BrokersListItem:FC <Top5BrokersListItemProps> = ({broker, index}) => {
    
    const linkToSite = () => {
        window.open(
            broker.linkUrl,
            '_blank'
          );
    }
    
  return (
    <li onClick={linkToSite} className={`${styles.listItemContainer} ${index === 4 && styles.lastRow}`}>
        <div className={styles.iconAndNameContainer}>
            <span>.{index + 1}</span>
            <img src={broker.logoUrl}/>
            <span className={styles.brokerName}>{broker.name}</span>
        </div>
        <div className={styles.score}>
            {broker.score}
        </div>
    </li>
  )
}

export default Top5BrokersListItem