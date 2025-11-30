"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const CERTIFICATIONS = [
	{
		id: "aws-saa",
		title: "AWS Certified Solutions Architect – Associate",
		code: "SAA-C03",
		issueDate: "Nov 2025",
		credlyUrl: "https://www.credly.com/badges/53059a34-a656-4887-9eb9-e30836b4b9dd/public_url",
		competencies: [
			"IAM",
			"VPC Design",
			"EC2",
			"S3",
			"RDS",
			"Lambda",
			"Route 53",
			"CloudWatch",
			"Cost Optimization"
		]
	}
];

export function CertificationsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="certifications" className="section">
				<HeadingDivider title="Certifications" />
				<div className="mt-10 grid grid-cols-1 gap-8">
					{CERTIFICATIONS.map((cert, index) => (
						<div
							key={cert.id}
							ref={ref}
							className="flex flex-col gap-4 p-6 rounded-lg bg-card-light dark:bg-card-dark"
							style={{
								transform: isInView ? "none" : "translateY(50px)",
								opacity: isInView ? 1 : 0,
								transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.2}s`
							}}
						>
							<div className="flex items-start justify-between gap-4">
								<div className="flex items-start gap-4 flex-1">
									<div className="text-3xl text-blue-light mt-1">
										<FaAward />
									</div>
									<div className="flex-1">
										<h3 className="text-xl font-bold mb-1">
											{cert.title}
										</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
											{cert.code} • Issued {cert.issueDate}
										</p>
										<div className="mb-4">
											<p className="text-sm font-semibold mb-2">Key Competencies:</p>
											<div className="flex flex-wrap gap-2">
												{cert.competencies.map((competency) => (
													<span
														key={competency}
														className="px-3 py-1 text-sm rounded bg-badge-light/50 dark:bg-badge-dark"
													>
														{competency}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</div>
							<a
								href={cert.credlyUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="icon-link-btn icon-link-btn--outline w-fit"
								title="View certification on Credly"
							>
								<FaExternalLinkAlt />
								<span>View Credential</span>
							</a>
						</div>
					))}
				</div>
			</section>
		</LazyMotion>
	);
}
