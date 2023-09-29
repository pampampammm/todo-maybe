import { Link } from 'react-router-dom';
import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTheme } from '../../../app/Providers/ThemeProvider';

const TheHeader = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <Button onClick={() => toggleTheme()}>Toggle</Button>
        </header>
    );
};

export default TheHeader;
