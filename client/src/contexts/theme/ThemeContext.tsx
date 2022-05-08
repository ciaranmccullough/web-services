import React, { createContext, useContext, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { darkTheme, lightTheme } from "../../theme";

export interface IThemeContextProps {
    lightMode: boolean;
    setLightMode(lightMode: boolean): void;
}

const CustomThemeContext = createContext<IThemeContextProps>({
    lightMode: false,
    setLightMode: () => {},
});

interface IProps {
    children?: React.ReactNode;
}

function CustomThemeProvider({ children }: IProps) {
    const [lightMode, setLightMode] = useLocalStorage("lightMode", false);

    const theme = useMemo(() => (lightMode ? lightTheme : darkTheme), [lightMode]);

    return (
        <ThemeProvider theme={theme}>
            <CustomThemeContext.Provider
                value={{
                    lightMode,
                    setLightMode,
                }}
            >
                {children}
            </CustomThemeContext.Provider>
        </ThemeProvider>
    );
}

export const useLightTheme = () => useContext(CustomThemeContext);

export { CustomThemeContext, CustomThemeProvider };
