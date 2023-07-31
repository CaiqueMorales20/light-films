"use client";

// Imports
import { useMediaQuery } from "@/utils/useMediaQuery";

// Icons
import { Menu } from "lucide-react";

// Functional Component
export default function Header() {
	// Variables
	const mobile = useMediaQuery("(max-width: 768px)");

	// Rendering
	return (
		<header>
			<h1 id="logo" className="flex gap-5  text-white font-semibold">
				Light Films
			</h1>
			{mobile && <Menu />}
		</header>
	);
}
