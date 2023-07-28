// Imports
import { styled } from "styled-components";

// Types
type ButtonSType = {
	reversed?: boolean;
};

// Styled Components
export const ButtonS = styled.div<ButtonSType>`
	border-radius: 1em;
	width: max-content;
	background-color: ${(props) =>
		props.reversed ? "var(--clr-primary-400)" : "var(--clr-neutral-400)"};
	cursor: pointer;
	transition: 0.3s ease-in-out;
	border: ${(props) => props.reversed && "1px solid var(--clr-primary-400)"};

	&:hover {
		background-color: ${(props) =>
			props.reversed ? "var(--clr-neutral-400)" : "var(--clr-primary-400)"};
	}

	&:hover > * {
		color: ${(props) =>
			props.reversed ? "var(--clr-primary-400)" : "var(--clr-neutral-400)"};
	}
`;

export const Text = styled.p<ButtonSType>`
	padding: 1.125em 5.125em;
	font-size: var(--fz-small);
	color: ${(props) =>
		props.reversed ? "var(--clr-neutral-400)" : "var(--clr-primary-400)"};
	font-weight: var(--fw-bold);
	text-transform: uppercase;
	transition: 0.3s ease-in-out;
`;
