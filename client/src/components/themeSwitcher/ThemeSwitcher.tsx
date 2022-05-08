import React from "react";
import { useLightTheme } from "../../contexts/theme/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";

export default function ThemeSwitcher() {
    const { lightMode, setLightMode } = useLightTheme();
    const isMobile = useIsMobile();
    const icon: React.ReactNode = !lightMode ? <Brightness7Icon /> : <Brightness4Icon />;

    const handleSetLightMode = () => {
        setLightMode(!lightMode);
    };

    return (
        <>
            <IconButton
                aria-label="icon-button"
                style={{ padding: isMobile ? "8px 0" : 8 }}
                onClick={handleSetLightMode}
                disableFocusRipple
            >
                {icon}
            </IconButton>
        </>
    );
}
