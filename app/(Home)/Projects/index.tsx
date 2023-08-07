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
import Title from "@/components/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
		<Section>
			<Title text="Nossos projetos" />
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
						delay: 2500,
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
							src="/atelie.png"
							alt="Atelie.png"
							width={10000}
							height={10000}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="/lacerda.png"
							alt="Atelie.png"
							width={10000}
							height={10000}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="/riachuelo.png"
							alt="Atelie.png"
							width={10000}
							height={10000}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="/atelie.png"
							alt="Atelie.png"
							width={10000}
							height={10000}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="/lacerda.png"
							alt="Atelie.png"
							width={10000}
							height={10000}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Image
							src="/riachuelo.png"
							alt="Atelie.png"
							width={10000}
							height={10000}
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
		</Section>
	);
}
