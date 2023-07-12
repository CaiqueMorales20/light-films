import { MenuItem, MenuLink, MenuS } from "./style";

// Functional Components
export const Menu = () => {
	// Rendering
	return (
		<MenuS>
			<MenuItem>
				<MenuLink>Home</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink>Clientes</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink>Quem somos</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink>Contato</MenuLink>
			</MenuItem>
		</MenuS>
	);
};
