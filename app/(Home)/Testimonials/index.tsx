// Imported Components
import Section from "@/components/Section";
import Testimonial from "./Testimonial";

// Functional Component
export default function Testimonials() {
	// Rendering
	return (
		<Section title="Depoimentos" colored>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
				<Testimonial />
				<Testimonial />
				<Testimonial />
			</div>
		</Section>
	);
}
