// Types
import Title from "../Title";
import { SectionType } from "./types";

// Functional Component
export default function Section(props: SectionType) {
	// Rendering
	return (
		<section
			id={props.id}
			data-fill={props.colored}
			className="px-[10%] mx-auto py-[7rem] data-[fill=true]:bg-primary-400 data-[fill=true]:text-white"
		>
			<Title colored={props.colored} text={props.title} />
			{props.children}
		</section>
	);
}
