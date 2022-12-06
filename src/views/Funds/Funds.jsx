import { lazy } from "react";
import { Container } from "react-bootstrap";
import TitleCover from "../../components/heading/title-cover/TitleCover";
import TextTrigger from "../../animation/TextTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import BoxRight from "../../components/box-right/BoxRight";
import ParallaxImage from "../../components/parallax-image/ParallaxImage";
import LazyImg from "../../components/LazyImg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonDefault from "../../components/button/button-default/ButtonDefault";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const HeaderHalf = lazy(() => import("../../components/header/HeaderHalf"))
const heroContent = {
    category: 'Funds', title: 'Funds', src: '/assets/img/project/project1/coin-wooden-table-blurred-nature 1.png'
}
const Funds = () => {
    return (
        <>
            <HeaderHalf heroContent={heroContent}
                parallax={{ yPercent: 30, scale: 1.1 }}
                textButton=""
                href="/"
            >
                {/* <strong className="color-heading">Seohee Lee</strong> <span> - September 26th 2017</span> */}
            </HeaderHalf>
            {/* our team */}
            <Container className="section-margin">
                <TitleCover>Trigo</TitleCover>
                <TextTrigger duration={0.8} stagger={0.1}>
                    {(ref) => <h2 className="title-section" ref={ref}>Title 1</h2>}
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
            </Container>
            {/* End our team */}
            {/* <ParallaxImage heightMobile="60vh"/> */}
            <Container fluid className=" section-margin container" >
                <Row className="text-center">
                    <Col>
                        <LazyImg src="/assets/img/project/project1/Rectangle 34.png" loading="lazy" contentEditable="hello" />
                    </Col>
                    <Col className="text-left">
                        <FadeUpTrigger>
                            <h2 className="pre-line">Fund 1</h2>

                            <p className="mt-30 m-w750 dsn-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <div className="button-box mt-4">
                                <ButtonDefault text="Learn More" icon={faAngleRight} href="#0" />
                            </div>
                        </FadeUpTrigger>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Funds