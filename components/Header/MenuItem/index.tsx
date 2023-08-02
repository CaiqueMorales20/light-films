// Imports
import { Link } from "react-scroll";
import { HeaderType } from "../type";

// Functional Component
export default function MenuItem(props: HeaderType) {
	// Rendering
	return (
		<div>
			<li
				id="menu-item"
				className="text-white cursor-pointer font-medium"
				onClick={props.onClick}
			>
				{props.name}
			</li>
		</div>
	);
}
