// Imports
import { useState, createContext } from "react";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery";

// Imported Components
import Hamburger from "./components/Hamburger";
import Menu from "./components/Menu";

// Styled Components
import { HeaderS, LogoS, NavS } from "./style";
import { HeaderType } from "./type";

// Context
export const HeaderContext = createContext<null | HeaderType>(null);

// Functional Component
export const Header = () => {
	// Variables
	const mobile = useMediaQuery("(max-width: 768px)");
	const [openedMenu, setOpenedMenu] = useState(false);

	// Rendering
	return (
		<HeaderContext.Provider value={{ openedMenu, setOpenedMenu }}>
			<HeaderS>
				<NavS>
					<LogoS>Light Films</LogoS>
					<Menu />
					{mobile && <Hamburger onClick={() => setOpenedMenu(!openedMenu)} />}
				</NavS>
			</HeaderS>
		</HeaderContext.Provider>
	);
};
