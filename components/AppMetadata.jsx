const author = "Suryansh Jain";
const description =
	"Experienced Software Engineer working at Samsung, India. Love to build interactive and seamless UI using React and Next.js";
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
		"Suryansh Jain - software developer",
		"Frontend developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
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
