// Imported Components
import { ItemList } from "./component/ItemList";
import { Element } from "react-scroll";

// Styled Components
import { AreaS, Title } from "./style";

// Functional Component
export const Areas = () => {
	// Rendering
	return (
		<Element name="work">
			<AreaS>
				<Title>Áreas de aplicação</Title>
				<ItemList />
			</AreaS>
		</Element>
	);
};
