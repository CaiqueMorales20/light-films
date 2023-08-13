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
	robots: "noindex, nofollow",
	description:
		"Descubra os benefícios da aplicação de insulfilm: reduza o calor, bloqueie raios UV, aumente a privacidade e fortaleça a segurança. Transforme seu espaço em um ambiente mais confortável e protegido. Saiba mais!",
	authors: [{ name: "Caique Morales", url: "https://caiquemorales.com/" }],
	publisher: "Vercel",
	keywords:
		"Insufilm, Proteção solar, Aplicação de insulfilm, Projetos, Privacidade",
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
				<Header />
				{children}
			</body>
		</html>
	);
}
