import React from "react";
import Paper from "@mui/material/Paper";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme, Typography, useTheme } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";

const useStyles = (isMobile: boolean) =>
    makeStyles((theme: Theme) =>
        createStyles({
            icon: {
                "& svg": {
                    fontSize: isMobile ? 50 : 72,
                },
            },
        })
    );

interface IProps {
    icon: React.ReactNode;
    title: string;
}

export default function IconCard({ icon, title }: IProps) {
    const theme = useTheme();
    const isMobile = useIsMobile();
    const classes = useStyles(isMobile)();

    return (
        <Paper
            sx={{
                backgroundColor: theme.palette.grey[800],
                padding: theme.spacing(1),
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <span className={classes.icon}>{icon}</span>
            <Typography
                variant="body1"
                sx={{
                    color: theme.palette.secondary.light,
                }}
            >
                {title}
            </Typography>
        </Paper>
    );
}
