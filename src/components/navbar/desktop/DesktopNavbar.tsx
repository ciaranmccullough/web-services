import Link from "@mui/material/Link";
import { Theme, Typography, useTheme } from "@mui/material";
import { NavHashLink } from "react-router-hash-link";
import { pageRoutes } from "../../../config";
import Spacer from "../../spacer/Spacer";
import { createStyles, makeStyles } from "@mui/styles";
import { motion } from "framer-motion";
import SocialCard from "../../socialCard/SocialCard";
import { styles } from "../../../theme";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            "& svg": {
                transition: styles.defaultTransition,
            },
            "& svg:hover": {
                scale: 1.1,
                opacity: styles.defaultOpacity,
            },
        },
        nav: {
            display: "flex",
            alignItems: "center",
            "& a": {
                transition: styles.defaultTransition,
            },
            "& a:hover": {
                opacity: styles.defaultOpacity,
            },
        },
        link: {
            textTransform: "capitalize",
        },
    })
);

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delay: 0.2,
        },
    },
};

export default function DesktopNavbar() {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <motion.nav className={classes.root} variants={container} initial="hidden" animate="show">
            <div className={classes.nav}>
                {Object.entries(pageRoutes.home).map((item, index) => (
                    <>
                        <Link
                            key={`${index}_${item[0]}`}
                            underline="none"
                            color={theme.palette.primary.contrastText}
                            component={NavHashLink}
                            smooth
                            to={item[1]}
                        >
                            <Typography className={classes.link} variant="body1">
                                {item[0]}
                            </Typography>
                        </Link>
                        <Spacer size={2} />
                    </>
                ))}
            </div>
            <SocialCard />
        </motion.nav>
    );
}
