import React, { useRef } from "react";
import PropTypes from "prop-types";

import { FIRST, FOURTH, SECOND, THIRD } from "../../../config/constant";
import InputWrapper from "../InputWrapper";
import * as S from "./style";

const CardNumberInput = React.forwardRef((props, ref) => {
	const { label, cardNumber, onChangeCardNumber } = props;
	const { cardNumberRef, cardExpirationDateRef } = ref;

	const firstRef = useRef(null);
	const secondRef = useRef(null);
	const fourthRef = useRef(null);
	const refs = [firstRef, secondRef, cardNumberRef, fourthRef];

	const checkNumber = e => {
		const { name: idx, value } = e.target;
		const isLessFourDigits = e.target.value.length < 4;
		const isFourDigits = e.target.value.length === 4;

		if (isNaN(value)) return;
		if (isLessFourDigits) {
			onChangeCardNumber(e);
		}
		if (isFourDigits) {
			onChangeCardNumber(e);
			idx <= THIRD ? moveFocus(idx) : jumpFocus();
		}
	};

	const moveFocus = idx => {
		refs[idx].current.focus();
	};

	const jumpFocus = () => {
		cardExpirationDateRef.current.focus();
	};

	return (
		<InputWrapper htmlFor="cardNumber-first" label={label}>
			<S.LayoutWrapper>
				<S.Input
					type="number"
					min={1000}
					id="cardNumber-first"
					name={FIRST}
					value={cardNumber[FIRST]}
					onChange={e => checkNumber(e)}
					autoFocus
					ref={refs[0]}
					required
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="number"
					id="cardNumber-second"
					name={SECOND}
					value={cardNumber[SECOND]}
					onChange={e => checkNumber(e)}
					ref={refs[1]}
					required
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="password"
					id="cardNumber-third"
					name={THIRD}
					value={cardNumber[THIRD]}
					onChange={e => checkNumber(e)}
					ref={refs[2]}
					required
				/>
				<S.Divider>-</S.Divider>
				<S.Input
					type="password"
					id="cardNumber-fourth"
					name={FOURTH}
					value={cardNumber[FOURTH]}
					onChange={e => checkNumber(e)}
					ref={refs[3]}
					required
				/>
			</S.LayoutWrapper>
		</InputWrapper>
	);
});

CardNumberInput.propTypes = {
	label: PropTypes.string.isRequired,
	cardNumber: PropTypes.objectOf(PropTypes.string).isRequired,
	onChangeCardNumber: PropTypes.func.isRequired,
};

export default CardNumberInput;
