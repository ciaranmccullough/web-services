import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

const useIsMobile = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down("sm"));
};

export default useIsMobile;
