import React from 'react';
import { dsnCN } from "../../hooks/helper";

// Theme
import { useTheme } from "next-themes";

function TitleSection({ className, tag: Tag = 'h2', children, description }) {
    const { theme, setTheme } = useTheme()
    return (
        <div className={dsnCN('section-heading', className)}>
            {description && <p className={`title-sub ${theme === 'dark' ? 'text-light' : 'text-green-light'}`}>{description}</p>}
            {children && <Tag className="title-section">{children}</Tag>}
        </div>
    );
}

export default TitleSection;