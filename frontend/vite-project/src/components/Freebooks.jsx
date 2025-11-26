import React from 'react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import List from '../../public/list.json';  
import Cards from './Cards';

function Freebooks() {
    const filterData = List.filter((data) => data.category === "free");
    console.log(filterData);

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <h1 className='font-semibold text-xl pb-4'>Free Offered Courses</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla non suscipit, iure neque earum?</p>

                <div className='mt-6'>
                    <Swiper
                        className="w-full h-full py-6 select-none"
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            480: { slidesPerView: 1 },
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 3},
                        }}
                     >
                        {/* Example static slides */}
                         {filterData.map((item) => (
                        <SwiperSlide key={item.id} className="flex justify-center">
                            <Cards item={item} />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Freebooks;
