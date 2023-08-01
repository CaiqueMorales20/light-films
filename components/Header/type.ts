// Types
export type HeaderContextType = {
	openedMenu: boolean;
	setOpenedMenu: (prev: boolean) => void;
};

export type HeaderType = {
	name: string;
	link: string;
	onClick?: () => void;
};
