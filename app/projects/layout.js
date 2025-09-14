"use client";

import { Suspense } from "react";
import { Loader } from "components";
import { Projects } from "./components/Projects";
import { LocalProjects } from "constants/projects";

// ...existing code...

export default function Page() {
	const filteredProjects = LocalProjects;

	return (
		<div className="container-md">
			<section id="projects" className="section">
				{/* <HeadingDivider title="Relevant projects" /> */}

				<Suspense
					fallback={
						<div className="flex-center">
							<Loader />
						</div>
					}
				>
					<Projects projects={filteredProjects} />
				</Suspense>
			</section>
		</div>
	);
}
