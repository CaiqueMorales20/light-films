// Imported Components
import Image from "next/image";

// Types
import { TestimonialsType } from "./types";

// Functional Component
export default function Testimonial(props: TestimonialsType) {
	// Rendering
	return (
		<div className="bg-white rounded-3xl py-10 px-8 flex flex-col gap-6 md:gap-10">
			<Image
				className="w-6 md:w-10"
				src="/quote.png"
				alt="Depoimento"
				width={1000}
				height={1000}
			/>
			<p className="text-primary-400 text-base min-h-[15rem]">
				{props.testimonial}
			</p>
			<div className="flex items-center gap-4">
				<Image
					className="rounded-full w-8 md:w-12"
					src={props.photoPath}
					alt={props.name}
					width={517}
					height={517}
				/>
				<div>
					<h3 className="text-primary-400 text-sm font-medium">{props.name}</h3>
					<h4 className="text-gray-500 text-sm">{props.role}</h4>
				</div>
			</div>
		</div>
	);
}
