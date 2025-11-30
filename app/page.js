"use client";

import { WelcomeSection, AboutSection, TechnologiesSection, ProjectsSection, CertificationsSection } from "app/sections";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<ProjectsSection />
			<CertificationsSection />
			<TechnologiesSection />
		</div>
	);
}
