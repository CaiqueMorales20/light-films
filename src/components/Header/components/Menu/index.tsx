// Imports
import { useContext, useRef } from "react";
import { useOnClickOutside } from "../../../../utils/hooks/useOnClickOutside";

// Styled Components
import { MenuItem, MenuLink, MenuS, Overlay } from "./style";

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
		<>
			<Overlay openedMenu={openedMenu} />
			<MenuS ref={menuRef} openedMenu={openedMenu}>
				<MenuItem>
					<MenuLink onClick={() => setOpenedMenu(false)} to="/" smooth={true}>
						Home
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink
						onClick={() => setOpenedMenu(false)}
						to="work"
						smooth={true}
					>
						Atuação
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink
						onClick={() => setOpenedMenu(false)}
						to="about"
						smooth={true}
					>
						Quem somos
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink
						onClick={() => setOpenedMenu(false)}
						to="projcts"
						smooth={true}
					>
						Projetos
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink
						onClick={() => setOpenedMenu(false)}
						to="clients"
						smooth={true}
					>
						Clientes
					</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink
						onClick={() => setOpenedMenu(false)}
						to="contact"
						smooth={true}
					>
						Contato
					</MenuLink>
				</MenuItem>
			</MenuS>
		</>
	);
}
