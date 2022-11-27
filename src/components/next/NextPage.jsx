import React from 'react'
import { Container } from 'react-bootstrap';

import './style.scss'
import NavLink from "../button/NavLink";
import { BsPrefixRefForwardingComponent } from "react-bootstrap/helpers";
import { NavLinkProps } from "react-bootstrap/NavLink";
import { dsnCN } from "../../hooks/helper";
// Theme
import { useTheme } from "next-themes";

interface NextPageProps extends BsPrefixRefForwardingComponent<'a', NavLinkProps> {
    text?: string
}

function NextPage({ className, children, text, ...restProps }: NextPageProps) {
    const { theme, setTheme } = useTheme()
    return (
        <div className={dsnCN('next-page section-padding', className)} >
            <Container>
                <div className="c-wrap">
                    <NavLink {...restProps}>
                        <span className={`hiring ${theme === 'light' ? 'text-stroke-green' : ''}`}>{children}</span>
                        <span className={`career ${theme === 'light' ? 'text-green-light' : ''}`}>{text}</span>
                    </NavLink>
                </div>
            </Container>
        </div>
    )
}

export default NextPage