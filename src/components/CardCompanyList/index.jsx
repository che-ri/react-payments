import React from "react";
import PropTypes from "prop-types";

import * as S from "./style";
import CircleButton from "../CircleButton";
import palette from "../../styles/global/palette";

const CardCompanyList = React.forwardRef((props, ref) => {
	const { setCardName, setIsModalOn } = props;
	const { cardNumberRef } = ref;
	const companyList = [
		"포코",
		"준",
		"공원",
		"브랜",
		"로이드",
		"도비",
		"콜린",
		"썬",
	];

	const selectCompany = (_, val) => {
		setCardName(val);
		setIsModalOn(false);
		cardNumberRef.current.focus();
	};

	return (
		<S.List>
			{companyList.map((val, idx) => (
				<S.ListItem key={idx}>
					<CircleButton
						title={val}
						backgroundColor={palette[val]}
						onClick={e => selectCompany(e, val)}
					/>
				</S.ListItem>
			))}
		</S.List>
	);
});

CardCompanyList.propTypes = {
	setCardName: PropTypes.func.isRequired,
	setIsModalOn: PropTypes.func.isRequired,
};

export default CardCompanyList;
