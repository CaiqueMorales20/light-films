// Client side
"use client";

// Imports
import { createContext, useState } from "react";
import { useUpdateEffect } from "@/utils/useUpdateEffect";

// Icons
import Hamburger from "@/public/menu.png";
import Image from "next/image";
import Menu from "./Menu";
import Logo from "./Logo";
import { HeaderContextType } from "./type";

// Context
export const HeaderContext = createContext<null | HeaderContextType>(null);

// Functional Component
export default function Header() {
	// Variables
	const [openedMenu, setOpenedMenu] = useState(false);

	// Functions
	useUpdateEffect(() => {
		document.body.classList.toggle("menu-open");
	}, [openedMenu]);

	// Rendering
	return (
		<HeaderContext.Provider value={{ openedMenu, setOpenedMenu }}>
			<header className="flex justify-between gap-4 bg-primary-400 relative isolate z-10">
				<nav className="flex items-center justify-between m-auto h-[5rem] w-[90%] ">
					<Logo />
					<Menu />
					<div className="width-[32px]">
						<Image
							src={Hamburger}
							width={32}
							height={32}
							alt="Abrir menu"
							onClick={() => setOpenedMenu(!openedMenu)}
							className="md:hidden cursor-pointer"
							priority
						/>
					</div>
				</nav>
			</header>
		</HeaderContext.Provider>
	);
}
