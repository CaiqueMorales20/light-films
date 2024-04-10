// Types
import Button from "@/components/Button";
import { ModalType } from "./types";

// Functional Component
export default function Modal(props: ModalType) {
	// Rendering
	return (
		<div className="bg-black/60 w-full h-full fixed flex items-center justify-center inset-0 z-50">
			<div className="py-10 px-20 max-w-[90%] md:max-w-2xl rounded-2xl bg-white flex flex-col gap-10 items-center justify-center">
				<div className="flex flex-col gap-4">
					<p className="text-primary-400 font-medium text-center text-base">
						Agradecemos por entrar em contato conosco.
					</p>
					<p className="text-primary-400 font-medium text-center text-base">
						Seu e-mail foi recebido com sucesso e estamos ansiosos para
						responder às suas perguntas o mais rápido possível.
					</p>
				</div>
				<button
					className="w-max rounded-[1rem] bg-primary-400 hover:bg-white  text-white hover:text-primary-400 border-2 border-solid border-primary-400 duration-300"
					onClick={props.onClick}
				>
					<p className="text-sm font-bold uppercase p-[1.125em_5.125em]">
						Fechar
					</p>
				</button>
			</div>
		</div>
	);
}
