import React, { FC } from "react";
import styles from "./Top5BrokersListItem.module.scss";
import { useDispatch } from "react-redux";
import { addEvent } from "../../../redux/eventDataSlice";
import { Broker } from "../../../data/brokers";
import { AppDispatch } from "../../../redux/store";
import {
  TOP_5_STOCK_TAB_LIST_ID,
  TOP_5_FOREX_TAB_LIST_ID,
  MeasurementId,
} from "../../../logic/event";

type Top5BrokersListItemProps = {
  broker: Broker;
  index: number;
  tradeType: string;
};

const Top5BrokersListItem: FC<Top5BrokersListItemProps> = ({
  broker,
  index,
  tradeType,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const linkToSite = (
    type: "click" | "impression",
    brokerId: number,
    measurementId: MeasurementId
  ) => {
    window.open(broker.linkUrl, "_blank");
    dispatch(addEvent({ type, brokerId, measurementId }));
  };

  return (
    <li
      onClick={() =>
        linkToSite(
          "click",
          broker.id,
          tradeType === "isStock"
            ? TOP_5_STOCK_TAB_LIST_ID
            : TOP_5_FOREX_TAB_LIST_ID
        )
      }
      className={`${styles.listItemContainer} ${index === 4 && styles.lastRow}`}
    >
      <div className={styles.iconAndNameContainer}>
        <span>.{index + 1}</span>
        <img src={broker.logoUrl} />
        <span className={styles.brokerName}>{broker.name}</span>
      </div>
      <div className={styles.score}>{broker.score}</div>
    </li>
  );
};

export default Top5BrokersListItem;
