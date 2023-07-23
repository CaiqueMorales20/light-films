// Imports
import { useState } from "react";
import { useMediaQuery } from "../../utils/hooks/useMediaQuery";

// Imported Components
import Hamburger from "./components/Hamburger";
import Menu from "./components/Menu";

// Styled Components
import { HeaderS, LogoS, NavS } from "./style";

// Functional Component
export const Header = () => {
	// Variables
	const mobile = useMediaQuery("(max-width: 768px)");
	const [openedMenu, setOpenedMenu] = useState(false);

	// Rendering
	return (
		<HeaderS>
			<NavS>
				<LogoS>Light Films</LogoS>
				<Menu openedMenu={openedMenu} />
				{mobile && <Hamburger onClick={() => setOpenedMenu(!openedMenu)} />}
			</NavS>
		</HeaderS>
	);
};
