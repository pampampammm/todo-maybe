import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTheme } from 'app/Providers/ThemeProvider';

const TheHeader = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">

            {/* <Button onClick={() => toggleTheme()}>Toggle</Button> */}
        </header>
    );
};

export default TheHeader;
