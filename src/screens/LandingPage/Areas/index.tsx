// Imported Components
import { ItemList } from "./component/ItemList";
import { Element } from "react-scroll";

// Styled Components
import { AreaS } from "./style";
import { SectionTitle } from "../../../global/GlobalStyle";

// Functional Component
export const Areas = () => {
	// Rendering
	return (
		<Element name="work">
			<AreaS>
				<SectionTitle>Áreas de aplicação</SectionTitle>
				<ItemList />
			</AreaS>
		</Element>
	);
};
