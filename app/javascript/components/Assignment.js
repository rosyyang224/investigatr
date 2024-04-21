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
                        {current_assignments.map(({ data }) => (
                            <li key={`assignment-${data.id}`}>
                                <p>
                                    <ul>
                                        <li>
                                            &bull; {data.attributes.officer.data.attributes.rank}{" "}
                                            {data.attributes.officer.data.attributes.first_name}{" "}
                                            {data.attributes.officer.data.attributes.last_name}{" "}
                                            (as of:{" "}
                                            {FormattedDate(data.attributes.start_date)})
                                        </li>
                                    </ul>
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Assignment;
