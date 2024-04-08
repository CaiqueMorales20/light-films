// Imported Components
import Section from "@/components/Section";

'Cache-Control: public, max-age=0'

// Data
import { ProjectsData } from "@/public/data/data";
import Image from "next/image";

// Functional Component
export default function Page({ params }: { params: { id: string } }) {
	// Variables
	const project = ProjectsData.find(
		(project) => project.slug === params.id
	);

	// // Function
	// function invariant(value: unknown): asserts value {
	// 	if (value) return;

	// 	throw new Error("Invariant violation");
	// }

	// invariant(project);]
	if (!project) return <p>No project</p>

	// Rendering
	return (
		<div className="-mt-16">
			<Section title={project.title} id={params.id}>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{project.photos.map((photo) => (
						<Image className="aspect-square object-right w-full object-cover" src={photo.path} alt={photo.alt} width={400} height={400} />
					))}
				</div>
				{/* <div className="flex flex-col gap-14">
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
				</div> */}
			</Section>
		</div>
	);
}
