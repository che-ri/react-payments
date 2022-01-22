import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import TextButton from "../../components/TextButton";
import { DONE, LIST, SECOND } from "../../config/constant";
import BackButton from "../../components/ BackButton";
import Card from "../../components/Card";
import CardInputForm from "../../components/CardInputForm";
import palette from "../../styles/global/palette";
import Modal from "../../components/Modal";
import CardCompanyList from "../../components/CardCompanyList";

const CardAdd = props => {
	const {
		cardName,
		cardNumber,
		cardOwner,
		cardExpirationDate,
		cardSecureCode,
		cardPassword,
		onChangeCardName,
		onChangeCardNumber,
		onChangeCardOwner,
		onChangeCardExpirationDate,
		onChangeCardSecureCode,
		onChangeCardPassword,
		setCardName,
		setPage,
	} = props;

	const [isModalOn, setIsModalOn] = useState(false);

	useEffect(() => {
		const modalTrigger = cardNumber[SECOND].length === 4;
		if (modalTrigger) {
			setIsModalOn(true);
		}
	}, [cardNumber[SECOND]]);

	const onBack = () => {
		setPage(LIST);
	};

	const onNext = () => {
		setPage(DONE);
	};

	return (
		<div className="app">
			<S.Header>
				<BackButton onClick={onBack} />
				<h1>카드 추가</h1>
			</S.Header>
			<S.CardBox>
				<Card
					size="small"
					backgroundColor={palette[cardName]}
					cardName={cardName}
					cardNumber={cardNumber}
					cardOwner={cardOwner}
					cardExpirationDate={cardExpirationDate}
				/>
			</S.CardBox>
			<CardInputForm
				cardNumber={cardNumber}
				onChangeCardNumber={onChangeCardNumber}
				cardOwner={cardOwner}
				onChangeCardOwner={onChangeCardOwner}
				cardExpirationDate={cardExpirationDate}
				onChangeCardExpirationDate={onChangeCardExpirationDate}
				cardSecureCode={cardSecureCode}
				onChangeCardSecureCode={onChangeCardSecureCode}
				cardPassword={cardPassword}
				onChangeCardPassword={onChangeCardPassword}
			/>
			<S.ButtonBox>
				<TextButton content="다음" onClick={onNext} color="#04C09E" />
			</S.ButtonBox>
			{isModalOn && (
				<Modal setIsModalOn={setIsModalOn}>
					<CardCompanyList
						setIsModalOn={setIsModalOn}
						setCardName={setCardName}
					/>
				</Modal>
			)}
		</div>
	);
};

CardAdd.propTypes = {
	cardName: PropTypes.string.isRequired,
	cardNumber: PropTypes.objectOf(PropTypes.string),
	cardOwner: PropTypes.string.isRequired,
	cardExpirationDate: PropTypes.objectOf(PropTypes.string),
	onChangeCardName: PropTypes.func.isRequired,
	onChangeCardNumber: PropTypes.func.isRequired,
	onChangeCardOwner: PropTypes.func.isRequired,
	onChangeCardExpirationDate: PropTypes.func.isRequired,
	setPage: PropTypes.func.isRequired,
	setCardName: PropTypes.func.isRequired,
};

export default CardAdd;
