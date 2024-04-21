import React, { useState, useEffect } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { post, get, put } from "../api";
import FormattedDate from "./FormattedDate";

function SuspectEditor({ onClose, onSave, currentSuspects }) {
    const [options, setOptions] = useState([]);
    const [selectedCriminalId, setSelectedCriminalId] = useState();

    React.useEffect(() => {
        get('/v1/criminals').then((response) => {
            setOptions(
                response.criminals.map((criminal) => {
                    const criminalAlreadyExists =
                        !!find(currentSuspects,
                            {
                                data: { attributes: { criminal: { id: criminal.data.id } } },
                            });
                    return {
                        value: criminal.data.id,
                        label: `${criminal.data.attributes.first_name} ${criminal.data.attributes.last_name}`,
                        disabled: criminalAlreadyExists,
                    };
                })
            );
        });
    }, []);

    return (
        <>
            <Select
                options={options}
                onChange={({ value }) => setSelectedCriminalId(value)}
                isOptionDisabled={(option) => option.disabled}
            />
            <button onClick={() => onSave(selectedCriminalId)} disabled={!selectedCriminalId}>
                Save
            </button>{" "}
            <button onClick={onClose}>Cancel</button>
        </>
    );
}

SuspectEditor.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    currentSuspects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function Suspects({ suspects, investigationId }) {
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [currentSuspects, setCurrentSuspects] = useState(suspects);

    function handleSave(criminalId) {
        post(`/v1/investigations/${investigationId}/suspects`, {
            suspect: {
                criminal_id: criminalId,
            },
        }).then((result) => {
            setIsEditorOpen(false);
            setCurrentSuspects([result, ...currentSuspects]);
        });
    }

    function handleDrop(criminalId) {
        put(`/v1/drop_suspect/${criminalId}`).then((result) => {
            const updatedSuspects = currentSuspects.map((suspect) =>
                suspect.data.id === criminalId ? result : suspect
            );
            setCurrentSuspects(updatedSuspects);
        });
    }

    const content =
        currentSuspects.length === 0 ? (
            <p>This investigation does not yet have suspects associated with it.</p>
        ) : (
            <ul>
                {currentSuspects.map((suspect, index) => {
                    const { first_name, last_name } = suspect.data.attributes.criminal.data.attributes;
                    const addedOn = FormattedDate(suspect.data.attributes.added_on);
                    const droppedOn = suspect.data.attributes.dropped_on === null ? "N/A" : FormattedDate(suspect.data.attributes.dropped_on);
                    const isDropped = suspect.data.attributes.dropped_on !== null;

                    return (
                        <li key={index}>
                            <span>{`${first_name} ${last_name}`}</span>
                            <br />
                            <ul>
                                <li>&bull; Added: {addedOn}</li>
                                <li>&bull; Dropped: {droppedOn}&nbsp;&nbsp;
                                    {!isDropped && <button onClick={() => handleDrop(suspect.data.id)}>Drop</button>}
                                </li>
                            </ul>
                        </li>
                    );
                })}
            </ul>
        );

    return (
        <div className="card yellow lighten-5">
            <div className="card-content">
                <span className="card-title">Suspects</span>
                {content}
                {isEditorOpen && (
                    <SuspectEditor
                        onClose={() => setIsEditorOpen(false)}
                        onSave={handleSave}
                        currentSuspects={currentSuspects}
                    />
                )}
                <hr />
                {!isEditorOpen && <button onClick={() => setIsEditorOpen(true)}>Add</button>}
            </div>
        </div>
    );
}

Suspects.propTypes = {
    suspects: PropTypes.arrayOf(PropTypes.object).isRequired,
    investigationId: PropTypes.string.isRequired
};

export default Suspects;
