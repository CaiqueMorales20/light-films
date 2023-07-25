// Imports
import styled from "styled-components";

// Imported Components
import { Link } from "react-scroll";

// Types
type StyledProps = {
	openedMenu: boolean;
};

// Styled Components
export const Overlay = styled.div<StyledProps>`
	content: "";
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: ${(props) => (props.openedMenu ? "2" : "-1")};
	inset: 0;
	transition: all 0.2s ease-in-out;
	background-color: ${(props) =>
		props.openedMenu ? "rgba(0, 0, 0, 0.6)" : "transparent"};
`;

export const MenuS = styled.ul<StyledProps>`
	gap: 2rem;
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 80vw;
		height: 100vh;
		background-color: var(--clr-primary-500);
		z-index: 1000;
		transform: ${(props) =>
			props.openedMenu ? "translateX(0%)" : "translateX(-100%)"};
		transition: transform 0.3s ease-in-out;
		z-index: 2;
	}
`;

export const MenuItem = styled.li``;

export const MenuLink = styled(Link)`
	font-size: var(--fz-small);
	color: var(--clr-neutral-400);
	font-weight: var(--fw-medium);
	cursor: pointer;
`;
