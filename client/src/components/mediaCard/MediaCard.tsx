import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";
import { useLightTheme } from "../../contexts/theme/ThemeContext";
import useIsMobile from "../../hooks/useIsMobile";

interface IProps {
    title: string;
    link: string;
    imgUrl: string;
    imgAlt: string;
    description: string;
    buttonText: string;
}

export default function MediaCard({ title, link, imgUrl, imgAlt, description, buttonText }: IProps) {
    const theme = useTheme();
    const { lightMode } = useLightTheme();
    const isMobile = useIsMobile();

    return (
        <Paper
            elevation={3}
            sx={{
                height: isMobile ? "unset" : "100%",
                padding: "20px",
                backgroundColor: lightMode ? theme.palette.grey[200] : theme.palette.grey[800],
            }}
        >
            <Card
                sx={{
                    height: isMobile ? "unset" : "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: isMobile ? "unset" : "space-between",
                    backgroundColor: lightMode ? theme.palette.grey[100] : theme.palette.grey[700],
                }}
            >
                <CardMedia component="img" height={isMobile ? 200 : 250} src={imgUrl} alt={imgAlt} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ padding: "8px 16px" }}>
                    <Link underline="none" target="_blank" rel="noopener" href={link}>
                        {buttonText}
                    </Link>
                </CardActions>
            </Card>
        </Paper>
    );
}
