import Card from "./common/card";
import {faUniversity} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export const Schooling = () => {
    return (
        <div className="works">
            <Card
                icon={faUniversity}
                title="Education"
                body={
                    <div className="works-body">
                        <div className="work">
                            <div className="work-title">Western New England University</div>
                            <div className="work-subtitle">
                                Computer Science
                            </div>
                            <div className="work-duration">2023 - 2025</div>
                        </div>

                        <div className="work">
                            <div className="work-title">University of Massachusetts - Amherst</div>
                            <div className="work-subtitle">
                                Education
                            </div>
                            <div className="work-duration">2020 - 2023</div>
                        </div>
                    </div>
                }
            />
        </div>
    )
}