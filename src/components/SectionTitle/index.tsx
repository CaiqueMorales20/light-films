// Styled Components
import { Line, LineContainer, SectionTitleS, Text } from "./style";

// Types
import { SectionType } from "./types";

// Functional Component
export default function SectionTitle({ text }: SectionType) {
	return (
		<SectionTitleS>
			<LineContainer>
				<Line />
				<Line />
			</LineContainer>
			<Text>{text}</Text>
			<LineContainer>
				<Line />
				<Line />
			</LineContainer>
		</SectionTitleS>
	);
}
