import Section from "@/components/Section";
import Form from "./Form";

// Functional Component
export default function Contact() {
	// Rendering
	return (
		<Section id="contact" title="Contato">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
				<div className="flex flex-col gap-6">
					<h3 className="text-medium font-bold text-primary-400">
						Entre em Contato Conosco
					</h3>
					<p className="text-base font-base text-justify">
						Estamos ansiosos para ouvir de você e responder a todas as suas
						perguntas. Se você tem alguma dúvida, comentário ou quer saber mais
						sobre nossos serviços, não hesite em entrar em contato. A sua
						opinião é valiosa para nós e estamos aqui para ajudar.
					</p>
					<p className="text-base font-base text-justify">
						Aqui você encontrará um formulário de contato. Preencha os campos
						com as informações necessárias e clique em "Enviar". Estamos
						comprometidos em fornecer respostas rápidas e relevantes para cada
						consulta que recebemos. Não perca a oportunidade de se conectar
						conosco e começar uma conversa que pode levar a soluções
						excepcionais.
					</p>
				</div>
				<Form />
			</div>
		</Section>
	);
}
