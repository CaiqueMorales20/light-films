// Imports
import styled from "styled-components";

// Styled Components
export const HeaderS = styled.header`
	background-color: var(--clr-primary-400);
	position: relative;
	z-index: 9999;
`;

export const NavS = styled.nav`
	height: var(--header-height);
	width: min(85rem, 90%);
	margin-inline: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LogoS = styled.h1`
	color: var(--clr-neutral-400);
	font-size: var(--fz-normal);
`;
