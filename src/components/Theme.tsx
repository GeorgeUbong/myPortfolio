import { useTheme } from "../themeContext/theme";
import { Sun, Moon } from 'lucide-react';

export const ThemeButton = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-secondary transition-all duration-300 flex items-center space-x-2 group"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                {theme === 'light' ? (
                    <Sun size={20} className="text-amber-500 transition-transform duration-500 rotate-0 group-hover:rotate-90" />
                ) : (
                    <Moon size={20} className="text-blue-400 transition-transform duration-500 rotate-0 group-hover:-rotate-12" />
                )}
            </div>
            <span className="text-sm font-medium text-text-main hidden sm:block">Theme</span>
        </button>
    );
};

export default ThemeButton;