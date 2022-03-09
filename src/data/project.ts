import { IProject, IProjectData } from "../interfaces/IProject";
import GuestHouseImg from "../assets/img/ivy-gh.jpg";

export const projectData: IProjectData = {
    header: "Projects",
    subheader: "Here are some of my projects...",
    buttonText: "Tech I Use",
};

export const projects: IProject[] = [
    {
        title: "Guest house site",
        link: "https://www.ivyguesthouse.co.uk/",
        img: GuestHouseImg,
        description:
            "A simple one page site for a local business offering guest house services. Made with React, TypeScript, animated with Framer Motion and styled with Styled Components.",
    },
    {
        title: "Guest house site",
        link: "https://www.ivyguesthouse.co.uk/",
        img: GuestHouseImg,
        description:
            "A simple one page brochure site for a local business offering guest house services. Made with React, TypeScript, animated with Framer Motion and styled with Styled Components.",
    },
    {
        title: "Guest house site",
        link: "https://www.ivyguesthouse.co.uk/",
        img: GuestHouseImg,
        description:
            "A simple one page brochure site for a local business offering guest house services. Made with React, TypeScript, animated with Framer Motion and styled with Styled Components.",
    },
];
