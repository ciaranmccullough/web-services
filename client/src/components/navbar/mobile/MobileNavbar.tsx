import React, { useState } from "react";
import { Drawer, Typography, useTheme, Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { NavHashLink } from "react-router-hash-link";
import { pageRoutes } from "../../../config";
import Link from "@mui/material/Link";
import Spacer from "../../spacer/Spacer";
import SocialCard from "../../socialCard/SocialCard";
import ThemeSwitcher from "../../themeSwitcher/ThemeSwitcher";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {},
        listContainer: {
            padding: `${theme.spacing(2)} ${theme.spacing(1)}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
        },
        text: {
            textTransform: "capitalize",
        },
    })
);

type Anchor = "top" | "left" | "bottom" | "right";

export default function MobileNavbar() {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const theme = useTheme();
    const classes = useStyles();

    const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
                display: "flex",
                flexDirection: "column",
                padding: `0 ${theme.spacing(2)}`,
            }}
            role="presentation"
        >
            <div style={{ height: 55, display: "flex" }}>
                <IconButton sx={{ color: theme.palette.primary.contrastText }} onClick={toggleDrawer(anchor, false)}>
                    <MenuOpenIcon fontSize="large">{anchor}</MenuOpenIcon>
                </IconButton>
            </div>
            <div className={classes.listContainer}>
                {Object.entries(pageRoutes.home).map((item, index) => (
                    <>
                        <Link
                            key={`${index}_${item[0]}`}
                            underline="none"
                            color={theme.palette.primary.contrastText}
                            component={NavHashLink}
                            onClick={toggleDrawer(anchor, false)}
                            smooth
                            to={item[1]}
                        >
                            <Typography className={classes.text} variant="h6">
                                {item[0]}
                            </Typography>
                        </Link>
                        <Spacer size={1} />
                    </>
                ))}
                <Spacer size={1} />
                <SocialCard />
                <Spacer size={1} />
                <ThemeSwitcher />
                <Spacer size={2} />
            </div>
        </Box>
    );

    return (
        <div className={classes.root}>
            {(["top"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton sx={{ color: theme.palette.primary.contrastText }} onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon fontSize="large">{anchor}</MenuIcon>
                    </IconButton>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
