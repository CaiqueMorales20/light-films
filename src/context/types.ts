// Types
export type HeaderContextComponentType = {
	children: React.ReactNode;
};

export type HeaderContextType = {
	openedMenu: boolean;
	setOpenedMenu: (prev: boolean) => void;
};
