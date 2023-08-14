// Imports
import { HeaderType } from "../type";
import { useScrollTo } from "@/utils/useScrollTo";

// Functional Component
export default function MenuItem(props: HeaderType) {
	// Rendering
	return (
		<li onClick={props.onClick}>
			<div
				id="menu-item"
				className="text-white cursor-pointer font-medium"
				onClick={() => useScrollTo(props.link)}
			>
				<a
					href={`#${props.link}`}
					title={props.name}
					className="pointer-events-none"
				>
					{props.name}
				</a>
			</div>
		</li>
	);
}
