import { useEffect } from "react";
import { CircularProgress, Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: `100vh`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    })
);

export default function GlobalCircularProgress() {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={classes.root}>
            <CircularProgress color="info" />
        </div>
    );
}
