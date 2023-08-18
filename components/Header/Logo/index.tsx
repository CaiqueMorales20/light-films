import Link from "next/link";

// Functional Component
export default function Logo() {
	// Rendering
	return (
		<Link
			href="/"
			title="Light Films"
			id="logo"
			className="text-white font-bold text-base"
		>
			Light Films
		</Link>
	);
}
