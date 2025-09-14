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
						<p className="font-bold text-xl/8">Professional Journey:</p> 
						<p>Software Engineer with 4 years of experience building and deploying robust, scalable 
						backend services from concept to production. Currently at Samsung Research Institute, 
						where I architect and develop production systems that serve millions of users globally.</p>
						<br></br>
						<p className="font-bold">Current Role & Impact:</p> 
						<p>At Samsung, I&apos;ve led the development of critical infrastructure including the Tizen 
						Certification Engine (reducing certification time by 80% across 450+ applications), 
						implemented RAG pipelines for semantic search (50% faster than existing solutions), 
						and engineered the backend powering the global Tizen App Store with comprehensive RBAC systems.</p>
						<br></br>
						<p className="font-bold">Technical Expertise:</p> 
						<p>Proficient with Python (FastAPI, Flask), SQL and NoSQL databases, and modern DevOps 
						tools including CI/CD pipelines, Docker containerization, and AWS cloud infrastructure. 
						I excel at taking full project ownership and collaborating with cross-functional teams 
						in Agile environments to deliver high-quality, reliable solutions.</p>
						<br></br>
						<p className="font-bold">Recognition & Achievements:</p> 
						<p>Received Samsung Spot Award twice for impactful development and process optimization. 
						Previously at Standard Chartered, won &quot;Best Project&quot; award for blockchain platform 
						development out of 12 teams. My work has consistently delivered measurable improvements 
						in system performance, user experience, and operational efficiency.</p>
						<br></br>
						<p className="font-bold">Beyond Work:</p> 
						<p>When not architecting backend systems, I contribute to open-source projects like my 
						production-ready RAG platform, stay current with emerging technologies, and enjoy 
						Formula 1, blockchain innovations, and travel experiences.</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
