import { useEffect, useState } from "react";
import { pageRoutes } from "../../config";
import { makeStyles, createStyles } from "@mui/styles";
import { CircularProgress, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";
import FullPageSection from "../fullPage/FullPageSection";
import OutlinedButton from "../buttons/OutlinedButton";
import Spacer from "../spacer/Spacer";
import MediaCard from "../mediaCard/MediaCard";
import Paper from "@mui/material/Paper";
import { Variants, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projectData } from "../../data/project";
import { styles } from "../../theme";
import { useLightTheme } from "../../contexts/theme/ThemeContext";
import { fetchProjects } from "../../apiServices/ApiService";
import { defaultProjectsResponse } from "../../apiServices/response/IProjectResponse";
import { IProject, IProjectData } from "../../interfaces/IProject";

const useStyles = (isMobile: boolean, md: boolean) =>
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
            text: {},
            grid: {
                display: "grid",
                gridTemplateColumns: md ? "1fr" : "repeat(2, 1fr)",
                gap: isMobile ? theme.spacing(2) : theme.spacing(4),
            },
            card: {
                padding: theme.spacing(isMobile ? 2 : 4),
                width: "100%",
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
            },
        })
    );

export default function Projects() {
    const isMobile = useIsMobile();
    const theme = useTheme();
    const [loader, setLoader] = useState<boolean>(false);
    const [projects, setProjects] = useState<IProject>(defaultProjectsResponse);
    const { lightMode } = useLightTheme();
    const md = useMediaQuery(theme.breakpoints.down("md"));
    const classes = useStyles(isMobile, md)();
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

    const getAllProjects = () => {
        setLoader(true);
        fetchProjects()
            .then((response) => {
                setProjects(response);
            })
            .finally(() => setLoader(false));
    };

    useEffect(() => {
        getAllProjects();
    }, []);

    function mapSkillsCardsWithAnimation(arr: IProject, variant: Variants) {
        return arr.data.map((item: IProjectData, index: number) => {
            return (
                <motion.div key={`${index}_${item}`} variants={variant}>
                    <MediaCard
                        title={item.attributes.title}
                        link={item.attributes.link}
                        imgUrl={item.attributes.image.data.attributes.formats.medium.url}
                        imgAlt={item.attributes.image.data.attributes.alternativeText}
                        description={item.attributes.description}
                        buttonText={item.attributes.buttonText}
                    />
                </motion.div>
            );
        });
    }

    return (
        <FullPageSection
            classes={{ root: classes.root }}
            id={pageRoutes.home.projects.slice(1)}
            style={{ height: "100%" }}
        >
            <div className={classes.container}>
                <Typography className={classes.text} variant={isMobile ? "h4" : "h2"} fontWeight="bold">
                    {projectData.header}
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
                            {projectData.subheader}
                        </Typography>
                        <Spacer size={2} />
                    </div>
                    <motion.div className={classes.grid} variants={container} initial="hidden" animate={controls}>
                        {loader ? (
                            <CircularProgress />
                        ) : (
                            <>
                                {projects.data.length === 0 ? (
                                    <>
                                        <Typography>No projects to display</Typography>
                                    </>
                                ) : (
                                    <>{mapSkillsCardsWithAnimation(projects, item)}</>
                                )}
                            </>
                        )}
                    </motion.div>
                </Paper>
                <Spacer size={2} />
                {!isMobile && <OutlinedButton text={projectData.buttonText} to={pageRoutes.home.skills} />}
            </div>
        </FullPageSection>
    );
}
