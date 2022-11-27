import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Broker } from "../../../data/brokers";
import styles from "./BrokerListItem.module.scss";
import { addEvent } from "../../../redux/eventDataSlice";
import { AppDispatch } from "../../../redux/store";
import {
  BROKER_SEARCH_LIST_ID,
  MeasurementId,
} from "../../../logic/event"; 
import {Event} from "../../../redux/eventDataSlice"


type BrokerListItemProps = {
  broker: Broker;
};

const BrokerListItem: FC<BrokerListItemProps> = ({ broker }) => {

  const dispatch = useDispatch<AppDispatch>();


  const handleEventOnClick = (
    type: "click" | "impression",
    brokerId: number,
    measurementId: MeasurementId
  ) => {
    dispatch(addEvent({ type, brokerId, measurementId }));
  }

  return (
    <li className={styles.listItemContainer}>
      <div className={styles.nameLogoWrapper}>
        <img src={broker.logoUrl} className={styles.brokerIcon} />
        <span className={styles.brokerName}>{broker.name}</span>
      </div>
      <a onClick={() => handleEventOnClick("click", broker.id, BROKER_SEARCH_LIST_ID)} href={broker.linkUrl} target="_blank" className={styles.visitButton}>
        Visit Broker
      </a>
    </li>
  );
};

export default BrokerListItem;
