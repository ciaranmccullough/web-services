import React from "react";
import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: "100%",
            backgroundColor: theme.palette.background.default,
        },
        main: {},
    })
);

interface IProps {
    children: React.ReactNode;
}

export default function Layout({ children }: IProps) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Header />
            <main className={classes.main}>{children}</main>
            <Footer />
        </div>
    );
}
