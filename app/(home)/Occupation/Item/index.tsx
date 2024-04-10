// Imported Components
import Image from "next/image";

// Types
interface ItemType {
	title: string;
	img: string;
}

// Functional Component
export default function Item(props: ItemType) {
	// Rendering
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<div className="overflow-hidden w-full aspect-video h-auto">
				<Image
					src={props.img}
					alt={props.title}
					width={343}
					height={171}
					className="h-full hover:scale-[1.1] duration-300 ease-in-out object-cover"
				/>
			</div>
			<h3 className="text-sm text-primary-400 uppercase font-bold">
				{props.title}
			</h3>
		</div>
	);
}
