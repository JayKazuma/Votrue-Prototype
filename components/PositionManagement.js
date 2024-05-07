// components/PositionManagement.js

import { useState } from 'react';

const PositionManagement = ({ positions, onAddPosition, onEditPosition, onDeletePosition }) => {
    const [editingPositionId, setEditingPositionId] = useState(null);
    const [newCandidateName, setNewCandidateName] = useState('');
    const [editingCandidateId, setEditingCandidateId] = useState(null);
    const [candidateName, setCandidateName] = useState('');

    const handleAddCandidate = (positionId) => {
        // Find the position by its ID
        const position = positions.find(pos => pos.id === positionId);
        if (position) {
            // Add the new candidate to the position
            const newCandidate = { id: Date.now(), name: newCandidateName };
            const updatedCandidates = [...position.candidates, newCandidate];
            // Call the onEditPosition function to update the position with the new candidate
            onEditPosition(positionId, { ...position, candidates: updatedCandidates });
            // Clear the new candidate input
            setNewCandidateName('');
        }
    };

    const handleEditCandidate = (positionId, candidateId, newName) => {
        // Find the position by its ID
        const position = positions.find(pos => pos.id === positionId);
        if (position) {
            // Find the candidate by its ID
            const updatedCandidates = position.candidates.map(candidate =>
                candidate.id === candidateId ? { ...candidate, name: newName } : candidate
            );
            // Call the onEditPosition function to update the position with the edited candidate
            onEditPosition(positionId, { ...position, candidates: updatedCandidates });
            // Clear the editing state
            setEditingCandidateId(null);
        }
    };

    const handleDeleteCandidate = (positionId, candidateId) => {
        // Find the position by its ID
        const position = positions.find(pos => pos.id === positionId);
        if (position) {
            // Filter out the candidate to be deleted
            const updatedCandidates = position.candidates.filter(candidate => candidate.id !== candidateId);
            // Call the onEditPosition function to update the position without the deleted candidate
            onEditPosition(positionId, { ...position, candidates: updatedCandidates });
        }
    };

    return (
        <div className="position-management">
            <h2>Position Management</h2>
            {positions.map(position => (
                <div key={position.id} className="position">
                    <h3>{position.name}</h3>
                    <ul>
                        {position.candidates.map(candidate => (
                            <li key={candidate.id}>
                                {editingCandidateId === candidate.id ? (
                                    <div>
                                        <input
                                            type="text"
                                            value={candidateName}
                                            onChange={(e) => setCandidateName(e.target.value)}
                                        />
                                        <button onClick={() => handleEditCandidate(position.id, candidate.id, candidateName)}>Save</button>
                                    </div>
                                ) : (
                                    <div>
                                        <span>{candidate.name}</span>
                                        <button onClick={() => setEditingCandidateId(candidate.id)}>Edit</button>
                                        <button onClick={() => handleDeleteCandidate(position.id, candidate.id)}>Delete</button>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <input
                            type="text"
                            placeholder="Enter candidate name"
                            value={newCandidateName}
                            onChange={(e) => setNewCandidateName(e.target.value)}
                        />
                        <button onClick={() => handleAddCandidate(position.id)}>Add Candidate</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PositionManagement;
