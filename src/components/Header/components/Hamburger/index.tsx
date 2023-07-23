// Imports
import { HamburgerS, Image } from "./style";

// Images
import HamburgerImage from "../../../../assets/img/header/menu.png";

// Types
type Props = {
	onClick: () => void;
};

// Functional Component
export default function Hamburger({ onClick }: Props) {
	// Rendering
	return (
		<HamburgerS onClick={onClick}>
			<Image src={HamburgerImage} />
		</HamburgerS>
	);
}
