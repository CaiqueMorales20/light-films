// Imports
import { styled } from "styled-components";

// Types
type SectionTitleType = {
	reversed?: boolean;
};

// Styled Components
export const SectionTitleS = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2em;
`;

export const LineContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25em;
`;

export const Line = styled.div<SectionTitleType>`
	height: 0.2rem;
	width: 22vw;
	background-color: ${(props) =>
		props.reversed ? "var(--clr-neutral-400)" : "var(--clr-primary-500)"};

	@media screen and (max-width: 768px) {
		width: 50vw;
	}
`;

export const Text = styled.h1<SectionTitleType>`
	color: ${(props) =>
		props.reversed ? "var(--clr-neutral-400)" : "var(--clr-primary-500)"};
	font-weight: var(--fw-bold);
	font-size: var(--fz-large);
	text-transform: uppercase;
	text-align: center;
`;
