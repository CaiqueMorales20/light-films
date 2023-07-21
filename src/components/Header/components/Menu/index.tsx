import { MenuItem, MenuLink, MenuS } from "./style";

// Functional Components
export const Menu = () => {
	// Rendering
	return (
		<MenuS>
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
};
