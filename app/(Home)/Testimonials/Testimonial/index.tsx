// Imported Components
import Image from "next/image";

// Functional Component
export default function Testimonial() {
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
			<p className="text-primary-400 text-base">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam
				beatae nemo deleniti voluptates! Optio quisquam temporibus dolores sit
				nostrum?
			</p>
			<div className="flex items-center gap-4">
				<Image
					className="rounded-full w-8 md:w-12"
					src="/testimonials/person-2.png"
					alt="Pessoa 1"
					width={517}
					height={517}
				/>
				<div className="">
					<h5 className="text-primary-400 text-sm font-medium">Pessoa 1</h5>
					<h6 className="text-gray-400 text-sm">Empresária</h6>
				</div>
			</div>
		</div>
	);
}
