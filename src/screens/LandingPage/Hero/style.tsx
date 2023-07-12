// Imports
import styled from "styled-components";

// Styled Components
export const HeroS = styled.section`
	height: 100vh;
	width: 100%;
	margin-top: calc(var(--header-height) * -1);
	display: flex;
	align-items: center;
	justify-content: center;
	isolation: isolate;
	flex-direction: column;
	gap: 1.25rem;
`;

export const HeroBg = styled.img`
	height: 100vh;
	position: absolute;
	inset: 0;
	z-index: -1;
`;

export const Title = styled.h1`
	max-width: 62.5rem;
	font-size: var(--fz-largest);
	color: var(--clr-neutral-400);
	text-align: center;
	line-height: 1.3;
`;

export const Subtitle = styled.h2`
	font-size: var(--fz-large);
	color: var(--clr-neutral-400);
	font-weight: 400;
`;
