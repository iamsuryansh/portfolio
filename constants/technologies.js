import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiVisualstudio, DiMysql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaPython } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import JiraIcon from "public/assets/svg/jira.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import { SiPytest, SiFlask, SiSelenium, SiMongodb, SiRedux, SiTypescript, SiSolidity } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbRegexOff } from "react-icons/tb";

export const TECHNOLOGIES = [
	
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "TS", icon: <SiTypescript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "Redux", icon: <SiRedux size={32} /> },
			{ name: "MUI", icon: <MuiIcon width={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			// { name: "Shadcn/ui", icon: <ShadCn size={32} /> }
		]
	},
	{
		category: "Back-end",
		items: [
			{ name: "Python", icon: <FaPython size={32} /> },
			{ name: "Solidity", icon: <SiSolidity size={32} /> },
			{ name: "Flask", icon: <SiFlask size={32} /> },
			{ name: "Selenium", icon: <SiSelenium size={32} /> },
			{ name: "PyTest", icon: <SiPytest size={32} /> },
			{ name: "Regex", icon: <TbRegexOff size={32} /> }
		]
	},
	{
		category: "Database",
		items: [
			{ name: "Mysql ", icon: <DiMysql size={32} /> },
			{ name: "Postgresql", icon: <BiLogoPostgresql size={32} /> },
			{ name: "MongoDB", icon: <SiMongodb size={32} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Jira", icon: <JiraIcon width={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> }
		]
	}
];
