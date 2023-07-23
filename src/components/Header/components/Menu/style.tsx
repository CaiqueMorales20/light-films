// Imports
import styled from "styled-components";

// Imported Components
import { Link } from "react-scroll";

// Types
type StyledProps = {
	openedMenu: boolean;
};

// Styled Components
export const MenuS = styled.ul<StyledProps>`
	gap: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: red;
	z-index: 1000;
	transform: ${(props) =>
		props.openedMenu ? "translateX(0%)" : "translateX(-100%)"};
	transition: transform 0.3s ease-in-out;
`;

export const MenuItem = styled.li``;

export const MenuLink = styled(Link)`
	font-size: var(--fz-small);
	color: var(--clr-neutral-400);
	font-weight: var(--fw-medium);
	cursor: pointer;
`;
