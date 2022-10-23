import React from 'react'
import './style.scss'


import DsnGrid from "../DsnGrid";
import type {DsnGridProps} from "../DsnGrid";
import {dsnCN} from "../../hooks/helper";
import LazyImg from "../LazyImg";

const ServicesDetails = [
    {
        icon: 'assets/img/services/Group 6.png',
        title: "International network",
        description: "The availability of an international business network in MENA, GCC & CIS",
    },
    {
        icon: 'assets/img/services/cryptocurrency_global.png',
        title: "High track record",
        description: "High track record in scaling the business in the Argiculture industry",
    },
    {
        icon: 'assets/img/services/staff.png',
        title: "Experiense of PE activities",
        description: "Good level of experience in the know-how of PE activities",
    },
]

const ServiceOne = ({className, ...restProps}: DsnGridProps) => {
    return (
        <DsnGrid className={dsnCN('dsn-services service-one', className)} {...restProps}>
            {ServicesDetails.map(
                (item, index) =>
                    <div className='service-item' key={index}>
                            <span className='icon mb-20'>
                                <LazyImg src={item.icon} alt={item.title}/>
                            </span>
                        <h4 className='title-block mb-20'>{item.title}</h4>
                        <p className='mt-15 dsn-auto'>{item.description}</p>
                    </div>
            )}

        </DsnGrid>
    );
};


export default ServiceOne