"use client";

import { Suspense, useState } from "react";
import useSWR from "swr";
import { ErrorBoundary } from "react-error-boundary";
import { HeadingDivider, Loader } from "components";
import { Filter } from "./components/Filter";
import { fetcher } from "utils/fetcher";
import Error from "../error";
import { Projects } from "./components/Projects";
import { LocalProjects } from "constants/projects";

const url = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_ALL_PROJECTS}`;

export default function Page() {
	// const [category, setCategory] = useState(undefined);
	// const filterUrl = `${process.env.NEXT_PUBLIC_SANITY_URL}${process.env.NEXT_PUBLIC_SANITY_PROJECTS}${category}${process.env.NEXT_PUBLIC_SANITY_PROJECT_BY_CATEGORY}`;

	// const fetchUrl = category ? filterUrl : url;
	// const { data, error } = useSWR(fetchUrl, fetcher);
	// const filteredProjects = data?.result;

	// const onClick = (catName) => setCategory(catName);

	// if (error) {
	// 	return <div className="container-md">Error loading projects...</div>;
	// }
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
