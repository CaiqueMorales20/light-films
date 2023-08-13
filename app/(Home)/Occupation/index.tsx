// Imported Components
import Section from "@/components/Section";
import Title from "@/components/Title";
import Item from "./Item";

// Functional Component
export default function Occupation() {
	// Rendering
	return (
		<Section title="Áreas de aplicação">
			<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
				<Item title="Residências" img="/house.png" />
				<Item title="Escritório" img="/office.png" />
				<Item title="Comércios" img="/commerce.png" />
				<Item title="Prédios" img="/building.png" />
			</div>
		</Section>
	);
}
