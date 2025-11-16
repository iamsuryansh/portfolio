"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-6xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-lg/8 font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p className="mb-4">
							I&apos;m a software engineer with 4 years of hands-on experience who loves building and deploying robust, scalable backend solutions from the ground up.
						</p>
						<p className="mb-6">
							Currently, I&apos;m a Software Engineer at Samsung Research Institute, where I architect and develop production systems that serve millions of users globally. I thrive on taking full ownership of projects and collaborating in an Agile environment to deliver high-quality, reliable solutions.
						</p>

						<p className="font-bold text-xl mb-4">🚀 My Impact at Samsung</p>
						<p className="mb-3">
							My role is all about solving complex problems at scale. Here are a few highlights of my contributions:
						</p>
						<ul className="list-none space-y-4 mb-6 ml-4">
							<li>
								<span className="font-semibold">High-Availability Backend:</span> I engineered a distributed, high-availability backend service using Python, Celery, and Redis. This fault-tolerant design, complete with idempotent workers and automated retries, successfully cut job failures by 95%.
							</li>
							<li>
								<span className="font-semibold">Conversational Search (RAG):</span> I built a conversational search service from scratch using Python (FastAPI) and FAISS. By integrating an LLM and developing a React chat interface, I slashed the time-to-first-token by 50%.
							</li>
							<li>
								<span className="font-semibold">Tizen App Lifecycle Platform:</span> I developed the backend service for the Tizen app certification platform, automating complex workflows. By integrating granular Role-Based Access Control (RBAC) and automated rollbacks, my work cut management overhead by 40%.
							</li>
							<li>
								<span className="font-semibold">Event-Driven Notifications:</span> I architected and implemented an event-driven notification microservice (FastAPI) to push real-time updates, which directly led to a 2x increase in platform adoption.
							</li>
						</ul>

						<p className="font-bold text-xl mb-4">💻 My Go-To Toolkit</p>
						<p className="mb-3">
							I&apos;m proficient across the full stack, but my expertise lies in building powerful backends.
						</p>
						<ul className="list-none space-y-2 mb-6 ml-4">
							<li><span className="font-semibold">Languages:</span> Python, JavaScript, SQL, Typescript, Java</li>
							<li><span className="font-semibold">Backend:</span> FastAPI, Flask, Django, Node.js</li>
							<li><span className="font-semibold">Databases:</span> MySQL, PostgreSQL, MongoDB</li>
							<li><span className="font-semibold">DevOps:</span> AWS, Docker, Kubernetes, Git, CI/CD (Github Actions)</li>
							<li><span className="font-semibold">Frontend:</span> ReactJS, NextJS, Tailwind CSS</li>
							<li><span className="font-semibold">Data & Events:</span> Redis, Kafka, Elasticsearch, RESTful APIs</li>
						</ul>

						<p className="font-bold text-xl mb-4">🏆 Recognition</p>
						<p className="mb-3">
							I&apos;m proud of the work I do, and it&apos;s always an honor to be recognized for it.
						</p>
						<ul className="list-none space-y-3 mb-6 ml-4">
							<li>
								<span className="font-semibold">Samsung Spot Award (2x):</span> Received twice for delivering high-quality, reliable solutions and driving operational efficiency.
							</li>
							<li>
								<span className="font-semibold">Standard Chartered:</span> At my previous role, I integrated Solidity smart contracts into a Python (Flask) backend, cutting the average developer&apos;s time-to-first-test by 80%.
							</li>
						</ul>

						<p className="font-bold text-xl mb-4">🌴 Beyond the Code</p>
						<p className="mb-3">
							When I&apos;m not architecting backend systems, you can usually find me:
						</p>
						<ul className="list-none space-y-3 ml-4">
							<li>
								<span className="font-semibold">Building Open-Source Tools:</span> I&apos;m the creator of Cognilink, an open-source RAG platform that helps developers rapidly build and deploy custom Q&amp;A systems.
							</li>
							<li>
								<span className="font-semibold">Staying Curious:</span> I&apos;m always diving into emerging technologies, with a special interest in blockchain innovations.
							</li>
							<li>
								<span className="font-semibold">Decompressing:</span> Catching a Formula 1 race or planning my next travel adventure.
							</li>
						</ul>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
