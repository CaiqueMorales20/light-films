import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Light Films",
	description:
		"Descubra os incríveis benefícios da aplicação de insulfilm em sua casa, comércio ou escritório. Reduza o calor, bloqueie os raios UV prejudiciais, aumente a privacidade e fortaleça a segurança de suas janelas. Transforme seu espaço em um ambiente mais confortável, protegido e eficiente com o insulfilm. Saiba mais!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
