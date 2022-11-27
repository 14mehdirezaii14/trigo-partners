import TimeTagWatch from "../../views/portfolio/TimeTagWatch";
import UnderArmour from "../../views/portfolio/UnderArmour";
import ReStyling from "../../views/portfolio/ReStyling";
import ToastReel from "../../views/portfolio/ToastReel";
import WhatIfGold from "../../views/portfolio/WhatIfGold";
import NileKabutha from "../../views/portfolio/NileKabutha";
import SleepWalker from "../../views/portfolio/SleepWalker";
import NovaraConic from "../../views/portfolio/NovaraConic";
import BastianBux from "../../views/portfolio/BastianBux";

const data = [
    {
        id: 1,
        title: "Trigo Partner",
        slug: 'about',
        // category: ['Brand'],
        description: 'A proven Thematic Investment approach to origination of investment opportunities, driven by proprietary research to identify the future champions. Trigo targets high growth sectors and key themes that will be shaping our future.',
        src: '/assets/img/project/project1/TrigoGlobal.png',
        // srcSlider: '/assets/img/project/project1/13.jpg',
        overlay: 2,
        component: (props) => <TimeTagWatch {...props} />
    },
    
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "id") => {
    return data.find(item => {
        if (item[whereName] === value) return item;
        return null;
    });
};
export const getPortfolioLink = (item) => {
    if (item)
        return  item.slug;

    return '';
};