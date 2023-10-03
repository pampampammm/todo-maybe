import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { LoginForm } from 'features/authByUserName';
import { useTheme } from '../../../app/Providers/ThemeProvider';

const TheHeader = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <Button onClick={() => toggleTheme()}>Toggle</Button>

        </header>
    );
};

export default TheHeader;
