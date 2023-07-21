// Imports
import styled from "styled-components";

// Imported Components
import { Link } from "react-scroll";

// Styled Components
export const MenuS = styled.ul`
	gap: 2rem;
`;

export const MenuItem = styled.li``;

export const MenuLink = styled(Link)`
	font-size: var(--fz-small);
	color: var(--clr-neutral-400);
	font-weight: var(--fw-medium);
	cursor: pointer;
`;
