import React, {createContext, useContext, useState, useEffect} from 'react';


interface ThemeContextType  {
    theme: string,
    toggleTheme: () => void;
}

//context object
const ThemeContext = createContext<ThemeContextType>({
    theme : 'light',
    toggleTheme : () => {}
});
    
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const [theme, setTheme] = useState<string>(getSystemTheme);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            setTheme(e.matches ? 'dark' : 'light');
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);