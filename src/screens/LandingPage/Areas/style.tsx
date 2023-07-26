// Imports
import styled from "styled-components";

// Styled Components
export const AreaS = styled.section`
	width: min(100em, 90%);
	margin-inline: auto;
	padding-block: var(--section-padding);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 5rem;

	@media screen and (max-width: 768px) {
		gap: 2rem;
	}
`;

export const Title = styled.h1`
	color: var(--clr-primary-500);
	font-weight: var(--fw-bold);
	font-size: var(--fz-large);
	text-transform: uppercase;
	text-align: center;
`;
