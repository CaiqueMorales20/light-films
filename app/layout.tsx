// Imports
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";

// Imported Components
import Header from "@/components/Header";

// Stylesheets
import "./globals.css";

// Font
const montserrat = Montserrat({ subsets: ["latin"] });

// SEO
export const metadata: Metadata = {
	title: "Light Films",
	description:
		"Descubra os incríveis benefícios da aplicação de insulfilm em sua casa, comércio ou escritório. Reduza o calor, bloqueie os raios UV prejudiciais, aumente a privacidade e fortaleça a segurança de suas janelas. Transforme seu espaço em um ambiente mais confortável, protegido e eficiente com o insulfilm. Saiba mais!",
};

// Functional Component
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="max-w-[100vw] overflow-x-hidden">
			<body
				className={montserrat.className + "max-w-[100vw] overflow-x-hidden"}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
