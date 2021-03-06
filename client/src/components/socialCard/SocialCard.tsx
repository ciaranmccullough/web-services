import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import useIsMobile from "../../hooks/useIsMobile";
import { socials } from "../../data/social";
import { ICard } from "../../interfaces/ISocial";

const useStyles = (isMobile: boolean) =>
    makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
                gap: theme.spacing(2),
                alignItems: "center",
            },
            link: {
                display: "flex",
            },
        })
    );

export default function SocialCard() {
    const isMobile = useIsMobile();
    const classes = useStyles(isMobile)();

    return (
        <span className={classes.root}>
            {socials.map((item: ICard, index: number) => {
                return (
                    <a
                        key={Math.random()}
                        className={classes.link}
                        href={item.link}
                        aria-label={item.areaLabel}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {item.icon}
                    </a>
                );
            })}
        </span>
    );
}
