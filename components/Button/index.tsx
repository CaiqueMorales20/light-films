// Types
import { ButtonType } from "./types";

// Functional Component
export default function Button(props: ButtonType) {
	// Rendering
	return (
		<button className="w-max rounded-[1rem] bg-white hover:bg-primary-400 text-primary-400 hover:text-white duration-300">
			<p className="text-sm font-bold uppercase p-[1.125em_5.125em]">
				{props.text}
			</p>
		</button>
	);
}
