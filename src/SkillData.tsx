
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import {  skillsDataType } from "./types";


export const skillsData:skillsDataType[] = [
    {
        id:1,
        name:"HTML",
        class:"skill html",
        icon:<FaHtml5 className="svg-icon"  />,
    },
    {
        id:2,
        name:"CSS",
        class:"skill css",
        icon:<FaCss3Alt className="svg-icon"/>,
    },
    {
        id:3,
        name:"JavaScript",
        class:"skill javascript",
        icon:<IoLogoJavascript className="svg-icon"/>,
    },
    {
        id:4,
        name:"React js",
        class:"skill react",
        icon:<FaReact className="svg-icon"/>,
    },
    {
        id:5,
        name:"Taiwlind CSS",
        class:"skill tailwind",
        icon:<SiTailwindcss className="svg-icon"/>,
    },
    {
        id:6,
        name:"Next js",
        class:"skill next",
        icon:<SiNextdotjs className="svg-icon"/>,
    },
    {
        id:7,
        name:"TypeScript",
        class:"skill typescript",
        icon:<SiTypescript className="svg-icon"/>,
    },

]