// Imports
import styled from "styled-components";

// Styled Components
export const ItemS = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: auto;
	overflow: hidden;
	aspect-ratio: 2 /1;
	position: relative;

	&:hover > * {
		scale: 1.1;
	}
`;

export const Image = styled.img`
	height: 100%;
	object-fit: cover;
	transition: all 0.3s ease-in-out;
	cursor: pointer;
`;

export const Title = styled.h2`
	font-size: var(--fz-small);
	color: var(--clr-primary-500);
	text-transform: uppercase;
`;
