import React, { useState, FC } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { Broker } from "../../data/brokers";
import Tabs from "./Tabs/Tabs";

import styles from "./Top5BrokersContainer.module.scss";
import Top5BrokersListItem from "./Top5BrokersListItem/Top5BrokersListItem";

const Top5BrokersContainer = () => {
  const { exampleBrokerData } = useSelector(
    (state: AppState) => state.brokerData
  );

  const [tradeType, setTradeType] = useState<"isStock" | "isForex">("isStock");

  const sortBrokersByScore = () => {
    return filterBrokersByTradeType().sort((a, b) => b.score - a.score);
  };

  const filterBrokersByTradeType = () => {
    const filteredExampleBrokerData = exampleBrokerData
      .filter((broker) => broker[tradeType])
      .filter((_, index) => index < 5);
    return filteredExampleBrokerData;
  };

  return (
    <div className={styles.Top5BrokersContainer}>
      <h2>Top 5 Brokers</h2>
      <Tabs tradeType={tradeType} setTradeType={setTradeType} />
      <ul>
        {sortBrokersByScore()?.map((broker, index) => (
          <Top5BrokersListItem
            broker={broker}
            index={index}
            key={broker.id}
            tradeType={tradeType}
          />
        ))}
      </ul>
    </div>
  );
};

export default Top5BrokersContainer;
