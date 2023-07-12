import { MenuItem, MenuLink, MenuS } from "./style";

// Functional Components
export const Menu = () => {
	// Rendering
	return (
		<MenuS>
			<MenuItem>
				<MenuLink href="">Home</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink href="">Clientes</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink href="">Quem somos</MenuLink>
			</MenuItem>
			<MenuItem>
				<MenuLink href="">Contato</MenuLink>
			</MenuItem>
		</MenuS>
	);
};
