// Imported Components
import Section from "@/components/Section";
import Project from "./(components)/Project";
import { ProjectsData } from "@/public/data/data";

// Functional Component
export default function Projeto() {
	// Rendering
	return (
		<Section title="Projetos" id="Projeto">
			<div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-8 ">
				{ProjectsData.map((project, i) => (
					<Project key={i} id={i} title={project.title} slug={project.slug} image={project.image} />
				))}
			</div>
		</Section>
	);
}
