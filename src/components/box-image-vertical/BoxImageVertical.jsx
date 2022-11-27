import React from 'react'
import './style.scss'


import { Col, Container, Row } from 'react-bootstrap';
import ParallaxImage from "../parallax-image/ParallaxImage";
import type { ParallaxImageProps } from "../parallax-image/ParallaxImage";
import { dsnCN } from "../../hooks/helper";
// Theme
import { useTheme } from "next-themes";

const BoxImageVertical = ({ className, children, ...restProps }: ParallaxImageProps) => {
    const { theme, setTheme } = useTheme()
    return (
        <div className={dsnCN('box-gallery-vertical', className)}>
            <div className={`mask-bg ${theme === 'dark' ? 'background-section' : 'bg-green-light'}`} />
            <Container>
                <Row>
                    <Col xl={5} className="item-box">
                        <div className='inner-img p-relative'>
                            <ParallaxImage height="100%" {...restProps} />
                        </div>
                    </Col>
                    <Col xl={7} className="item-box">
                        <div className="box-text">
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default BoxImageVertical