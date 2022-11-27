import React, { FC } from "react";
import { Broker } from "../../../data/brokers";
import styles from "./BrokerListItem.module.scss";

type BrokerListItemProps = {
  broker: Broker;
};

const BrokerListItem: FC<BrokerListItemProps> = ({ broker }) => {
  console.log(broker);

  return (
    <li className={styles.listItemContainer}>
      <div className={styles.nameLogoWrapper}>
        <img src={broker.logoUrl} className={styles.brokerIcon} />
        <span className={styles.brokerName}>{broker.name}</span>
      </div>
      <a href={broker.linkUrl} target="_blank" className={styles.visitButton}>
        Visit Broker
      </a>
    </li>
  );
};

export default BrokerListItem;
