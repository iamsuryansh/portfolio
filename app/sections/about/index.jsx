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
							I&apos;m a builder at heart. I architect and develop scalable backend systems, turning complex ideas into code that actually works in the real world.
						</p>
						<p className="mb-6">
							By day, I&apos;m a Software Engineer at Samsung Research Institute, where I tackle massive-scale challenges. I don&apos;t just write code; I architect solutions.
						</p>

						<p className="mb-3">
							I&apos;m the engineer who:
						</p>
						<ul className="list-none space-y-3 mb-6 ml-4">
							<li>
								Engineered a distributed backend that slashed job failures by 95%. (I&apos;m pretty proud of that one.)
							</li>
							<li>
								Built the Tizen certification engine, cutting management overhead by 40%.
							</li>
							<li>
								Developed a conversational search (RAG) pipeline that delivered answers 50% faster.
							</li>
						</ul>

						<p className="mb-6">
							My work has even snagged me two Samsung Spot Awards, which I&apos;m grateful for.
						</p>

						<p className="font-bold text-xl mb-3">My Go-To Tech:</p>
						<p className="mb-6">
							Python (FastAPI, Flask), ReactJS, Docker, and AWS are my bread and butter, but I&apos;m always learning.
						</p>

						<p className="font-bold text-xl mb-3">Beyond the 9-to-5</p>
						<p className="mb-3">
							When I&apos;m not at my main keyboard, I&apos;m usually:
						</p>
						<ul className="list-none space-y-3 ml-4">
							<li>
								<span className="font-semibold">Building Open-Source:</span> I created Cognilink, a RAG platform to help others build their own custom Q&amp;A systems.
							</li>
							<li>
								<span className="font-semibold">Following Emerging Tech:</span> Diving deep into blockchain innovations.
							</li>
							<li>
								<span className="font-semibold">Decompressing:</span> Catching a Formula 1 race or planning my next trip.
							</li>
						</ul>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
