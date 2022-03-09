import Helmet from "react-helmet";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme, useTheme } from "@mui/material";
import Layout from "../components/layout/Layout";
import Hero from "../components/hero/Hero";
import { helmetMetaDataConfig, pageRoutes } from "../config";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";
import FloatingActionButton from "../components/buttons/FloatingActionButton";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: theme.palette.background.default,
        },
    })
);

const button = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delay: 2.5,
        },
    },
};

export default function Home() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Layout>
            <Helmet>
                <title>{helmetMetaDataConfig.pageTitleRoot}</title>
                <meta name="description" content="Ciaran McCullough Web Services" />
                <meta name="theme-color" content={theme.palette.primary.dark} />
            </Helmet>
            <div className={classes.root}>
                <Hero />
                <Projects />
                <Skills />
                <Contact />
            </div>
            <motion.div variants={button} initial="hidden" animate="visible">
                <FloatingActionButton
                    to={pageRoutes.home.home}
                    color={theme.palette.secondary.main}
                    hoverColor={theme.palette.secondary.dark}
                />
            </motion.div>
        </Layout>
    );
}
