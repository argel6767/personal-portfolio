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
							<div className="work-title">Blue Tactical</div>
							<div className="work-subtitle">
								Business Intelligence Analyst
							</div>
							<div className="work-duration">2024 - 2025</div>
						</div>

						<div className="work">
							<div className="work-title">Whole Foods Market</div>
							<div className="work-subtitle">
								Cashier
							</div>
							<div className="work-duration">2022 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
