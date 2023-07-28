// Imports
import { styled } from "styled-components";

// Styled Components
export const SectionTitleS = styled.div`
	display: flex;
	align-items: center;
	gap: 2em;
`;

export const LineContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25em;
`;

export const Line = styled.div`
	height: 0.2rem;
	width: 22vw;
	background-color: var(--clr-primary-500);
`;

export const Text = styled.h1`
	color: var(--clr-primary-500);
	font-weight: var(--fw-bold);
	font-size: var(--fz-large);
	text-transform: uppercase;
	text-align: center;
`;
