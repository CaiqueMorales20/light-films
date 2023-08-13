// Imported Components
import Section from "@/components/Section";
import Image from "next/image";

// Functional Component
export default function Benefits() {
	// Rendering
	return (
		<Section id="benefits" title="Benefícios" colored>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24">
				<div className="flex flex-col gap-8">
					<h3 className="text-white text-medium font-bold">
						Descubra os Benefícios do Insulfilm para Sua Casa, Comércio e Mais!
					</h3>
					<p className="text-white text-base text-justify">
						Descubra o conforto e a proteção que o insulfilm pode trazer para o
						seu lar, comércio ou escritório. Com a aplicação desse filme
						especial em suas janelas, você desfrutará de um ambiente mais
						fresco, proteção contra raios UV prejudiciais, privacidade
						aprimorada e maior segurança contra impactos. Aproveite todos esses
						benefícios em um só produto, transformando seu espaço em um lugar
						mais agradável, eficiente e seguro
					</p>
				</div>
				<Image
					src="/benefits-banner.jpg"
					alt="Image"
					width={1000}
					height={1000}
					className="w-full rounded-lg"
				/>
			</div>
		</Section>
	);
}
