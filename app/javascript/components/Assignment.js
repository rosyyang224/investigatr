import React from "react";
import FormattedDate from "./FormattedDate";

function Assignment({ investigation }) {
    const { current_assignments } = investigation.data.attributes;

    return (
        <div className="card yellow lighten-5">
            <div className="card-content">
                <span className="card-title">Current Assignments</span>
                {current_assignments.length === 0 ? (
                    <p>There are no officers currently assigned to this investigation.</p>
                ) : (
                    <ul>
                        {current_assignments.map((assignment) => {
                            const officer = assignment.data.attributes.officer.data.attributes;
                            return (
                                <li key={`assignment-${assignment.data.id}`}>
                                    <p>
                                        &bull; {officer.rank} {officer.first_name} {officer.last_name} (as of: <FormattedDate dateString={assignment.data.attributes.start_date} />)
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Assignment;
