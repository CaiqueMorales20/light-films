// Imports
import { HeaderType } from "../type";
import { useScrollTo } from "@/utils/useScrollTo";

// Functional Component
export default function MenuItem(props: HeaderType) {
	// Rendering
	return (
		<li onClick={props.onClick}>
			<div id="menu-item" className="text-white cursor-pointer font-medium">
				<a
					href={`#${props.link}`}
					title={props.name}
					onClick={() => useScrollTo(props.link)}
				>
					{props.name}
				</a>
			</div>
		</li>
	);
}
