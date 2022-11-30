import React from 'react'

import './style.scss'
import MetaPost from "../header/MetaPost";
import NavLink from "../button/NavLink";

function BlogItem({src, category, title, description, to}) {

    return (
        <div className="blog-item">
            <div className="box-img">
                <img src={src} alt=""/>
            </div>
            <div className="box-content background-section bg-green-light text-light">
                {category && <MetaPost category={category} separate=", "/>}
                {title && <h4 className='title-block text-light'>
                    <NavLink to={to}><span className='text-light'>{title}</span></NavLink>
                </h4>}
                {description && <p className="mt-15 text-light">{description}</p>}
            </div>
        </div>
    )
}

export default BlogItem