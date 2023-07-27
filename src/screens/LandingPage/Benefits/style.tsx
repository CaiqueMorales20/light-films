// Imports
import { styled } from "styled-components";

// Styled Components
export const BenefitsS = styled.section`
	background-color: var(--clr-primary-400);
`;

export const BenefitsContent = styled.div`
	width: min(100em, 90%);
	margin-inline: auto;
	padding-block: var(--section-padding);
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}

	& > * {
		flex-basis: 100%;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2em;
`;

export const Title = styled.h2`
	color: var(--clr-neutral-400);
	font-size: var(--fz-medium);
	line-height: 1.5;
`;

export const Text = styled.p`
	color: var(--clr-neutral-400);
	font-size: var(--fz-normal);
	text-align: justify;
	letter-spacing: 0.01em;
	line-height: 1.5;
`;

export const Image = styled.img`
	height: 20rem;
	width: auto;
	max-width: 100%;
	object-fit: contain;
`;
