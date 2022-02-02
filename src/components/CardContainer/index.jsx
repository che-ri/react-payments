import React from "react";
import styles from "./CardContainer.module.css";

export default function CardContainer({ cardInfo = {}, big = false }) {
  const {
    cardName = null,
    cardNumber = null,
    ownerName = null,
    validity = null,
  } = cardInfo;

  return (
    <div className={styles.CardBox}>
      <div className={big ? styles.BigCard : styles.SmallCard}>
        <div className={styles.CardTop}>
          <strong className={big ? styles.CardTextBig : styles.CardText}>
            {cardName}
          </strong>
        </div>
        <div className={styles.CardMiddle}>
          <div
            className={big ? styles.BigCardChip : styles.SmallCardChip}
          ></div>
          <p className={big ? styles.CardTextBig : styles.CardText}>
            {cardNumber}
          </p>
        </div>
        <div className={styles.CardBottom}>
          <div className={styles.CardBottomInfo}>
            <strong className={big ? styles.CardTextBig : styles.CardText}>
              {ownerName}
            </strong>
            <span className={styles.CardBottomNumber}>{validity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
