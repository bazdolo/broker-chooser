import React, {FC} from 'react'
import styles from "./Tabs.module.scss"

type TabProps = {
    tradeType: 'isStock' | 'isForex',
    setTradeType: (string: 'isStock' | 'isForex') => void
}

const Tabs:FC <TabProps> = ({ tradeType, setTradeType }) => {    

  return (
    <div className={styles.tabContainer}>
        <div onClick={() => setTradeType('isStock')} className={`${styles.stockTabContainer} ${tradeType === "isStock" && styles.selected}`}>
            Stock
        </div>
        <div onClick={() => setTradeType('isForex')} className={`${styles.forexTabContainer} ${tradeType === "isForex" && styles.selected}`}>
            Forex
        </div>
    </div>
  )
}

export default Tabs