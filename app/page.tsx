import Whatsapp from "@/components/Whatsapp";
import Benefits from "./(Home)/Benefits";
import Hero from "./(Home)/Hero";
import Occupation from "./(Home)/Occupation";
import Projects from "./(Home)/Projects";
import Testimonials from "./(Home)/Testimonials";
import Contact from "./(Home)/Contact";

// Functional Component
export default function Home() {
	return (
		<main>
			<Hero />
			<Occupation />
			<Benefits />
			<Projects />
			<Testimonials />
			<Contact />
			<Whatsapp />
		</main>
	);
}
