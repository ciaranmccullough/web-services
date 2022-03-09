import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import Spacer from "../spacer/Spacer";
import useIsMobile from "../../hooks/useIsMobile";
import { socials } from "../../data/social";
import { ICard } from "../../interfaces/ISocial";

const useStyles = (isMobile: boolean) =>
    makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: "flex",
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
                    <>
                        <a
                            key={`${index}_${item.link}`}
                            className={classes.link}
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {item.icon}
                        </a>
                        <Spacer size={2} />
                    </>
                );
            })}
        </span>
    );
}
