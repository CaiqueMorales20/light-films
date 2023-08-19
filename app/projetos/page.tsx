// Imported Components
import Section from "@/components/Section";
import Project from "./(components)/Project";

// Functional Component
export default function Projeto() {
	// Rendering
	return (
		<Section title="Projetos" id="Projeto">
			<div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8 ">
				<Project id={1} title="Lacerda" image="/projects/lacerda/showcase.jpg" />
				<Project id={2} title="Atelie" image="/atelie.png" />
				<Project id={3} title="Riachuelo" image="/riachuelo.png" />
				<Project id={4} title="Lacerda" image="/projects/lacerda/showcase.jpg" />
				<Project id={5} title="Atelie" image="/atelie.png" />
				<Project id={6} title="Riachuelo" image="/riachuelo.png" />
				<Project id={7} title="Lacerda" image="/projects/lacerda/showcase.jpg" />
				<Project id={8} title="Atelie" image="/atelie.png" />
				<Project id={9} title="Riachuelo" image="/riachuelo.png" />
				<Project id={10} title="Atelie" image="/atelie.png" />
			</div>
		</Section>
	);
}
