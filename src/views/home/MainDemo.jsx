import React, { lazy } from "react";


import { Container } from "react-bootstrap";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";


import SliderPortfolio from "../../components/slider-portfolio/SliderPortfolio";
import HeroSection from "../../components/hero-section/HeroSection";
import ServiceOne from "../../components/services/ServiceOne";
import TitleSection from "../../components/heading/TitleSection";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import ButtonDefault from "../../components/button/button-default/ButtonDefault";
import PortfolioSwiper from "../../components/portfolio/PortfolioSwiper";
import BoxImageVertical from "../../components/box-image-vertical/BoxImageVertical";
import DsnGrid from "../../components/DsnGrid";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import Testimonial from "../../components/testimonial/Testimonial";
import BlogSwiper from "../../components/blog/BlogSwiper";
import BrandClient from "../../components/brand-client/BrandClient";
import NextPageContent from "../../components/next/NextPageContent";
import Footer from "../../components/footer/Footer";
import HeroSectionTow from "../../components/hero-section/HeroSectionTow";
// <><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>
const SectorsSwiper = lazy(() => import('../../components/SectorsSwiper/SectorsSwiper'))


const MainDemo = () => {


    return (
        <React.Fragment>

            <Helmet>
                <title>Droow - Portfolio & Agency React Template </title>
            </Helmet>


            {/*Start Slider Portfolio*/}
            <SliderPortfolio tag="header" className="mb-section" />
            {/*End Slider Portfolio*/}

            {/*Start Hero Section*/}
            <Container className="section-margin dsn-right-container">
                <HeroSection />
            </Container>
            {/*End Hero Section*/}


            {/*Start Service Section*/}
            <Container className="section-margin">
                <TitleSection description="OUR FEATURES">
                    Why Trigo Partner
                </TitleSection>
                <ServiceOne className="text-center" col={3} colMobile={1} colGap={0} colGapTablet={30} />
            </Container>
            {/*End Service Section*/}

            {/*Start Box Right Info*/}
            <HeroSectionTow className="section-margin text-center" />
            {/*End Box Right Info*/}


            {/*Start SECTORS AND ACTIVITIES*/}
            <Container as={TitleSection} description="Our Work">
                SECTORS AND ACTIVITIES
            </Container>
            <SectorsSwiper grabCursor />
            {/*End SECTORS AND ACTIVITIES*/}


            {/*Start Box Info With Image*/}
            <BoxImageVertical src="/assets/img/project/project1/group-diverse-people-having-business-meeting 1.png" className="section-margin">
                <TitleCover>Trigo</TitleCover>
                <FadeUpTrigger>
                    {(ref) =>
                        <DsnGrid col={1} rowGap={30} rowGapTablet={20}>

                            <h2 className='title-section border-line-left' ref={ref}>
                             Our Approach
                            </h2>
                            <h6 ref={ref}>
                            We seek to build lasting partnerships underpinned by trust and credibility.
                            </h6>
                            <p ref={ref}>
                            We are looking forward to invest on Early-stage compaines and SEMs, 
through both entering as lead investor and co-investor.realy on the 
business network of our diverse multi-disciplinary and multi-nationality
team,we ‘ll be generating a steady flow of deals to the fund.
                            </p>
                            <div className="button-box" ref={ref}>
                                <ButtonDefault text="Learn More" icon={faAngleRight} href="#0" />
                            </div>

                        </DsnGrid>
                    }
                </FadeUpTrigger>
            </BoxImageVertical>
            {/*End  Box Info With Image*/}

            {/*Start Testimonial*/}
            {/* <Container className="section-margin">
                <Testimonial autoHeight loop grabCursor title="Feedback from our clients." />
            </Container> */}
            {/*End Testimonial*/}

            {/*Start Blog*/}
            <Container className="section-margin dsn-right-container">
                <TitleSection description="Latest News">
                    Latest & Greatest Post
                </TitleSection>
                <BlogSwiper grabCursor loop autoHeight />
            </Container>
            {/*End Blog*/}

            {/*Start Brand*/}
            <Container className="section-margin">
                <TitleSection description="Our clients">
                    Your successful, our <br /> reputation
                </TitleSection>
                <BrandClient
                    col={3}
                    colTablet={2}
                    colGap={2}
                    rowGap={2}
                />
            </Container>
            {/*End Brand*/}

            <NextPageContent className="section-margin" />
            <Footer />

        </React.Fragment>

    );
}


export default MainDemo;