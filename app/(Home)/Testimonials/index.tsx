// Imported Components
import Section from "@/components/Section";
import Testimonial from "./Testimonial";

import { TestimonialsData } from "./data";

// Functional Component
export default function Testimonials() {
	// Rendering
	return (
		<Section id="testimonials" title="Depoimentos" colored>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
				{TestimonialsData.map((testimonial, index) => (
					<Testimonial
						name={testimonial.name}
						role={testimonial.role}
						testimonial={testimonial.testimonial}
            photoPath={testimonial.photoPath}
						key={index}
					/>
				))}
			</div>
		</Section>
	);
}
