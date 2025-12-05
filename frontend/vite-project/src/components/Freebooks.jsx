import React from 'react';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
 
import Cards from './Cards';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function Freebooks() {
    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get('http://localhost:4001/book');

                const data = res.data.filter((data) => data.category === "free");
                console.log(data);
                setBook(data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);

    var setting = {
        className: "w-full h-full py-6 select-none",
        modules: [Navigation, Pagination],
        navigation: true,
        pagination: { clickable: true },
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
        }
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <h1 className='font-semibold text-xl pb-4'>Free Offered Courses</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla non suscipit, iure neque earum?</p>

                <div className='mt-6'>
                    <Swiper {...setting}>
                        {book.map((item) => (
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
