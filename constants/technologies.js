import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiVisualstudio, DiMysql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaPython, FaDocker, FaAws } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import JiraIcon from "public/assets/svg/jira.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import { SiPytest, SiFlask, SiSelenium, SiMongodb, SiRedux, SiTypescript, SiSolidity, SiFastapi, SiDjango, SiNodedotjs, SiKubernetes, SiLinux, SiRedis, SiApachekafka, SiElasticsearch } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbRegexOff } from "react-icons/tb";

export const TECHNOLOGIES = [
	{
		category: "Programming Languages",
		items: [
			{ name: "Python", icon: <FaPython size={32} /> },
			{ name: "JavaScript", icon: <IoLogoJavascript size={32} /> },
			{ name: "TypeScript", icon: <SiTypescript size={32} /> },
			{ name: "Solidity", icon: <SiSolidity size={32} /> },
			{ name: "SQL", icon: <DiMysql size={32} /> }
		]
	},
	{
		category: "Backend & APIs",
		items: [
			{ name: "FastAPI", icon: <SiFastapi size={32} /> },
			{ name: "Flask", icon: <SiFlask size={32} /> },
			{ name: "Django", icon: <SiDjango size={32} /> },
			{ name: "Node.js", icon: <SiNodedotjs size={32} /> },
			{ name: "RESTful APIs", icon: <TbRegexOff size={32} /> }
		]
	},
	{
		category: "Database & Storage",
		items: [
			{ name: "MySQL", icon: <DiMysql size={32} /> },
			{ name: "PostgreSQL", icon: <BiLogoPostgresql size={32} /> },
			{ name: "MongoDB", icon: <SiMongodb size={32} /> },
			{ name: "Redis", icon: <SiRedis size={32} /> },
			{ name: "Elasticsearch", icon: <SiElasticsearch size={32} /> }
		]
	},
	{
		category: "DevOps & Cloud",
		items: [
			{ name: "AWS", icon: <FaAws size={32} /> },
			{ name: "Docker", icon: <FaDocker size={32} /> },
			{ name: "Kubernetes", icon: <SiKubernetes size={32} /> },
			{ name: "Linux", icon: <SiLinux size={32} /> },
			{ name: "Kafka", icon: <SiApachekafka size={32} /> }
		]
	},
	{
		category: "Frontend",
		items: [
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next.js", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> }
		]
	},
	{
		category: "Tools & Others",
		items: [
			{ name: "Git", icon: <AiFillGithub size={32} /> },
			{ name: "VS Code", icon: <DiVisualstudio size={32} /> },
			{ name: "Jira", icon: <JiraIcon width={32} /> },
			{ name: "PyTest", icon: <SiPytest size={32} /> },
			{ name: "Selenium", icon: <SiSelenium size={32} /> }
		]
	}
];
