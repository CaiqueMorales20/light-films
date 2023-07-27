// Imports
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Styled Components
import { SectionTitle } from "../../../global/GlobalStyle";
import { Arrow, ProjectsS, SliderS } from "./style";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Images
import SlideImg1 from "../../../assets/img/projects/atelie.png";
import SlideImg2 from "../../../assets/img/projects/lacerda.png";
import SlideImg3 from "../../../assets/img/projects/riachuelo.png";
import SlideImg4 from "../../../assets/img/projects/atelie.png";
import SlideImg5 from "../../../assets/img/projects/lacerda.png";
import SlideImg6 from "../../../assets/img/projects/riachuelo.png";
import ArrowPrev from "../../../assets/img/projects/arrow-prev.svg";
import ArrowNext from "../../../assets/img/projects/arrow-next.svg";

// Functional Component
export default function Projects() {
	const swiperRef = useRef<any | null>(null);

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

	return (
		<ProjectsS>
			<SectionTitle>Alguns de nossos projetos</SectionTitle>
			<SliderS>
				<Arrow src={ArrowPrev} onClick={() => handlePrevSlide()} />
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					spaceBetween={50}
					slidesPerView={1}
					grabCursor
					loop={true}
					breakpoints={{
						568: {
							slidesPerView: 1,
						},
						1080: {
							slidesPerView: 3,
						},
					}}
					ref={swiperRef}
				>
					<SwiperSlide>
						<img src={SlideImg1} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={SlideImg2} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={SlideImg3} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={SlideImg4} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={SlideImg5} />
					</SwiperSlide>
					<SwiperSlide>
						<img src={SlideImg6} />
					</SwiperSlide>
				</Swiper>
				<Arrow src={ArrowNext} onClick={() => handleNextSlide()} />
			</SliderS>
		</ProjectsS>
	);
}
