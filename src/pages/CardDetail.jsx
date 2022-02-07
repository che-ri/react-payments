import React from "react";

//components
import Card from "../components/Card";
import Input from "../components/CardForm";

export default function CardDetail() {
  const initialCardInfo = {
    companyName: undefined,
    cardNumber: undefined,
    cardAlias: undefined,
    ownerName: "NAME",
    validity: "MM/YY",
  };

  const currentCardInfo = undefined;

  const cardNumberRefList = React.useRef([null]);
  return (
    <div>
      <Card cardInfo={currentCardInfo ? currentCardInfo : initialCardInfo} />
      <Input title="카드 번호" ref={cardNumberRefList} />
    </div>
  );
}
