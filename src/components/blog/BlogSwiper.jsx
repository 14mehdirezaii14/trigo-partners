import React from 'react'
import './style.scss'


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import BlogItem from "./BlogItem";
import { Pagination, SwiperOptions } from "swiper";



const BlogDetails = [
    {
        title: "Digital Photography Tips",
        category: ["Photography", "Brand"],
        img: "/assets/img/SectorsSwiper/man-using-digital-tablet-psd-mockup-smart-technology 1.png",
        description: "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
    },
    {
        title: "Digital Photography Tips",
        category: "Photography",
        img: "/assets/img/SectorsSwiper/man-using-digital-tablet-psd-mockup-smart-technology 1.png",
        description: "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",
    },
    {
        title: "Digital Photography Tips",
        category: ["Photography"],
        img: "/assets/img/SectorsSwiper/man-using-digital-tablet-psd-mockup-smart-technology 1.png",
        description: "Simple point-and-shoot digital cameras can give surprising quality when they have the right lenses and sensors.",

    },
]

const BlogSwiper = ({ desktop, mobile, tablet, ...restProps }: SwiperOptions) => {

    return (
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            spaceBetween={30} slidesPerView={1}
            breakpoints={{
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                }
            }}
            {...restProps}
        >
            {
                BlogDetails.map((item, index) =>
                    <SwiperSlide key={index}>
                        <BlogItem
                            src={item.img} title={item.title} category={item.category} description={item.description} to="/blog-details" />
                    </SwiperSlide>)
            }
            <div className="swiper-pagination" />
        </Swiper>

    );
}

BlogSwiper.defaultProps = {
    desktop: {
        slidesPerView: 2.5
    },
    tablet: {
        slidesPerView: 1.5
    },
    mobile: {
        slidesPerView: 1.5
    }
}

export default BlogSwiper