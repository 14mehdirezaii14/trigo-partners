import { Pagination, SwiperOptions } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import PortfolioItem from "../portfolio/PortfolioItem";
const SectorData = [
    // {
    //     title: '',
    //     src: '/assets/img/SectorsSwiper/Rectangle 6.png',
    //     url: ''
    // }
    {
        id: 1,
        title: "Trigo Global Partner",
        slug: 'time-tag-watch',
        // category: ['Brand'],
        description: 'Sometimes, we need to check the time, wondering when our work or meeting will finish, without getting caught by others.',
        src: '/assets/img/SectorsSwiper/man-using-digital-tablet-psd-mockup-smart-technology 1.png',
        // srcSlider: '/assets/img/project/project1/13.jpg',
        overlay: 2,
        // component: (props) => <TimeTagWatch {...props} />
    },
    {
        id: 2,
        title: "Trigo Global Partner",
        slug: 'time-tag-watch',
        // category: ['Brand'],
        description: 'Sometimes, we need to check the time, wondering when our work or meeting will finish, without getting caught by others.',
        src: '/assets/img/SectorsSwiper/man-using-digital-tablet-psd-mockup-smart-technology 1.png',
        // srcSlider: '/assets/img/project/project1/13.jpg',
        overlay: 2,
        // component: (props) => <TimeTagWatch {...props} />
    },
    
    {
        id: 3,
        title: "Trigo Global Partner",
        slug: 'time-tag-watch',
        // category: ['Brand'],
        description: 'Sometimes, we need to check the time, wondering when our work or meeting will finish, without getting caught by others.',
        src: '/assets/img/SectorsSwiper/man-using-digital-tablet-psd-mockup-smart-technology 1.png',
        // srcSlider: '/assets/img/project/project1/13.jpg',
        overlay: 2,
        // component: (props) => <TimeTagWatch {...props} />
    },
    
    {
        id: 4,
        title: "Trigo Global Partner",
        slug: 'time-tag-watch',
        // category: ['Brand'],
        description: 'Sometimes, we need to check the time, wondering when our work or meeting will finish, without getting caught by others.',
        src: '/assets/img/SectorsSwiper/man-using-digital-tablet-psd-mockup-smart-technology 1.png',
        // srcSlider: '/assets/img/project/project1/13.jpg',
        overlay: 2,
        // component: (props) => <TimeTagWatch {...props} />
    },
    
]

const SectorsSwiper = ({ desktop, mobile, tablet, ...restProps }) => {
    return (
        <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, el: '.swiper-pagination' }}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
                992: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 2
                },
                576: {
                    slidesPerView: 1
                },
                320: {
                    slidesPerView: 1
                },
            }}
            {...restProps}
        >
            {
                SectorData.map((item, index) =>
                    <SwiperSlide key={index}>
                        <PortfolioItem portoDetails={item} textButton="View Case" />
                    </SwiperSlide>)
            }

            <div className="swiper-pagination" />


        </Swiper>
    )
}

export default SectorsSwiper