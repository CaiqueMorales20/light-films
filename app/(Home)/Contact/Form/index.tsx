// Client Side
"use client";

// Imported Components
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../Modal";

// Functional Component
export default function Form() {
	// Variables
	const [modalOpened, setModalOpened] = useState(false);
	const form = useRef<any>();

	// Functions
	const sendEmail = (e: any) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_zgdcyfm",
				"template_nqx9mr1",
				form.current,
				"hv75Z0c-mETbppE6e"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	// Rendering
	return (
		<>
			{modalOpened && <Modal />}
			<form
				ref={form}
				onSubmit={sendEmail}
				className="flex flex-col p-8 bg-primary-400 rounded-lg"
			>
				<label className="text-white mb-2 md:mb-4 font-semibold">Nome</label>
				<input
					className="bg-white mb-4 md:mb-8 px-4 py-2 border-primary-400 border-2 rounded-md"
					type="text"
					name="user_name"
					required
				/>
				<label className="text-white mb-2 md:mb-4 font-semibold">Email</label>
				<input
					className="bg-white mb-4 md:mb-8 px-4 py-2 border-primary-400 border-2 rounded-md"
					type="email"
					name="user_email"
					required
				/>
				<label className="text-white mb-2 md:mb-4 font-semibold">
					Mensagem
				</label>
				<textarea
					className="mb-4 md:mb-8 px-4 py-2 h-44 bg-white border-primary-400 border-2 rounded-md resize-none"
					name="message"
					required
				/>
				<button
					onClick={() => setModalOpened(true)}
					className="align w-full md:w-max rounded-[1rem] border-solid bg-white border-[2px] hover:border-white hover:bg-primary-400 text-primary-400 hover:text-white duration-300"
				>
					<p className="text-sm font-bold uppercase p-[1.125em_5.125em]">
						Enviar
					</p>
				</button>
			</form>
		</>
	);
}
