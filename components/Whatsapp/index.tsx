import Image from "next/image";

// Functional Component
export default function Whatsapp() {
	// Rendering
	return (
		<a
			href="https://wa.me/+5511980842542?text=Olá,%20vim%20pelo%20seu%20site,%20poderiamos%20ter%20uma%20conversa?"
			className="fixed z-50 bottom-10 right-10 animate-pulse-grown"
		>
			<Image
				src="/whatsapp.png"
				alt="Enviar mensagem pelo Whatsapp"
				width={512}
				height={512}
				className="h-16 w-16"
			/>
		</a>
	);
}
