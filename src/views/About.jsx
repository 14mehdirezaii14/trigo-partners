import React from 'react';
import { lazy } from 'react';
import { Container } from "react-bootstrap";
import FadeUpTrigger from "../animation/FadeUpTrigger";
import HeaderHalf from "../components/header/HeaderHalf";
import NextPageContent from "../components/next/NextPageContent";
import Footer from "../components/footer/Footer";
import TestimonialTow from "../components/testimonial/TestimonialTow";
import { Helmet } from "react-helmet";
import TitleCover from '../components/heading/title-cover/TitleCover';
import TextTrigger from '../animation/TextTrigger';
import { Col, Row } from 'react-bootstrap';
import BgImage from '../components/header/BgImage';
import BoxImageVertical from '../components/box-image-vertical/BoxImageVertical'



const heroContent = {
    category: 'About', title: 'Who We Are', src: '/assets/img/project/project1/AboutHead.png'
}

const Staff = [
    {
        img: '/assets/img/project/project1/Employee1.png',
        name: 'Michael Abed',
        description: 'TPG Capital, TPG Growth, TPG Technology Adjacencies',
    },
    {
        img: '/assets/img/project/project1/Employee1.png',
        name: 'Michael Abed',
        description: 'TPG Capital, TPG Growth, TPG Technology Adjacencies',
    },
    {
        img: '/assets/img/project/project1/Employee1.png',
        name: 'Michael Abed',
        description: 'TPG Capital, TPG Growth, TPG Technology Adjacencies',
    },
    {
        img: '/assets/img/project/project1/Employee1.png',
        name: 'Michael Abed',
        description: 'TPG Capital, TPG Growth, TPG Technology Adjacencies',
    },
    {
        img: '/assets/img/project/project1/Employee1.png',
        name: 'Michael Abed',
        description: 'TPG Capital, TPG Growth, TPG Technology Adjacencies',
    },
    {
        img: '/assets/img/project/project1/Employee1.png',
        name: 'Michael Abed',
        description: 'TPG Capital, TPG Growth, TPG Technology Adjacencies',
    },

]




function About() {


    return (
        <React.Fragment>
            <Helmet>
                <title>Droow - About Us </title>
            </Helmet>
            <HeaderHalf heroContent={heroContent}
                parallax={{ yPercent: 30, scale: 1.1 }}
                textButton=""
                href="/"
            >
                {/* <strong className="color-heading">Seohee Lee</strong> <span> - September 26th 2017</span> */}
            </HeaderHalf>
            {/*End Header Half*/}
            {/* our team */}
            <Container className="section-margin">
                <TitleCover>Trigo</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>Our Team</h2>}
                </TextTrigger>
                <FadeUpTrigger stagger={0.5}>
                    <p className="mt-20">
                        Sometimes, we need to check the time, wondering when our work or meeting will finish,
                        without getting caught by others. To avoid your bossu2019s staring eye, you should not roll
                        your eyes to check the time. The Time Tag Watch is a consummately appropriate for it. Those
                        tags do the role of the hands of the watch. By rotating the face of the watch not the hands,
                        it gets harder to be damaged. It provides you with experience to feel the time at the end of
                        your finger without damaging your watch.n
                    </p>
                </FadeUpTrigger>
                <Row >



                    {Staff.map((item, index) => {
                        return (
                            <Col key={index} onMouseOver={() => { console.log('hover') }} className='position-relative mt-5' style={{ overflow: 'hidden' }} xs={12} md={4}>
                                <div className='aboutPerson' style={{ overflow: 'hidden' }}>
                                    <BgImage className={"dsn-swiper-parallax-transform"} src={'/assets/img/project/project1/Employee1.png'}
                                        alt={'hello'}
                                        overlay={0} height={"100%"} width={'100%'} />
                                    <div className='py-5 px-2 contentAboutPerson'>
                                        <div className='divPerson'>
                                            <h3 className='py-4 text-light namePersonel white'>Michael Abed</h3>
                                            <p className='descriptionPersonel'>TPG Capital, TPG Growth, TPG
                                                Technology Adjacencies</p>
                                            {/* all description */}
                                            <p className=' decriptionAll'>
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae fuga autem tempora similique cum quaerat molestias repudiandae possimus cumque nemo.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}

                </Row>
            </Container>
            {/* End our team */}
            <BoxImageVertical src="/assets/img/project/project1/group-diverse-people-having-business-meeting 1.png" className="section-margin">
                <TitleCover>Trigo</TitleCover>
                <FadeUpTrigger col={1} >
                    <h2 className='title-section border-line-left text-light'>
                        About Us
                    </h2>
                    <h6 className='my-5 text-light'>
                        We seek to build lasting partnerships underpinned by trust and credibility.
                    </h6>
                    <p className='text-light'>
                        We are looking forward to invest on Early-stage compaines and SEMs,
                        through both entering as lead investor and co-investor.realy on the
                        business network of our diverse multi-disciplinary and multi-nationality
                        team,we ‘ll be generating a steady flow of deals to the fund.
                    </p>

                </FadeUpTrigger>
            </BoxImageVertical>
            <NextPageContent className="section-margin" />



        </React.Fragment>
    );
}

export default About;