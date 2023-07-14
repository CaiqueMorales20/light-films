// Imported Components
import { Item } from "../Item";

// Styled Components
import { AreasData } from "../../data";

// Data
import { ItemListS } from "./style";

// Functional Component
export const ItemList = () => {
	// Rendering
	return (
		<ItemListS>
			{AreasData.map((item, index) => {
				// Rendering
				return <Item image={item.image} title={item.title} key={index} />;
			})}
		</ItemListS>
	);
};
