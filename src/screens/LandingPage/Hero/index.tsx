// Styled Components
import { Link } from "react-scroll";
import Button from "../../../components/Button";
import { HeroS, Title, Subtitle, Content } from "./style";

// Functional Component
export const Hero = () => {
	// Rendering
	return (
		<HeroS>
			<Content>
				<Title>
					Proteção e Estilo em um lugar: Insulfilm Arquitetônico de Qualidade
				</Title>
				<Subtitle>
					Controle a Luz, a Temperatura e a Privacidade sem abrir mão do Design
				</Subtitle>
			</Content>
			<Link to="work" smooth offset={70}>
				<Button text="Ver mais" />
			</Link>
		</HeroS>
	);
};
