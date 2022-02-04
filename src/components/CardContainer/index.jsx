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

  const CARD_LIST = [
    { name: "포코 카드", backgroundColor: "#E24141" },
    { name: "준 카드", backgroundColor: "#547CE4" },
    { name: "공원 카드", backgroundColor: "#73BC6D" },
    { name: "브랜 카드", backgroundColor: "#DE59B9" },
    {
      name: "로이드 카드",
      backgroundColor:
        "radial-gradient(50% 50% at 50% 50%, rgba(4, 192, 158, 0.31) 0%, rgba(4, 192, 158, 0.457344) 65.1%, #04C09E 100%)",
    },
    { name: "도비 카드", backgroundColor: "#E76E9A" },
    { name: "콜린 카드", backgroundColor: "#F37D3B" },
    { name: "썬 카드", backgroundColor: "#FBCD58" },
  ];

  const cardBackgroundColor =
    !cardInfo ||
    Object.keys(cardInfo).length === 0 ||
    !cardInfo?.companyName ||
    !CARD_LIST.find((cardData) => cardData.name === companyName)
      ?.backgroundColor
      ? "#d2d2d2"
      : CARD_LIST.find((cardData) => cardData.name === companyName);

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
    <>
      <div className={styles.CardBox}>
        <div
          className={big ? styles.BigCard : styles.SmallCard}
          style={{ background: cardBackgroundColor }}
        >
          <div className={styles.CardTop}>
            <strong className={big ? styles.CardTextBig : styles.CardText}>
              {companyName}
            </strong>
          </div>
          <div className={styles.CardMiddle}>
            <img className={big ? styles.BigCardChip : styles.SmallCardChip} />
            <p
              className={big ? styles.CardNumberTextBig : styles.CardNumberText}
            >
              {cardNumber}
            </p>
          </div>

          <div className={styles.CardBottom}>
            <div className={styles.CardBottomInfo}>
              <strong className={big ? styles.CardTextBig : styles.CardText}>
                {ownerName}
              </strong>
              <span className={big ? styles.CardTextBig : styles.CardText}>
                {validity}
              </span>
            </div>
          </div>
        </div>
      </div>
      {cardAlias && (
        <div className="flex-center">
          <span>{cardAlias}</span>
        </div>
      )}
    </>
  );
}
