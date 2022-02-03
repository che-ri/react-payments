import React from "react";
import styles from "./CardContainer.module.css";
import { useNavigate } from "react-router-dom";

export default function CardContainer({ cardInfo = {}, big = false }) {
  const navigate = useNavigate();
  const {
    companyName = null,
    cardNumber = null,
    ownerName = null,
    validity = null,
    cardAlias = null,
  } = cardInfo;

  if (Object.keys(cardInfo).length === 0) {
    return (
      <div className={styles.CardBox}>
        <div className={styles.EmptyCard} onClick={() => navigate("/detail")}>
          <span>+</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.CardBox}>
      <div className={big ? styles.BigCard : styles.SmallCard}>
        <div className={styles.CardTop}>
          <strong className={big ? styles.CardTextBig : styles.CardText}>
            {companyName}
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
        {cardAlias && (
          <div className="flex-center">
            <span>{cardAlias}</span>
          </div>
        )}
      </div>
    </div>
  );
}
