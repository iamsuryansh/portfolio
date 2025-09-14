const author = "Suryansh Jain";
const description =
	"Software Engineer with 4 years of experience at Samsung Research Institute. Specialized in Python backend development, cloud infrastructure, and building production-ready systems that serve millions of users globally.";
const url = "https://i-am-suryansh-jain.netlify.app";
export const AppMetadata = {
	metadataBase: new URL("https://suryansh-jain-portfolio.netlify.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Suryansh Jain",
		"Suryansh Jain - software engineer",
		"Backend developer",
		"Python developer",
		"Samsung engineer",
		"Software Engineer Portfolio",
		"FastAPI developer",
		"AWS cloud engineer"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://suryansh-jain-portfolio.netlify.app/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://suryansh-jain-portfolio.netlify.app/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
