// Imports
import { Element } from "react-scroll";

// Styled Components
import {
	BenefitsContent,
	BenefitsS,
	Image,
	ImageContainer,
	Text,
	TextContainer,
	Title,
} from "./style";

// Images
import BenefitsImg from "../../../assets/img/benefits/building.jpg";

// Functional Component
export default function Benefits() {
	// Rendering
	return (
		<Element name="benefits">
			<BenefitsS>
				<BenefitsContent>
					<TextContainer>
						<Title>
							Descubra os Benefícios do Insulfilm para Sua Casa, Comércio e
							Mais!
						</Title>
						<Text>
							Descubra o conforto e a proteção que o insulfilm pode trazer para
							o seu lar, comércio ou escritório. Com a aplicação desse filme
							especial em suas janelas, você desfrutará de um ambiente mais
							fresco, proteção contra raios UV prejudiciais, privacidade
							aprimorada e maior segurança contra impactos. Aproveite todos
							esses benefícios em um só produto, transformando seu espaço em um
							lugar mais agradável, eficiente e seguro.
						</Text>
					</TextContainer>
					<ImageContainer>
						<Image src={BenefitsImg} />
					</ImageContainer>
				</BenefitsContent>
			</BenefitsS>
		</Element>
	);
}
