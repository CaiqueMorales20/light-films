// Imported Components
import { Hero } from "./Hero";
import { Areas } from "./Areas";
import Benefits from "./Benefits";
import Projects from "./Projects";
import Depositions from "./Depositions";

// Functional Component
export const LandingPage = () => {
	// Rendering
	return (
		<>
			<Hero />
			<Areas />
			<Benefits />
			<Projects />
			<Depositions />
		</>
	);
};
