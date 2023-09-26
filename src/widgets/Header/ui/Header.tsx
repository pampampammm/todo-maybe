import {Link} from "react-router-dom";
import React from "react";
import {useTheme} from "../../../app/Providers/ThemeProvider";

const TheHeader = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <header className={'header'}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <button onClick={() => toggleTheme()}>Toggle</button>
        </header>
    );
};

export default TheHeader;