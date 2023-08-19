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
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Type
interface SwiperCType {
  photos: any[]
}

// Functional Component
export default function SwiperC(props: SwiperCType) {
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
				spaceBetween={30}
				slidesPerView={1}
				grabCursor
        loop
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				breakpoints={{
					568: {
						slidesPerView: 1,
					},
					1080: {
						slidesPerView: 5,
					},
				}}
			>
				{props.photos.map((photo, index) => (
          <SwiperSlide key={'slider' +  index}>
            <Image
              src={photo.path}
              alt={photo.alt}
              className="object-cover h-52"
              width={250}
              height={250}
            />
          </SwiperSlide>
        ))}
				{props.photos.map((photo, index) => (
          <SwiperSlide key={'slider 2' +  index}>
            <Image
              src={photo.path}
              alt={photo.alt}
              className="object-cover h-52"
              width={800}
              height={800}
            />
          </SwiperSlide>
        ))}
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
	);
}
