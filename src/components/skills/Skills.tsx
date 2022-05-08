import { useEffect } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";
import { pageRoutes } from "../../config";
import FullPageSection from "../fullPage/FullPageSection";
import ContainedButton from "../buttons/ContainedButton";
import Spacer from "../spacer/Spacer";
import Paper from "@mui/material/Paper";
import { Variants, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IconCard from "../iconCard/IconCard";
import { ICard } from "../../interfaces/ISkills";
import { everyDaySkills, experienceSkills, learningSkills, skillsData } from "../../data/skills";
import { styles } from "../../theme";
import { useLightTheme } from "../../contexts/theme/ThemeContext";

const useStyles = (isMobile: boolean, md: boolean, lg: boolean) =>
    makeStyles((theme: Theme) =>
        createStyles({
            root: {
                backgroundColor: theme.palette.background.default,
                display: "grid",
                placeItems: "start center",
                minHeight: "unset" + styles.cssImportant,
            },
            container: {
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
            },
            subHeading: {
                textAlign: isMobile ? "center" : "left",
            },
            card: {
                padding: theme.spacing(isMobile ? 2 : 4),
                width: "100%",
            },
            row: {
                display: "grid",
                gridTemplateColumns: isMobile
                    ? "repeat(2, 1fr)"
                    : md
                    ? "repeat(3, 1fr)"
                    : lg
                    ? "repeat(4, 1fr)"
                    : "repeat(5, 1fr)",
                gap: isMobile ? theme.spacing(2) : theme.spacing(4),
            },
            text: {
                textAlign: isMobile ? "center" : "left",
            },
        })
    );

export default function Skills() {
    const isMobile = useIsMobile();
    const theme = useTheme();
    const { lightMode } = useLightTheme();
    const md = useMediaQuery(theme.breakpoints.down("md"));
    const lg = useMediaQuery(theme.breakpoints.down("lg"));
    const classes = useStyles(isMobile, md, lg)();
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const section: Variants = {
        hidden: { opacity: 0, x: "-100%" },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                duration: 0.7,
            },
        },
    };

    const container: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const text: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.4,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
        },
    };

    function mapSkillsCardsWithAnimation(arr: ICard[], variant: Variants) {
        return arr.map((item: ICard, index: number) => {
            return (
                <motion.div key={`${index}_${item}`} variants={variant}>
                    <IconCard icon={item.icon} title={item.title} />
                </motion.div>
            );
        });
    }

    return (
        <>
            <FullPageSection classes={{ root: classes.root }} id={pageRoutes.home.skills.slice(1)}>
                <div className={classes.container}>
                    <Typography className={classes.text} variant={isMobile ? "h4" : "h2"} fontWeight="bold">
                        {skillsData.header}
                    </Typography>
                    <Spacer size={2} />
                    <Paper
                        ref={ref}
                        className={classes.card}
                        sx={{
                            backgroundColor: lightMode ? theme.palette.grey[300] : theme.palette.grey[900],
                        }}
                        elevation={3}
                        component={motion.div}
                        initial="hidden"
                        animate={controls}
                        variants={section}
                    >
                        <div>
                            <Typography
                                variant="h5"
                                className={classes.subHeading}
                                component={motion.h5}
                                initial="hidden"
                                animate={controls}
                                variants={text}
                            >
                                {skillsData.useTagline}
                            </Typography>
                            <Spacer size={2} />
                        </div>
                        <motion.div className={classes.row} variants={container} initial="hidden" animate={controls}>
                            {mapSkillsCardsWithAnimation(everyDaySkills, item)}
                        </motion.div>
                    </Paper>
                    <Spacer size={4} />
                    <Paper
                        className={classes.card}
                        sx={{
                            backgroundColor: lightMode ? theme.palette.grey[300] : theme.palette.grey[900],
                        }}
                        elevation={3}
                        component={motion.div}
                        initial="hidden"
                        animate={controls}
                        variants={section}
                    >
                        <div>
                            <Typography
                                variant="h5"
                                className={classes.subHeading}
                                component={motion.h5}
                                initial="hidden"
                                animate={controls}
                                variants={text}
                            >
                                {skillsData.experienceTagline}
                            </Typography>
                            <Spacer size={2} />
                        </div>
                        <motion.div className={classes.row} variants={container} initial="hidden" animate={controls}>
                            {mapSkillsCardsWithAnimation(experienceSkills, item)}
                        </motion.div>
                    </Paper>
                    <Spacer size={4} />
                    <Paper
                        className={classes.card}
                        sx={{
                            backgroundColor: lightMode ? theme.palette.grey[300] : theme.palette.grey[900],
                        }}
                        elevation={3}
                        component={motion.div}
                        initial="hidden"
                        animate="visible"
                        variants={section}
                    >
                        <div>
                            <Typography
                                variant="h5"
                                className={classes.subHeading}
                                component={motion.h5}
                                initial="hidden"
                                animate="visible"
                                variants={text}
                            >
                                {skillsData.learningTaglne}
                            </Typography>
                            <Spacer size={2} />
                        </div>
                        <motion.div className={classes.row} variants={container} initial="hidden" animate="visible">
                            {mapSkillsCardsWithAnimation(learningSkills, item)}
                        </motion.div>
                    </Paper>
                    <Spacer size={2} />
                    {!isMobile && <ContainedButton text={skillsData.buttonText} to={pageRoutes.home.contact} />}
                </div>
            </FullPageSection>
        </>
    );
}
