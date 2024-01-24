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

function CarouselData() {

    let [data, setData] = useState([])
    let [image, setImage] = useState('')

    useEffect(() => {
        let url = 'https://api.sheety.co/156146c79d788774151134fb228ebb49/cigDatabase/events';
        fetch(url)
            .then((response) => response.json())
            .then(json => {
                // Do something with the data
                console.log(json.events);
                setData(json.events)

            });

    }, [])
    return (

        <>
            {/* <div className='border-solid border-2 border-indigo-600'> */}

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
                        <div className="relative mx-[20vw] mb-[3vh]">
                            <img src={item.imageUrl} alt={item.title} className="w-[60vw] h-auto" />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                <div className="bg-black bg-opacity-50 text-white p-4 lg:mt-[60vh] ">
                                    <h2 className=" font-bold mb-2 lg:text-7xl">{item.title}</h2>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}



            </Swiper >
            {/* </div> */}
        </>
    )
}
const data = [
    {
        heading: "INDUSTRIAL VISIT",

        image: hero,

        text: "IIT Roorkee in collaboration with Indian Space Research Organisation(ISRO) organized a full day workshop on Space Technology on 7th April 2018.The focus of the workshop was mainly on ‘Bhuvan’, an online geoportal which provides image and map visualization with data download and versatile viewing capabilities.CIG invited four eminent speakers from the National Remote Sensing Centre (NRSC), ISRO",
    },
    {
        heading: "UKUM STARTUP EXPO",

        image: Ukum,

        text: "IIT Roorkee in collaboration with Indian Space Research Organisation(ISRO) organized a full day workshop on Space Technology on 7th April 2018.The focus of the workshop was mainly on ‘Bhuvan’, an online geoportal which provides image and map visualization with data download and versatile viewing capabilities.CIG invited four eminent speakers from the National Remote Sensing Centre (NRSC), ISRO",
    },
    {
        heading: "CORPORATE LEADER SERIES",

        image: cis,

        text: "IIT Roorkee in collaboration with Indian Space Research Organisation(ISRO) organized a full day workshop on Space Technology on 7th April 2018.The focus of the workshop was mainly on ‘Bhuvan’, an online geoportal which provides image and map visualization with data download and versatile viewing capabilities.CIG invited four eminent speakers from the National Remote Sensing Centre (NRSC), ISRO",
    },

    {
        heading: "SAMSUNG WORKSHOP",

        image: samsung,
        text: "Technology workshop on “Advanced Embedded Technology” presented by the eminent personalities, who are from the largest overseas R&D Centre of Samsung Electronics, Samsung Research Institute, Bangalore (SRI-B). This event is being conducted by the joint efforts of the CSE department and the CIG",
    },

    {
        heading: "WORKSHOP ON SPACE TECHNOLOGY",

        image: isro,

        text: "IIT Roorkee in collaboration with Indian Space Research Organisation(ISRO) organized a full day workshop on Space Technology on 7th April 2018.The focus of the workshop was mainly on ‘Bhuvan’, an online geoportal which provides image and map visualization with data download and versatile viewing capabilities.CIG invited four eminent speakers from the National Remote Sensing Centre (NRSC), ISRO",
    }
];



export default CarouselData


// make a component which has a image as background and text displayed over it , make sure the ctext is visible and the component is responsive use tailwind css must