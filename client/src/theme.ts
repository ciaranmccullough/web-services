import { createTheme, Theme } from "@mui/material";

export const fonts = {
    primary: "DM Mono, monospace",
};

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        common: {
            black: "#000",
            white: "#fff",
        },
        primary: {
            main: "#3700b3",
            light: "#733ae6",
            dark: "#000082",
            contrastText: "rgba(255, 255, 255, 0.87)",
        },
        secondary: {
            main: "#03dac6",
            light: "#66fff9",
            dark: "#00a896",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        error: {
            main: "#cf6679",
            light: "#ff96a8",
            dark: "#9b374d",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        warning: {
            main: "#ffa726",
            light: "#ffd95b",
            dark: "#c77800",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        info: {
            main: "#29b6f6",
            light: "#73e8ff",
            dark: "#0086c3",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        success: {
            main: "#20f47c",
            light: "#71ffad",
            dark: "#00c04d",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        background: {
            paper: "#121212",
            default: "#121212",
        },
    },
    typography: {
        fontFamily: fonts.primary,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export const lightTheme: Theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",
            light: "#42a5f5",
            dark: "#1565c0",
            contrastText: "#000",
        },
        secondary: {
            main: "#9c27b0",
            light: "#ba68c8",
            dark: "#7b1fa2",
            contrastText: "#fff",
        },
        error: {
            main: "#cf6679",
            light: "#ff96a8",
            dark: "#9b374d",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        warning: {
            main: "#ffa726",
            light: "#ffd95b",
            dark: "#c77800",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        info: {
            main: "#29b6f6",
            light: "#73e8ff",
            dark: "#0086c3",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        success: {
            main: "#20f47c",
            light: "#71ffad",
            dark: "#00c04d",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        background: {
            paper: "#c7c7c7",
            default: "#f2f2f2",
        },
        text: {
            primary: "#000",
            secondary: "#000",
        },
    },
    typography: {
        fontFamily: fonts.primary,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

export const styles = {
    defaultBoxShadow: `0 4px 30px rgba(255, 255, 255, 0.1)`,
    defaultOpacity: 0.8,
    defaultTransition: ".2s ease-in-out",
    defaultBorderRadius: 4,
    maxWidth: darkTheme.breakpoints.values.lg,
    maxWidthXl: darkTheme.breakpoints.values.xl,
    cssImportant: "!important",
};
