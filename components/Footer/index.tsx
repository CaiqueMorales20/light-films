import Image from "next/image";

// Functional Component
export default function Footer() {
	// Rendering
	return (
		<footer className="py-40 bg-primary-400 relative">
			<div className="flex items-center justify-center  m-auto h-[5rem] w-[90%]">
				<div className="flex flex-col items-center gap-2">
					<a className="text-white font-bold text-lg">Light Films</a>
					<p className="text-white text-sm max-w-sm text-center mb-3">
						Proteção e Estilo em um lugar: Insulfilm Arquitetônico de Qualidade
					</p>
					<div>
						<a
							href="https://www.facebook.com/vagnermmorales/"
							title="Abrir facebook da empresa"
							target="_blank"
						>
							<Image
								src="/facebook.png"
								alt="Abrir facebook"
								width={20}
								height={20}
							/>
						</a>
					</div>
				</div>
			</div>
			<p className="text-gray-400 text-sm absolute left-1/2 -translate-x-1/2 bottom-5 text-center">
				Site desenvolvido por &nbsp;
				<a
					className="hover:underline"
					href="https://caiquemorales.com/"
					target="_blank"
					title="Ver portfolio do desenvolvedor do site"
				>
					Caique Morales
				</a>
			</p>
		</footer>
	);
}
