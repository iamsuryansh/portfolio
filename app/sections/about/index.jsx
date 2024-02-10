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
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p className="font-bold">My Journey:</p> 
						<p>My adventure in software engineering commenced during my time at Vellore
						Institute of Technology. There, I delved into Python development, data analytics, and
						visualization, gradually expanding into web development with mastery in HTML, CSS, JS,
						and eventually, React. </p>
						<br></br>
						<p className="font-bold">Professional Experience:</p> 
						<p>Post-graduation, I embarked on my
						professional voyage at Standard Chartered as a Developer, immersing myself in the
						captivating realm of blockchain development using Solidity. Contributing to the
						integration of smart contracts with our Blockchain on demand tool, I honed my skills in
						this cutting-edge technology.</p> 
						<p>Transitioning to Samsung, India as a Software Engineer, I
						dived into tool development for test automation with ReactJS and Python, alongside Tizen
						app development using Javascript. Each day presents new challenges and opportunities for
						growth in this dynamic environment. </p>
						<br></br>
						<p className="font-bold">Beyond the Desk: </p>
						<p>Outside the confines of my
						professional life, I&apos;ve spearheaded notable technical projects such as developing an AI
						SaaS platform and a React-based path-finding algorithm visualizer. </p>
						<p>Additionally, I
						co-founded The Comedy Club at VIT, reflecting my passion for humor and community. When
						not submerged in code, you&apos;ll find me indulging in interests spanning from Formula 1 and
						blockchain to travel and devouring the latest in technology through reviews and
						documentaries.</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
