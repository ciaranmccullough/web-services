import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";
import { useLightTheme } from "../../contexts/theme/ThemeContext";

interface IProps {
    title: string;
    link: string;
    imgUrl: string;
    description: string;
}

export default function MediaCard({ title, link, imgUrl, description }: IProps) {
    const theme = useTheme();
    const { lightMode } = useLightTheme();

    return (
        <Paper
            elevation={3}
            sx={{
                padding: "20px",
                backgroundColor: lightMode ? theme.palette.grey[200] : theme.palette.grey[800],
            }}
        >
            <Card
                sx={{
                    backgroundColor: lightMode ? theme.palette.grey[100] : theme.palette.grey[700],
                }}
            >
                <CardMedia component="img" height="140" src={imgUrl} alt="green iguana" />
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
                        Check it out
                    </Link>
                </CardActions>
            </Card>
        </Paper>
    );
}
