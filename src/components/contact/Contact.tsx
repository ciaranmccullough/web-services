import { makeStyles, createStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";
import { pageRoutes } from "../../config";
import FullPageSection from "../fullPage/FullPageSection";
import Spacer from "../spacer/Spacer";
import Form from "../form/Form";
import DiamondBackground from "../../assets/backgrounds/DiamondBackground.svg";
import DiamondBackgroundLight from "../../assets/backgrounds/DiamondBackgroundLight.svg";
import { data } from "../../data/contact";
import { styles } from "../../theme";
import { useLightTheme } from "../../contexts/theme/ThemeContext";

const useStyles = (isMobile: boolean, lightMode: boolean) =>
    makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: "grid",
                placeItems: "start center",
                backgroundColor: theme.palette.background.default,
                backgroundImage: `url(${lightMode ? DiamondBackgroundLight : DiamondBackground})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                minHeight: "unset" + styles.cssImportant,
            },
            container: {
                display: "flex",
                flexDirection: "column",
            },
            text: {
                alignSelf: isMobile ? "center" : "flex-start",
            },
            card: {
                padding: theme.spacing(isMobile ? 2 : 4),
                width: "100%",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
            },
            subHeading: {
                textAlign: isMobile ? "center" : "left",
            },
            row: {
                display: "grid",
                gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(5, 1fr)",
                gap: isMobile ? theme.spacing(2) : theme.spacing(4),
            },
        })
    );

export default function Contact() {
    const isMobile = useIsMobile();
    const { lightMode } = useLightTheme();
    const classes = useStyles(isMobile, lightMode)();

    return (
        <FullPageSection classes={{ root: classes.root }} id={pageRoutes.home.contact.slice(1)}>
            <div className={classes.container}>
                <Typography className={classes.text} variant={isMobile ? "h4" : "h2"} fontWeight="bold">
                    {data.header}
                </Typography>
                <Spacer size={1} />
                <Typography
                    align={isMobile ? "center" : "left"}
                    className={classes.text}
                    variant={isMobile ? "body2" : "body1"}
                    fontWeight="bold"
                >
                    {data.subheader}
                </Typography>
                <Spacer size={2} />
                <Form />
            </div>
        </FullPageSection>
    );
}
