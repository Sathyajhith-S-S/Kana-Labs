import { createContext } from 'react';

export type Theme = "light" | "dark";

export interface ThemeProviderContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeProviderContextType | undefined>(undefined);