// Imports
import styled from "styled-components";

// Image
import HeroBgImg from "../../../assets/img/hero/banner.jpg";

// Styled Components
export const HeroS = styled.section`
	height: 100vh;
	width: 100%;
	margin-top: calc(var(--header-height) * -1);
	display: grid;
	background-image: url(${HeroBgImg});
	background-size: cover;
	background-position: center;
	place-items: center;
`;

export const Content = styled.div`
	width: min(100em, 90%);
	margin-inline: auto;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 1.25rem;
`;

export const Title = styled.h1`
	max-width: 62.5rem;
	font-size: var(--fz-larger);
	color: var(--clr-neutral-400);
	text-align: center;
	line-height: 1.3;
`;

export const Subtitle = styled.h2`
	font-size: var(--fz-medium);
	color: var(--clr-neutral-400);
	text-align: center;
	font-weight: 400;
`;
