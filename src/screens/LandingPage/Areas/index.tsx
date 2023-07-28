// Imported Components
import { ItemList } from "./component/ItemList";
import { Element } from "react-scroll";

// Styled Components
import { AreaS } from "./style";
import SectionTitle from "../../../components/SectionTitle";

// Functional Component
export const Areas = () => {
	// Rendering
	return (
		<Element name="work">
			<AreaS>
				<SectionTitle text="Áreas de aplicação" />
				<ItemList />
			</AreaS>
		</Element>
	);
};
