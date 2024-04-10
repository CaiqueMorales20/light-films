// Client Side
"use client";

// Imports
import { useRef } from "react";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper/modules";

// Imported Components
import Section from "@/components/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "@/components/Button";
import Link from "next/link";

// Functional Component
export default function Projects() {
	// Variables
	const swiperRef = useRef<any | null>(null);

	// Functions
	const handlePrevSlide = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev();
		}
	};

	const handleNextSlide = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext();
		}
	};

	// Rendering
	return (
		<Section id="projects" title="Nossos projetos">
			<div className="flex flex-col gap-10">
				<div className="relative">
					<Image
						src="/arrow-prev.svg"
						width={48}
						height={48}
						className="absolute top-[50%] -translate-y-[50%] w-12 z-40 -left-8 cursor-pointer drop-shadow-3xl"
						alt="Slide anterior"
						onClick={() => handlePrevSlide()}
					/>
					<Swiper
						ref={swiperRef}
						modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
						spaceBetween={50}
						slidesPerView={1}
						grabCursor
						autoplay={{
							delay: 2000,
							disableOnInteraction: false,
						}}
						loop={true}
						breakpoints={{
							568: {
								slidesPerView: 1,
							},
							1080: {
								slidesPerView: 3,
							},
						}}
					>
						<SwiperSlide>
							<Image
								className="w-full h-auto object-cover"
								src="/projects/porto-seguro/porto-1.jpg"
								alt="Porto Seguro"
								width={1000}
								height={1000}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								className="w-full h-auto object-cover"
								src="/projects/sabesp/sabesp-1-1.jpg"
								alt="Sabesp"
								width={1000}
								height={1000}
							/>
						</SwiperSlide>
						{/* Repeat */}
						<SwiperSlide>
							<Image
								className="w-full h-auto object-cover"
								src="/projects/senai/senai-1-1.jpg"
								alt="Senai"
								width={1000}
								height={1000}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								className="w-full h-auto object-cover"
								src="/projects/porto-seguro/porto-1.jpg"
								alt="Porto Seguro"
								width={1000}
								height={1000}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								className="w-full h-auto object-cover"
								src="/projects/sabesp/sabesp-1-1.jpg"
								alt="Sabesp"
								width={1000}
								height={1000}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<Image
								src="/projects/senai/senai-1-1.jpg"
								alt="Senai"
								width={1000}
								height={1000}
							/>
						</SwiperSlide>
					</Swiper>
					<Image
						src="/arrow-next.svg"
						width={48}
						height={48}
						className="absolute top-[50%] -translate-y-[50%] w-12 z-40 -right-8 cursor-pointer drop-shadow-3xl"
						alt="Próximo slide"
						onClick={() => handleNextSlide()}
					/>
				</div>
				<div className="self-center">
					<Link
						href="/projetos"
						title="Ver todos os projetos"
						className="block w-max rounded-[1rem] bg-primary-400 hover:bg-white text-white hover:text-primary-400  border-2 border-solid border-primary-400 duration-300"
					>
						<p className="text-sm font-bold uppercase p-[1.125em_5.125em]">
							Ver todos projetos
						</p>
					</Link>
				</div>
			</div>
		</Section>
	);
}
