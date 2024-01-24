import '../Homepage/CarouselData.css'
import hero from "../Images/hero.png";
import samsung from "../Images/Samsung.png";
import Ukum from "../Images/ukum.png";
import isro from "../Images/isro.png";
import cis from "../Images/cls.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useState, useEffect } from 'react';

function Testimoinals() {

    let [data, setData] = useState([])

    useEffect(() => {
        let url = 'https://api.sheety.co/156146c79d788774151134fb228ebb49/ayushCig/testimonials';
        fetch(url)
            .then((response) => response.json())
            .then(json => {
                // Do something with the data
                console.log(json.testimonials);
                setData(json.testimonials)
                console.log(data)



            });

    }, [])
    return (

        <>
            {/* <div className='border-solid border-2 border-indigo-600'> */}
            <h1 class="mb-4 text-4xl text-center mt-[20vh] font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Testimonials</h1>

            <Swiper
                // spaceBetween={50}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}

                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >


                {data.map((item, index) => (
                    // setImage(item.imageUrl)
                    <SwiperSlide key={index}>
                        <section className="bg-white dark:bg-gray-900 mb-[5vh]">
                            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                                <figure className="max-w-screen-md mx-auto">
                                    <svg
                                        className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                                        viewBox="0 0 24 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <blockquote>
                                        <p className="text-2xl font-medium text-gray-900 dark:text-white">
                                            {item.text}
                                        </p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3">

                                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <div className="pr-3 font-medium text-gray-900 dark:text-white">
                                                {item.name}
                                            </div>
                                            <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                                {item.designation}
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </section>

                    </SwiperSlide>
                ))}



            </Swiper >
            {/* </div> */}
        </>
    )
}




export default Testimoinals;


// make a component which has a image as background and text displayed over it , make sure the ctext is visible and the component is responsive use tailwind css must