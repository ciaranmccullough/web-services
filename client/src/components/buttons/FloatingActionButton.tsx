import { NavHashLink } from "react-router-hash-link";
import Fab from "@mui/material/Fab";
import { useTheme } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

interface IProps {
    to: string;
    color: string;
    hoverColor: string;
}

export default function FloatingActionButton({ to, color, hoverColor }: IProps) {
    const theme = useTheme();

    return (
        <Fab
            sx={{
                backgroundColor: color,
                "&:hover": { backgroundColor: hoverColor },
                position: "fixed",
                bottom: theme.spacing(4),
                right: theme.spacing(4),
            }}
            size="large"
            component={NavHashLink}
            smooth
            to={to}
            aria-label="button-up"
        >
            <NavigationIcon />
        </Fab>
    );
}
