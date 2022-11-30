
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import ButtonDefault from "../button/button-default/ButtonDefault";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import BoxRight from "../box-right/BoxRight";
import { ParallaxImageProps } from "../parallax-image/ParallaxImage";
import React, { useEffect, useRef, useState } from 'react';
import { getPortfolioData } from "../../api/portfolio/PortfolioData";
import { Controller, Parallax } from "swiper";
import gsap from 'gsap';


// Importing the CSS
import 'swiper/css';
import './style.scss'

// Component
import { Swiper, SwiperSlide } from 'swiper/react';
import BgImage from "../header/BgImage";
import { useArrayRef } from "../../hooks/DsnHooks";
import dsnSplitting from "../../hooks/Spltting";
import NavSlider from "../../components/slider-portfolio/NavSlider";
import ContentSlider from "../../components/slider-portfolio/ContentSlider";
import ControlNav from "../../components/slider-portfolio/ControlNav";
import SocialMediaSlider from "../social-media/SocialMediaSlider";
import { dsnCN } from "../../hooks/helper";
const data = [
    {
        title: "fund 1",
        src: '/assets/img/project/project1/close-up-pen-report 1.png',
        description: `Trigo Partners Fund I is a 100 million dollar fund organized to invest in the equity of private companies aiming high growth multiples.

        The size of the fund, the availability of the target companies and industries, and deal sourcing expertise, make Trigo focus on the Expansion & Growth stage of the private equity, bringing a suitable risk-reward profile for its investors. 
        Historically, growth investing has occupied the gap between early-stage venture capital & traditional buyout investing. Often billed as the best of both worlds, it targets companies that have matured past the highest-risk startup phase of their development, but still have the potential to generate high growth and high returns.`,
        to: "Funds",
        textButton: "READ more",
        icon: faAngleRight
    },

    {
        title: "Business & Investment",
        src: '/assets/img/project/project1/close-up-pen-report 1.png',
        description: `Trigo Partners Fund I is a 100 million dollar fund organized to invest in the equity of private companies aiming high growth multiples.

        The size of the fund, the availability of the target companies and industries, and deal sourcing expertise, make Trigo focus on the Expansion & Growth stage of the private equity, bringing a suitable risk-reward profile for its investors. 
        Historically, growth investing has occupied the gap between early-stage venture capital & traditional buyout investing. Often billed as the best of both worlds, it targets companies that have matured past the highest-risk startup phase of their development, but still have the potential to generate high growth and high returns.`,
        to: "",
        textButton: "READ more",
        icon: faAngleRight
    }
];

function HeroSectionTow({ className, typeBg, parallax, tag: Tag = 'div' }) {
    // return (
    //     <BoxRight  {...restProps} src={heroContent.src}>
    //         <FadeUpTrigger>
    //             <h2 className="pre-line">{heroContent.title}</h2>

    //             <p className="mt-30 m-w750 dsn-auto">{heroContent.description}</p>
    //             <ButtonDefault className="mt-30" icon={heroContent.icon} text={heroContent.textButton}
    //                 to={heroContent.to} />
    //         </FadeUpTrigger>
    //     </BoxRight>
    // );
    const dataProject = data,
        [contentRef, setContentRef] = useArrayRef(),
        [active, setActive] = useState(0),
        [bgSwiper, setBgSwiper] = useState(null),
        [navSwiper, setNavSwiper] = useState(null),
        rootSlider = useRef(),
        bg = useRef();

    let tl = gsap.timeline();


    useEffect(() => {

        const q = gsap.utils.selector(rootSlider);
        gsap.from(q('.post-info span '), { y: -15, stagger: 0.1, autoAlpha: 0 });
        gsap.from(q('.btn-default , .dsn-description'), {
            y: 15, autoAlpha: 0, stagger: 0.1, onComplete: () => {
                gsap.set(q('.btn-default , .dsn-description'), { clearProps: true })
            }
        });

        contentRef.current.forEach((item) => {
            const title = item.querySelector('.title-heading');
            if (title)
                dsnSplitting.Char(title);
        });


        if (!parallax)
            return;

        gsap.to(bg.current, {
            ...parallax,
            ease: "none",
            scrollTrigger: {
                trigger: rootSlider.current,
                start: "top top",
                scrub: true
            }
        })


    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    const getContent = (swiper) => {
        const oldNum = swiper.slides[swiper.previousIndex].getAttribute("data-dsn-id");
        const newNum = swiper.slides[swiper.activeIndex].getAttribute("data-dsn-id");

        return [
            newNum,
            oldNum,
            gsap.utils.selector(contentRef.current[newNum]),
            gsap.utils.selector(contentRef.current[oldNum]),
        ]
    }


    const init = (swiper) => {
        swiper.slides.forEach((item) => {
            const video = item.querySelector('.swiper-slide:not(.swiper-slide-active) video');
            if (video)
                video.pause();
        });

    };

    const activeVideo = (swiper) => {
        const newVideo = swiper.slides[swiper.activeIndex].querySelector('video');
        const oldVideo = swiper.slides[swiper.previousIndex].querySelector('video');

        if (newVideo)
            newVideo.play();
        if (oldVideo)
            oldVideo.pause();
    }

    const swiperChange = (swiper) => {
        const [newNum, oldNum, newContent, oldContent] = getContent(swiper);
        const [newTitle, oldTitle] = [newContent('.title-heading .char'), oldContent('.title-heading .char')]
        const $isRight = oldNum < newNum;
        const animate = {
            show: { autoAlpha: 1, x: 0, stagger: 0.05, ease: "elastic.inOut", rotation: 0, scale: 1, yoyo: true },
            hide: {
                autoAlpha: 0,
                x: !$isRight ? "40%" : "-40%",
                stagger: 0.05,
                ease: "elastic.inOut",
                yoyo: true,
                rotation: 8,
                scale: 1.1
            }
        }
        activeVideo(swiper);
        tl.progress(1);
        tl = new gsap.timeline();


        tl.fromTo(
            $isRight ? oldTitle : oldTitle.reverse(), 1, animate.show,
            { ...animate.hide, onComplete: () => setActive(Number.parseInt(newNum, 10)) }
        );

        tl.fromTo($isRight ? newTitle.reverse() : newTitle, 1.2, animate.hide, animate.show, "-=.1");


    }

    const optionSwiper = {
        modules: [Parallax, Controller],
        spaceBetween: 50,
        slidesPerView: 1,
        parallax: true,
        speed: 1500,
        onInit: init,
        onSlideChange: swiperChange,
        onSwiper: setBgSwiper,
        controller: { control: navSwiper }
    }

    return (
        <Tag className={dsnCN('root-slider half-content v-dark-head background-main', className)} ref={rootSlider}>

            {/* <div className={`bg-image hero-img ${typeBg}`} ref={bg}> */}
            <Swiper  {...optionSwiper} grabCursor>
                {dataProject.map((item, key) =>
                    <SwiperSlide className="overflow" key={key} data-dsn-id={key}>
                        <BoxRight src={item.src}>
                            <FadeUpTrigger>
                                <h2 className="pre-line">{item.title}</h2>

                                <p className="mt-30 m-w750 dsn-auto text-dark">{item.description}</p>
                                <ButtonDefault className="mt-30" icon={item.icon} text={item.textButton}
                                    to={item.to} />
                            </FadeUpTrigger>
                        </BoxRight>
                    </SwiperSlide>
                )}

                {/* <div className="control-num">
                    <span className="sup">{((active) <= 9 ? "0" : '') + (active + 1)}</span>
                </div> */}
                <ControlNav />

            </Swiper>
            {/* </div> */}
            {/* <ContentSlider data={dataProject} ref={setContentRef} activeClass={active} /> */}
            {/* <NavSlider data={dataProject}
                speed={optionSwiper.speed}
                onSwiper={setNavSwiper}
                controller={{ control: bgSwiper }}
            /> */}
            {/* <SocialMediaSlider /> */}
        </Tag>

    );
}

export default HeroSectionTow;