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
        title: "Trigo Global Partner",
        slug: 'time-tag-watch',
        // category: ['Brand'],
        description: 'Sometimes, we need to check the time, wondering when our work or meeting will finish, without getting caught by others.',
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
        return item.slug && '/portfolio/' + item.slug;

    return '';
};