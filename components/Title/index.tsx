// Types
import { TitleType } from "./types";

// Functional Component
export default function Title(props: TitleType) {
	// Rendering
	return (
		<div className="flex justify-center items-center gap-x-8 mx-auto text-lg font-bold uppercase mb-20">
			<div className="flex flex-col gap-1">
				<div
					data-fill={props.colored}
					className="w-[50vw] md:w-[22vw] h-1 bg-primary-400 data-[fill=true]:bg-white"
				/>
				<div
					data-fill={props.colored}
					className="w-[50vw] md:w-[22vw] h-1 bg-primary-400 data-[fill=true]:bg-white"
				/>
			</div>
			<h2
				data-fill={props.colored}
				className="text-center text-primary-400 data-[fill=true]:text-white"
			>
				{props.text}
			</h2>
			<div className="flex flex-col gap-1">
				<div
					data-fill={props.colored}
					className="w-[50vw] md:w-[22vw] h-1 bg-primary-400 data-[fill=true]:bg-white"
				/>
				<div
					data-fill={props.colored}
					className="w-[50vw] md:w-[22vw] h-1 bg-primary-400 data-[fill=true]:bg-white"
				/>
			</div>
		</div>
	);
}
