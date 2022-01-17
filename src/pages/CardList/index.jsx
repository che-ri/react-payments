import React from "react";
import PropTypes from "prop-types";

import CardButton from "../../components/CardButton";
import { ADD } from "../../config/constant";

const CardList = ({ setPage }) => {
	const onClick = () => {
		setPage(ADD);
	};

	return (
		<div className="app">
			<h1 className="page-title">보유카드</h1>
			<CardButton onClick={onClick} />
		</div>
	);
};

CardList.propTypes = {
	setPage: PropTypes.func.isRequired,
};

export default CardList;
