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
	title: "Light Films - Privacidade, Proteção e Estilo em Vidros",
	robots: "index, follow",
	description:
		"Explore os benefícios do insulfilm: diminua o calor, bloqueie raios UV, aumente a privacidade e reforce a segurança. Crie um ambiente mais confortável e seguro. Saiba mais!",
	authors: [{ name: "Caique Morales", url: "https://caiquemorales.com/" }],
	publisher: "Vercel",
	keywords:
		"Insufilm, Proteção solar, Aplicação de insulfilm, Projetos, Privacidade, benefícios",
	alternates: {
		canonical: "https://light-films.vercel.app/",
	},
};

// Functional Component
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br" className="max-w-[100vw] overflow-x-hidden">
			<body className={montserrat.className}>
				<div className="max-w-[100vw] overflow-x-hidden">
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
