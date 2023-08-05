// Types
import { TitleType } from "./types";

// Functional Component
export default function Title(props: TitleType) {
	// Rendering
	return (
		<div className="flex justify-center items-center gap-8 mx-auto text-lg font-bold uppercase text-primary-400 mb-20">
			<div className="flex flex-col gap-1">
				<div className="w-[50vw] md:w-[22vw] h-1 bg-primary-400" />
				<div className="w-[50vw] md:w-[22vw] h-1 bg-primary-400" />
			</div>
			<h2 className="text-center">{props.text}</h2>
			<div className="flex flex-col gap-1">
				<div className="w-[50vw] md:w-[22vw] h-1 bg-primary-400" />
				<div className="w-[50vw] md:w-[22vw] h-1 bg-primary-400" />
			</div>
		</div>
	);
}
