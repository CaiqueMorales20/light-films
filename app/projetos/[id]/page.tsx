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
		<div className="-mt-16">
			<Section title={params.id} id={params.id}>
				<div className="flex flex-col gap-14">
					<div className="grid grid-cols-1 md:grid-cols-5 gap-10">
						<Image
							src={project.image}
							alt={project.title}
							width={1000}
							height={1000}
							className="col-span-3 aspect-image h-[40vh]"
						/>
						<div className="col-span-3 md:col-span-2 flex flex-col gap-6">
							<div className="flex flex-col gap-4">
								{project.description.map((desc: string) => (
									<p className="text-primary-400 text-base text-justify">
										{desc}
									</p>
								))}
							</div>
						</div>
					</div>
					<SwiperC photos={project.photos} />
				</div>
			</Section>
		</div>
	);
}
