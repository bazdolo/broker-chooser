import React, {FC} from 'react'
import styles from "./Tabs.module.scss"

type TabProps = {
    tradeType: 'isStock' | 'isForex',
    setTradeType: (string: 'isStock' | 'isForex') => void
}

const Tabs:FC <TabProps> = ({ tradeType, setTradeType }) => {

    console.log(tradeType);
    

  return (
    <div className={styles.tabContainer}>
        <div onClick={() => setTradeType('isStock')} className={`${styles.stockTabContainer} ${styles.selected}`}>
            Stock
        </div>
        <div onClick={() => setTradeType('isForex')} className={`${styles.forexTabContainer} ${styles.selected}`}>
            Forex
        </div>
    </div>
  )
}

export default Tabs