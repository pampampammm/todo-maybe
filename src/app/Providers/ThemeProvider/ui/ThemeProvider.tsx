import React, { FC, useMemo, useState } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../context/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme.LIGHT;

interface ProviderProps {
    children: React.ReactNode,
}

const ThemeProvider: FC<ProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
