// Imports
import { styled } from "styled-components";

// Styled Components
export const ProjectsS = styled.section`
	width: min(100em, 90%);
	margin-inline: auto;
	padding-block: var(--section-padding);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4rem;
`;

export const SliderS = styled.div`
	width: 100%;
	position: relative;
`;

export const Arrow = styled.img`
	--size: 2rem;
	filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.3));

	width: 3rem;
	cursor: pointer;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: calc(var(--size) * -1);
	z-index: 4;

	&:last-of-type {
		left: auto;
		right: calc(var(--size) * -1);
	}

	@media screen and (max-width: 768px) {
		--size: 0.75rem;
	}
`;
