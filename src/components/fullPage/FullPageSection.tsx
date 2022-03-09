import * as React from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import useIsMobile from "../../hooks/useIsMobile";
import clsx from "clsx";
import { styles } from "../../theme";

const useStyles = (isMobile: boolean) =>
    makeStyles((theme: Theme) =>
        createStyles({
            root: {
                minHeight: "100vh",
            },
            container: {
                maxWidth: styles.maxWidth,
                width: "100%",
                padding: isMobile ? theme.spacing(2) : theme.spacing(8),
            },
        })
    );

type IClasses = Partial<ReturnType<ReturnType<typeof useStyles>>>;

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    children: React.ReactElement;
    classes?: IClasses;
}

export default function FullPageSection({ id, children, className, classes: overrideClasses, ...rest }: IProps) {
    const isMobile = useIsMobile();
    const classes = useStyles(isMobile)();

    return (
        <section className={clsx(className, classes.root, overrideClasses?.root)} {...rest} id={id}>
            <div className={classes.container}>{children}</div>
        </section>
    );
}
