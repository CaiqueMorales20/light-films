// Imported Components
import Button from "@/components/Button";

// Functional Component
export default function Hero() {
	// Rendering
	return (
		<section
			id="home"
			className="h-[100vh]  mt-[calc(-5rem)] bg-[url(/hero-bg.jpg)] bg-center bg-cover flex items-center justify-center "
		>
			<div className="max-w-[90%] text-center flex flex-col gap-8 items-center">
				<div className="flex flex-col gap-3">
					<h1 className="text-white text-xl font-bold max-w-[62.5rem]">
						Proteção e Estilo em um lugar: Película Arquitetônico de Qualidade
					</h1>
					<h2 className="text-white text-medium max-w-[62.5rem]">
						Controle a Luz, a Temperatura e a Privacidade sem abrir mão do
						Design
					</h2>
				</div>
				<Button text="Ver mais" navigate="occupation" />
			</div>
		</section>
	);
}
