// components/CandidateManagement.js

import { useState } from 'react';

const CandidateManagement = ({ candidates, onAddCandidate, onEditCandidate, onDeleteCandidate }) => {
    const [newCandidate, setNewCandidate] = useState('');
    const [editCandidateId, setEditCandidateId] = useState(null);
    const [editedCandidate, setEditedCandidate] = useState('');

    const handleAddCandidate = () => {
        if (newCandidate.trim() !== '') {
            onAddCandidate(newCandidate);
            setNewCandidate('');
        }
    };

    const handleEditCandidate = () => {
        if (editedCandidate.trim() !== '') {
            onEditCandidate(editCandidateId, editedCandidate);
            setEditCandidateId(null);
            setEditedCandidate('');
        }
    };

    const handleDeleteCandidate = (candidateId) => {
        onDeleteCandidate(candidateId);
    };

    return (
        <div className="candidate-management">
            <h2>Manage Candidates</h2>
            <div>
                <input
                    type="text"
                    value={newCandidate}
                    onChange={(e) => setNewCandidate(e.target.value)}
                    placeholder="Enter new candidate name"
                />
                <button onClick={handleAddCandidate}>Add Candidate</button>
            </div>
            <ul>
                {candidates.map((candidate) => (
                    <li key={candidate.id}>
                        {editCandidateId === candidate.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editedCandidate}
                                    onChange={(e) => setEditedCandidate(e.target.value)}
                                    placeholder="Enter edited candidate name"
                                />
                                <button onClick={handleEditCandidate}>Save</button>
                            </div>
                        ) : (
                            <div>
                                <span>{candidate.name}</span>
                                <button onClick={() => setEditCandidateId(candidate.id)}>Edit</button>
                                <button onClick={() => handleDeleteCandidate(candidate.id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CandidateManagement;
