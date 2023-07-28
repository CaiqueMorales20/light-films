// Styled Components
import { Line, LineContainer, SectionTitleS, Text } from "./style";

// Types
import { SectionType } from "./types";

// Functional Component
export default function SectionTitle({ text, reversed }: SectionType) {
	return (
		<SectionTitleS>
			<LineContainer>
				<Line reversed={reversed} />
				<Line reversed={reversed} />
			</LineContainer>
			<Text reversed={reversed}>{text}</Text>
			<LineContainer>
				<Line reversed={reversed} />
				<Line reversed={reversed} />
			</LineContainer>
		</SectionTitleS>
	);
}
