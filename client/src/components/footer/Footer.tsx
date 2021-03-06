import { Theme, Typography } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { styles } from "../../theme";
import SocialCard from "../socialCard/SocialCard";
import Spacer from "../spacer/Spacer";
import useIsMobile from "../../hooks/useIsMobile";
import { data } from "../../data/footer";
import { useLightTheme } from "../../contexts/theme/ThemeContext";

const useStyles = (isMobile: boolean, lightMode: boolean) =>
    makeStyles((theme: Theme) =>
        createStyles({
            root: {
                minHeight: 55,
                backgroundColor: lightMode ? theme.palette.grey[300] : theme.palette.grey[900],
                display: "flex",
                alignItems: "center",
            },
            container: {
                maxWidth: styles.maxWidthXl,
                padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
                margin: "0 auto",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "flex-start",
                "& svg:hover": {
                    scale: 1.1,
                    opacity: 0.8,
                },
            },
        })
    );

export default function Footer() {
    const isMobile = useIsMobile();
    const { lightMode } = useLightTheme();
    const classes = useStyles(isMobile, lightMode)();

    function getCurrentYear() {
        const date = new Date();
        let year = date.getFullYear();
        return year;
    }

    return (
        <footer className={classes.root}>
            <div className={classes.container}>
                <SocialCard />
                <Spacer size={1} />
                <Typography>{`${data.companyName} ${getCurrentYear()}`}</Typography>
            </div>
        </footer>
    );
}
