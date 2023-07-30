// Styled Component
import { ItemS, Image, Title, ImageContainer } from "./style";

// Types
import { ItemProps } from "./type";

// Functional Component
export const Item = (props: ItemProps) => {
	// Rendering
	return (
		<ItemS>
			<ImageContainer>
				<Image src={props.image} alt={props.title} />
			</ImageContainer>
			<Title>{props.title}</Title>
		</ItemS>
	);
};
