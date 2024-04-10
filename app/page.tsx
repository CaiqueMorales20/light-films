import Whatsapp from "@/components/Whatsapp";
import Benefits from "./(home)/Benefits";
import Hero from "./(home)/Hero";
import Occupation from "./(home)/Occupation";
import Projects from "./(home)/Projects";
import Testimonials from "./(home)/Testimonials";
import Contact from "./(home)/Contact";

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
