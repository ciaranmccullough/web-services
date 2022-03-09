import React from "react";
import { AppBar, Theme, Toolbar, Slide, useScrollTrigger, useTheme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import Navbar from "../navbar/Navbar";
import { styles } from "../../theme";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            height: 55,
            display: "flex",
            maxWidth: styles.maxWidthXl,
            margin: "0 auto",
            width: "100%",
        },
    })
);

interface IProps {
    children: React.ReactElement;
}

function HideOnScroll({ children }: IProps) {
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Header() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <HideOnScroll>
            <AppBar sx={{ backgroundColor: theme.palette.grey[900] }}>
                <Toolbar className={classes.toolbar}>
                    <Navbar />
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    );
}
