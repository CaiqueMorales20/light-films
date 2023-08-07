import Benefits from "./(Home)/Benefits";
import Hero from "./(Home)/Hero";
import Occupation from "./(Home)/Occupation";
import Projects from "./(Home)/Projects";

// Functional Component
export default function Home() {
	return (
		<main>
			<Hero />
			<Occupation />
			<Benefits />
			<Projects />
		</main>
	);
}
