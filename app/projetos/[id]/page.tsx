// Imported Components
import Section from "@/components/Section";

// Data
import { ProjectsData } from "@/public/data/data";
import Image from "next/image";
import SwiperC from "../(components)/Swiper";

// Functional Component
export default function Page({ params }: { params: { id: string } }) {
	// Variables
	const project = ProjectsData.find(
		(project) => project.title.toLowerCase() === params.id.toLowerCase()
	);

	// Function
	function invariant(value: unknown): asserts value {
		if (value) return;

		throw new Error("Invariant violation");
	}

	invariant(project);

	// Rendering
	return (
		<div className="-mt-10">
			<Section title={params.id} id={params.id}>
				<div className="flex flex-col gap-10">
					<div className="grid grid-cols-5 gap-10">
						<Image
							src={project.image}
							alt={project.title}
							width={1000}
							height={1000}
							className="col-span-3 aspect-image"
						/>
						<div className="col-span-2 flex flex-col gap-6">
							{/* <h2 className="text-primary-400 text-medium font-bold">
							{project.title}
						</h2> */}
							<div className="flex flex-col gap-4">
								{project.description.map((desc: string) => (
									<p className="text-primary-400 text-base text-justify">
										{desc}
									</p>
								))}
							</div>
						</div>
					</div>
					<SwiperC />
				</div>
			</Section>
		</div>
	);
}
