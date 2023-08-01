// Imports
import { useContext, useRef } from "react";
import { useOnClickOutside } from "@/utils/useOnClickOutside";

// Imported Component
import MenuItem from "../MenuItem";

// Data
import { HeaderData } from "../data";

// Context
import { HeaderContextType } from "../type";
import { HeaderContext } from "..";

// Functional Component
export default function Menu() {
	// Variables
	const { openedMenu, setOpenedMenu } = useContext(
		HeaderContext
	) as HeaderContextType;
	const menuRef = useRef(null);

	// Functions
	useOnClickOutside(menuRef, () => setOpenedMenu(false));

	// Rendering
	return (
		<>
			<ul
				id="menu"
				ref={menuRef}
				data-opened={openedMenu}
				className="md:static md:bg-transparent md:translate-x-0 md:flex-row md:w-max flex items-center justify-center gap-8 text-sm flex-col absolute top-0 left-0 bg-primary-500 w-[80vw] h-full -translate-x-full duration-300 data-[opened=true]:translate-x-0 data-[opened=true]:bg-primary-400 z-20"
			>
				{HeaderData.map((item, index) => {
					// Rendering
					return (
						<MenuItem
							onClick={() => setOpenedMenu(false)}
							key={index}
							name={item.name}
							link={item.link}
						/>
					);
				})}
			</ul>
			<div
				id="overlay"
				data-opened={openedMenu}
				className="md:hidden data-[opened=false]:-z-10 data-[opened=false]:bg-transparent z-10 w-full h-full inset-0 fixed bg-black/[0.6]"
			></div>
		</>
	);
}
