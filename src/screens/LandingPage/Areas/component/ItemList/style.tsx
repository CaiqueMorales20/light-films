// Imports
import styled from "styled-components";

// Styled Components
export const ItemListS = styled.div`
	--columns-number: 4;
	width: 100%;

	display: grid;
	grid-template-columns: repeat(var(--columns-number), 1fr);
	gap: 1rem;

	@media screen and (max-width: 1080px) {
		--columns-number: 4;
	}
	@media screen and (max-width: 768px) {
		--columns-number: 3;
	}
	@media screen and (max-width: 568px) {
		--columns-number: 1;
	}
`;
