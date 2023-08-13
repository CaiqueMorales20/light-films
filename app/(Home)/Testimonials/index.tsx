import Section from "@/components/Section";
import Image from "next/image";

// Functional Component
export default function Testimonials() {
	// Rendering
	return (
		<Section title="Depoimentos" colored>
			<Image src="/quote.png" alt="Depoimento" width={1000} height={1000} />
		</Section>
	);
}
