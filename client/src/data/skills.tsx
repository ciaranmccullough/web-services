import HTMLIcon from "../assets/icons/HTMLIcon";
import TypeScriptIcon from "../assets/icons/TypeScriptIcon";
import DotnetCoreIcon from "../assets/icons/DotnetCore";
import CSharpIcon from "../assets/icons/CSharpIcon";
import MongoDbIcon from "../assets/icons/MongoDbIcon";
import PostgresSQLIcon from "../assets/icons/PostgresSQLIcon";
import ExpressIcon from "../assets/icons/ExpressIcon";
import NodeJsIcon from "../assets/icons/NodeJsIcon";
import ReactIcon from "../assets/icons/ReactIcon";
import JavaScriptIcon from "../assets/icons/JavaScriptIcon";
import SassIcon from "../assets/icons/SassIcon";
import CSSIcon from "../assets/icons/CSSIcon";
import TailwindIcon from "../assets/icons/TailwindIcon";
import FigmaIcon from "../assets/icons/FigmaIcon";
import GatsbyIcon from "../assets/icons/GatsbyIcon";
import NextJsIcon from "../assets/icons/NextJsIcon";
import WordPressIcon from "../assets/icons/WordPressIcon";
import MaterialUIIcon from "../assets/icons/MaterialUIIcon";
import GitIcon from "../assets/icons/GitIcon";
import { ICard, ISkillsData } from "../interfaces/ISkills";

export const skillsData: ISkillsData = {
    header: "Skills",
    useTagline: "Here's what I use everyday...",
    experienceTagline: "Here's what I have experience in...",
    learningTaglne: "And what I'm learning...",
    buttonText: "Contact me",
};

export const everyDaySkills: ICard[] = [
    {
        icon: <HTMLIcon />,
        title: "HTML5",
    },
    {
        icon: <CSSIcon />,
        title: "CSS3",
    },
    {
        icon: <JavaScriptIcon />,
        title: "JavaScript",
    },
    {
        icon: <TypeScriptIcon />,
        title: "TypeScript",
    },
    {
        icon: <ReactIcon />,
        title: "React",
    },
    {
        icon: <MaterialUIIcon />,
        title: "MaterialUI",
    },
    {
        icon: <GitIcon />,
        title: "Git",
    },
];

export const experienceSkills: ICard[] = [
    {
        icon: <GatsbyIcon />,
        title: "Gatsby",
    },
    {
        icon: <NextJsIcon />,
        title: "Next Js",
    },
    {
        icon: <WordPressIcon />,
        title: "WordPress",
    },
    {
        icon: <FigmaIcon />,
        title: "Figma",
    },
    {
        icon: <SassIcon />,
        title: "Sass",
    },
    {
        icon: <TailwindIcon />,
        title: "Tailwind",
    },
    {
        icon: <NodeJsIcon />,
        title: "Node Js",
    },
    {
        icon: <ExpressIcon />,
        title: "Express",
    },
    {
        icon: <MongoDbIcon />,
        title: "Mongo Db",
    },
];

export const learningSkills: ICard[] = [
    {
        icon: <DotnetCoreIcon />,
        title: ".Net Core",
    },
    {
        icon: <CSharpIcon />,
        title: "C#",
    },
    {
        icon: <PostgresSQLIcon />,
        title: "PostgresSQL",
    },
];
