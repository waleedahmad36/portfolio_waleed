import { SiNextdotjs } from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import SassSvg from "@/public/icons/sass.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";

import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import BootstrapSvg from "@/public/icons/BootstrapSvg.svg";
// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import GithubSvg from "@/public/icons/githubSvg.svg";
// import VsCodeSvg from "@/public/icons/vscode.svg";
import vSCodeSvg from "@/public/icons/vscodesvg.svg";
import PostmanSvg from "@/public/icons/postman.svg";


export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
    
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },

      {
        name: "Python",
        icon: PythonSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      
      {
        name: "SASS",
        icon: SassSvg,
      }, 
      
      {
        name: "Bootstrap",
        icon: BootstrapSvg,
      }, 
    
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },

    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
    {
        name: "Github",
        icon: GithubSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "VsCode",
        icon: vSCodeSvg,
      },
      
    ],
  },
];
