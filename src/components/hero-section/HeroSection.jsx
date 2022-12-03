import React from 'react'

// Importing the CSS
import './style.scss'

import MoveTrigger from "../../animation/MoveTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";

// Component
import { Col, Row } from 'react-bootstrap';
import ParallaxImage from "../parallax-image/ParallaxImage";
import { dsnCN } from "../../hooks/helper";


// Theme
import { useTheme } from "next-themes";
const HeroContent = {
    title: "Hello, we are Trigo",
    description: `The MENA focused growth stage Private Equity fund, equipped with experienced & high-skill managerial & operational team, planning to invest in high-return industries with active engagement in the business to create value for its investors.`,
    authorTitle: "SALVADOR DALI",
    authorJob: "Digital Artisit",
    experienceNumber: "20",
    experienceDescription: `YEARS OF \nDIGITAL EXPERIENCE`,
    heroImage: '/assets/img/project/project1/TrigoGlobal.png'
};


function HeroSection({ className, ...restProps }) {
    const { theme, setTheme } = useTheme()

    return (
        <section className={dsnCN('hero-section', className)} {...restProps}>
            <Row>
                <Col lg={4}>
                    <div className='box-text '>
                        <MoveTrigger from={{ y: 0 }} to={{ y: -30 }} tablet={false} mobile={false}>
                            {(ref) => <h2 className=' mb-30 pre-line text-green-light' ref={ref}>{HeroContent.title}</h2>}
                        </MoveTrigger>
                        <FadeUpTrigger>
                            {(ref) => <>
                                <p ref={ref}>{HeroContent.description}</p>
                                {/* <h5 className='sm-title-block mt-30' ref={ref}>{HeroContent.authorTitle}</h5>
                                <span className="auth-position mt-10" ref={ref}>{HeroContent.authorJob}</span>
                                <div className='experience mt-30'>
                                    <span className='number' ref={ref}>{HeroContent.experienceNumber}</span>
                                    <p className="color-heading pre-line"
                                       ref={ref}>{HeroContent.experienceDescription}</p>
                                </div> */}
                            </>}
                        </FadeUpTrigger>

                    </div>
                </Col>
                <Col className="mt-30" lg={8}>
                    <div className={`box-img ${theme === 'dark' ? 'background-section' : 'bg-green-light'}  box-padding`}>
                        <ParallaxImage src={HeroContent.heroImage} height="300px" />
                    </div>
                </Col>
            </Row>
        </section>
    )
}


export default HeroSection