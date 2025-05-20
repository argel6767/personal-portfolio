import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={

					<div className="works-body">
						<div className="work">
							<div className="work-title">Software Engineering II (Intern)</div>
							<div className="work-subtitle">
								Walmart
							</div>
							<div className="work-duration">June 2025 - August 2025</div>
						</div>
						<div className="work">
							<div className="work-title">Business Intelligence Analyst</div>
							<div className="work-subtitle">
								Blue Tactical
							</div>
							<div className="work-duration">August 2024 - February 2025</div>
						</div>

						<div className="work">
							<div className="work-title">Cashier</div>
							<div className="work-subtitle">
								Whole Foods Market
							</div>
							<div className="work-duration">April 2022 - July 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
