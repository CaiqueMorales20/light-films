// Imports
import { useContext, useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "@/utils/useOnClickOutside";

// Imported Component
import MenuItem from "../MenuItem";
import Link from "next/link";

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
  // const [currentPath, setCurrentPath] = useState(window.location.href.split('/').pop());

	// Functions
	useOnClickOutside(menuRef, () => setOpenedMenu(false));

	// Functions
  // setInterval(() => {
  //   setCurrentPath(window.location.href.split('/').pop());
  // }, 100)

	// Rendering
	return (
		<>
			<ul
				id="menu"
				ref={menuRef}
				data-opened={openedMenu}
				className="md:static md:bg-transparent md:translate-x-0 md:flex-row md:w-max flex items-center justify-center gap-8 text-sm flex-col fixed top-0 left-0 bg-primary-500 w-[80vw] h-full -translate-x-full duration-300 data-[opened=true]:translate-x-0 data-[opened=true]:bg-primary-400 z-20 isolate"
			>
        {/* {currentPath?.length ? <Link href="/" className="text-white cursor-pointer font-medium">Home</Link> : HeaderData.map((item, index) => {
					// Rendering
					return (
						<MenuItem
							onClick={() => setOpenedMenu(false)}
							key={index}
							name={item.name}
							link={item.link}
						/>
					);
				})} */}
				{HeaderData.map((item, index) => {
					// Rendering
					return (
						<MenuItem
							onClick={() => setOpenedMenu(false)}
							key={'link' + index}
							name={item.name}
							link={item.link}
						/>
					);
				})}
			</ul>
			<div
				id="overlay"
				data-opened={openedMenu}
				className="md:hidden data-[opened=false]:hidden data-[opened=false]:bg-transparent z-10 w-full h-full inset-0 fixed bg-black/[0.6]"
			></div>
		</>
	);
}
