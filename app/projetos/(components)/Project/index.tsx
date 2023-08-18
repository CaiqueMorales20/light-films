// Imported Components
import Image from "next/image";

// Types
interface ProjectType {
	title: string;
	image: string;
}

// Functional Component
export default function Project(props: ProjectType) {
	// Rendering
	return (
		<div className="cursor-pointer bg-primary-400">
			<Image
				src={props.image}
				alt={`Abrir projeto ${props.title}`}
				width={500}
				height={500}
			/>
			<div className="flex items-center justify-center p-4 w-full shadow-md">
				<h2 className="text-sm text-white font-medium">{props.title}</h2>
			</div>
		</div>
	);
}
