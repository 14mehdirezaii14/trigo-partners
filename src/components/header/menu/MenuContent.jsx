import React from 'react';
import { dsnCN } from "../../../hooks/helper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'next-themes';
import { useEffect } from 'react';
function MenuContent({ className }) {
    const socialData = [
        { link: "#0", name: "Dribbble." },
        { link: "#0", name: "Behance." },
        { link: "#0", name: "Linkedin." },
        { link: "#0", name: "Twitter." }
    ];
    return (
        <div className={dsnCN('container-content  d-flex flex-column justify-content-center', className)}>
            {/* <div className="nav__info">
                <div className="nav-content">
                    <h5 className="sm-title-block mb-10">Studio</h5>
                    <p>
                        26-30 New Damietta <br /> El-Mahalla El-Kubra, SK1 66LM
                    </p>

                </div>
                <div className="nav-content mt-30">
                    <h5 className="sm-title-block mb-10">Contact</h5>
                    <p className="links over-hidden mb-1">
                        <a className="link-hover" href="tel:+00 (2)012 3321" data-hover-text="+00 (2)012 3321">
                            +00 (2)012 3321
                        </a>
                    </p>
                    <p className="links over-hidden">
                        <a className="link-hover" href="mailto:info@dsngrid.com"
                            data-hover-text="info@dsngrid.com">info@dsngrid.com</a>
                    </p>
                </div>
            </div>
            <div className="nav-social nav-content mt-30">
                <div className="nav-social-inner p-relative">
                    <h5 className="sm-title-block mb-10">Follow us</h5>
                    <ul>
                        {socialData.map((item, index) =>
                            <li key={index}>
                                <a href={item.link} target="_blank" rel="nofollow noopener noreferrer">{item.name}</a>
                            </li>)}
                    </ul>
                </div>
            </div> */}
            {/* <p>
                We identify the companies ahead of the consensus curve.
                We will not find the winners. We will select them!
            </p> */}
            <div className="nav-content">
                <h5 className="sm-title-block mb-10">Trigo</h5>
                <p>
                We identify the companies ahead of the consensus curve.
                <br />
                We will not find the winners. We will select them!
                </p>

            </div>
        </div>
    );
}

export default MenuContent;