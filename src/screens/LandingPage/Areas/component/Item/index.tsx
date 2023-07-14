// Styled Component
import { ItemS, Image, Title } from "./style";

// Types
import { ItemProps } from "./type";

// Functional Component
export const Item = (props: ItemProps) => {
	// Rendering
	return (
		<ItemS>
			<Image src={props.image} alt={props.title} />
			<Title>{props.title}</Title>
		</ItemS>
	);
};
