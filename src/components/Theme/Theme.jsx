import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const Theme = () => {
    const { theme, setTheme } = useTheme()
    useEffect(() => {
        setTheme('dark')
        console.log(theme)
    }, [])
    return (
        <div className={`themeElement ${theme === 'dark' ? 'darkThemeIcon' : 'lightThemeIcon'}`} onClick={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
        </div>
    )
}

export default Theme