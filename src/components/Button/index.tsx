// Styled Components
import { ButtonS, Text } from "./style";

// Type
import { ButtonType } from "./types";

// Functional Component
export default function Button({ text, reversed }: ButtonType) {
	return (
		<ButtonS reversed={reversed}>
			<Text reversed={reversed}>{text}</Text>
		</ButtonS>
	);
}
