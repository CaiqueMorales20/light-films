// Imported Components
import { ItemList } from "./component/ItemList";

// Styled Components
import { AreaS, Title } from "./style";

// Functional Component
export const Areas = () => {
	// Rendering
	return (
		<AreaS>
			<Title>Áreas de aplicação</Title>
			<ItemList />
		</AreaS>
	);
};
