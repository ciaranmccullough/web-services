import useIsMobile from "../../hooks/useIsMobile";
import DesktopNavbar from "./desktop/DesktopNavbar";
import MobileNavbar from "./mobile/MobileNavbar";

export default function Navbar() {
    const isMobile = useIsMobile();

    return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
}
