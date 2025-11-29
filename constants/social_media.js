import { BsFillEnvelopeOpenFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFileAlt } from "react-icons/fa";

export const SOCIAL_MEDIA = [
	{
		id: "resume",
		icon: <FaFileAlt />,
		title: "My Resume",
		url: "https://iamsuryansh.github.io/resume-auto-sync/"
	},
	{
		id: "linkedin",
		icon: <BsLinkedin />,
		title: "Visit LinkedIn profile",
		url: "https://www.linkedin.com/in/suryanshjain31/"
	},
	{
		id: "github",
		icon: <BsGithub />,
		title: "Visit Github profile",
		url: "https://github.com/iamsuryansh"
	},
	{
		id: "mail",
		icon: <BsFillEnvelopeOpenFill />,
		title: "Send me an email",
		url: "mailto://suryanshjain531@gmail.com"
	}
];
