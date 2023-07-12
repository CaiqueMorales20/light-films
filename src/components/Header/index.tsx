// Imported Components
import { Menu } from "./components/Menu";

// Styled Components
import { HeaderS, LogoS, NavS } from "./style";

// Functional Component
export const Header = () => {
	// Rendering
	return (
		<HeaderS>
			<NavS>
				<LogoS>Light Films</LogoS>
				<Menu />
			</NavS>
		</HeaderS>
	);
};
