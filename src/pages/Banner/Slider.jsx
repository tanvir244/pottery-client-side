// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <div className='w-[94%] md:max-w-6xl mx-auto my-3 md:my-6 mb-48'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='relative w-full h-[80vh] rounded-xl overflow-hidden'>
                        <img className='absolute inset-0 w-full h-full object-cover' src="https://i.ibb.co/Rc0NJvQ/Ceramics-and-Pottery-36.jpg" alt="" />
                        <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-black opacity-80 to-transparent'></div>
                    </div>

                    <div className='absolute top-[10%] md:top-[25%] px-8 md:px-16 space-y-6'>
                        <h1 className='text-3xl md:text-5xl font-bold text-cyan-400 md:h-2/3 lg:w-1/2'>Ceramics and pottery are fascinating subjects!</h1>
                        <p className='text-white md:w-[70%]'>Ceramics refer to objects made from clay that are shaped and then hardened through firing at high temperatures. Pottery specifically refers to ceramic ware made by potters, typically functional objects like bowls, plates, vases, and pots.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;