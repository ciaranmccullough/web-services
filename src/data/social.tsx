import CodepenIcon from "../assets/icons/CodepenIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import LinkedinIcon from "../assets/icons/LinkedInIcon";
import GithubIcon from "../assets/icons/GithubIcon";
import { ICard } from "../interfaces/ISocial";

export const socials: ICard[] = [
    {
        icon: <CodepenIcon />,
        link: "https://codepen.io/your-work?item_type=collection",
    },
    {
        icon: <TwitterIcon />,
        link: "https://twitter.com/Ciamcc",
    },
    {
        icon: <LinkedinIcon />,
        link: "https://www.linkedin.com/in/ciaran-mccullough-5347a11b1/",
    },
    {
        icon: <GithubIcon />,
        link: "https://github.com/ciaranmccullough",
    },
];
