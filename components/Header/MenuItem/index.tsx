// Imports
import { Link } from "react-scroll";
import { HeaderType } from "../type";
import { useScrollTo } from "@/utils/useScrollTo";

// Functional Component
export default function MenuItem(props: HeaderType) {
	// Rendering
	return (
		<div onClick={props.onClick}>
			<li
				id="menu-item"
				className="text-white cursor-pointer font-medium"
				onClick={() => useScrollTo(props.link)}
			>
				{props.name}
			</li>
		</div>
	);
}
