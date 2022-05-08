import { IProject, IProjectData } from "../interfaces/IProject";
import GuestHouseImg from "../assets/img/ivy-gh.jpg";
import PersonalSiteImg from "../assets/img/personal-site.jpg";

export const projectData: IProjectData = {
    header: "Projects",
    subheader: "Here are some of my projects...",
    buttonText: "Tech I Use",
};

export const projects: IProject[] = [
    {
        title: "Personal site",
        link: "https://github.com/ciaranmccullough/web-services",
        img: PersonalSiteImg,
        description:
            "My personal site (this one) made to promote my work and display my skills. Made with React, TypeScript, Material UI & contact form created w/ Formik. There is a link to the code below.",
    },
    // {
    //     title: "Guest house site",
    //     link: "https://www.ivyguesthouse.co.uk/",
    //     img: GuestHouseImg,
    //     description:
    //         "A simple one page brochure site for a local business offering guest house services. Made with React, TypeScript, animated with Framer Motion and styled with Styled Components.",
    // },
    // {
    //     title: "Guest house site",
    //     link: "https://www.ivyguesthouse.co.uk/",
    //     img: GuestHouseImg,
    //     description:
    //         "A simple one page brochure site for a local business offering guest house services. Made with React, TypeScript, animated with Framer Motion and styled with Styled Components.",
    // },
];
