import { makeStyles, createStyles } from "@mui/styles";
import { Theme, Typography } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";
import ContainedButton from "../buttons/ContainedButton";
import FullPageSection from "../fullPage/FullPageSection";
import Spacer from "../spacer/Spacer";
import { motion } from "framer-motion";
import { pageRoutes } from "../../config";
import SunTornadoDark from "../../assets/backgrounds/SunTornado.svg";
import SunTornadoLight from "../../assets/backgrounds/SunTornadoLight.svg";
import { data } from "../../data/hero";
import { styles } from "../../theme";
import { useLightTheme } from "../../contexts/theme/ThemeContext";

const useStyles = (isMobile: boolean, lightMode: boolean) =>
    makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: "grid",
                placeItems: "center",
                backgroundColor: theme.palette.background.default,
                width: "100%",
                backgroundImage: `url(${lightMode ? SunTornadoLight : SunTornadoDark})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                paddingTop: 57,
            },
            text: {
                textAlign: isMobile ? "center" : "left",
            },
            container: {
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
            },
            heroContainer: {
                maxWidth: `${styles.maxWidthXl}px` + styles.cssImportant,
            },
            content: {
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                width: "100%",
            },
            textBox: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: isMobile ? "center" : "flex-start",
            },
        })
    );

export default function Hero() {
    const { lightMode } = useLightTheme();
    const isMobile = useIsMobile();
    const classes = useStyles(isMobile, lightMode)();

    const sentence = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.15,
            },
        },
    };

    const letter = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
        },
    };

    const accents = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 2.3,
            },
        },
    };

    const heroText = `Hello I'm ${data.name}, and I am a ${data.job} based in ${data.location}.`;

    return (
        <>
            <FullPageSection classes={{ root: classes.root, container: classes.heroContainer }}>
                <div className={classes.container}>
                    <motion.div className={classes.content} variants={sentence} initial="hidden" animate="visible">
                        <div className={classes.textBox}>
                            {heroText.split(" ").map((char, index) => {
                                return (
                                    <Typography
                                        key={`${index}_${char}`}
                                        className={classes.text}
                                        variant={isMobile ? "h4" : "h2"}
                                        component={motion.span}
                                        variants={letter}
                                    >
                                        {char + (index !== heroText.length - 1 ? "\u00A0" : "")}
                                    </Typography>
                                );
                            })}
                        </div>
                        <Spacer size={2} />
                    </motion.div>
                    <Spacer size={2} />
                    <motion.div initial="hidden" animate="visible" variants={accents}>
                        <ContainedButton text={data.buttonText} to={pageRoutes.home.projects} />
                    </motion.div>
                </div>
            </FullPageSection>
        </>
    );
}
