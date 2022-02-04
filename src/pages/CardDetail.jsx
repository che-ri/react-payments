import React from "react";

//components
import CardContainer from "../components/CardContainer";

export default function CardDetail() {
  const initialCardInfo = {
    companyName: undefined,
    cardNumber: undefined,
    cardAlias: undefined,
    ownerName: "NAME",
    validity: "MM/YY",
  };

  const currentCardInfo = undefined;

  return (
    <div>
      <CardContainer
        cardInfo={currentCardInfo ? currentCardInfo : initialCardInfo}
      />
    </div>
  );
}
