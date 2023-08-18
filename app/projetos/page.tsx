// Imported Components
import Section from "@/components/Section";
import Project from "./(components)/Project";

// Functional Component
export default function Projeto() {
	// Rendering
	return (
		<Section title="Projetos" id="Projeto">
			<div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8 ">
				<Project title="Lacerda" image="/lacerda.png" />
				<Project title="Atelie" image="/atelie.png" />
				<Project title="Riachuelo" image="/riachuelo.png" />
				<Project title="Lacerda" image="/lacerda.png" />
				<Project title="Atelie" image="/atelie.png" />
				<Project title="Riachuelo" image="/riachuelo.png" />
				<Project title="Lacerda" image="/lacerda.png" />
				<Project title="Atelie" image="/atelie.png" />
				<Project title="Riachuelo" image="/riachuelo.png" />
				<Project title="Atelie" image="/atelie.png" />
			</div>
		</Section>
	);
}
