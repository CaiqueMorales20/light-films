// Imports
import { useContext, useRef } from "react";
import { useOnClickOutside } from "../../../../utils/hooks/useOnClickOutside";

// Styled Components
import { MenuItem, MenuLink, MenuS } from "./style";

// Context
import { HeaderContext } from "../..";
import { HeaderType } from "../../type";

// Functional Component
export default function Menu() {
	// Variables
	const { openedMenu, setOpenedMenu } = useContext(HeaderContext) as HeaderType;
	const menuRef = useRef(null);

	// Functions
	useOnClickOutside(menuRef, () => setOpenedMenu(false));

	// Rendering
	return (
		<MenuS ref={menuRef} openedMenu={openedMenu}>
			<MenuItem>
				<MenuLink to="/" smooth={true}>
					Home
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink to="work" smooth={true}>
					Atuação
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink to="about" smooth={true}>
					Quem somos
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink to="projcts" smooth={true}>
					Projetos
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink to="clients" smooth={true}>
					Clientes
				</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink to="contact" smooth={true}>
					Contato
				</MenuLink>
			</MenuItem>
		</MenuS>
	);
}
