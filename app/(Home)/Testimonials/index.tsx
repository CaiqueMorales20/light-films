// Imported Components
import Section from "@/components/Section";
import Testimonial from "./Testimonial";

// Functional Component
export default function Testimonials() {
	// Rendering
	return (
		<Section title="Depoimentos" colored>
			<div className="grid grid-cols-3 gap-8">
				<Testimonial />
				<Testimonial />
				<Testimonial />
			</div>
		</Section>
	);
}
