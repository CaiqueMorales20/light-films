// Styled Components
import { HeroS, HeroBg, Title, Subtitle } from "./style";

// Image
import HeroBgImg from "../../../assets/img/hero/banner.jpg";

// Functional Component
export const Hero = () => {
	// Rendering
	return (
		<HeroS>
			<HeroBg src={HeroBgImg} />
			<Title>
				Proteção e Estilo em um lugar: Insulfilm Arquitetônico de Qualidade
			</Title>
			<Subtitle>
				Controle a Luz, a Temperatura e a Privacidade sem abrir mão do Design
			</Subtitle>
		</HeroS>
	);
};
