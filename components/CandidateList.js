// components/CandidateList.js

import { useState } from 'react';

const CandidateList = ({ positions, candidates, onSubmitVote }) => {
    const [selectedCandidates, setSelectedCandidates] = useState({});
    const [voted, setVoted] = useState(false);

    const handleCandidateSelect = (position, candidateId) => {
        setSelectedCandidates((prevSelected) => ({
            ...prevSelected,
            [position]: candidateId,
        }));
    };

    const handleSubmitVote = () => {
        onSubmitVote(selectedCandidates);
        setVoted(true);
    };

    return (
        <div className="candidate-list">
            <h2>Candidates</h2>
            <ul>
                {positions.map((position) => (
                    <li key={position}>
                        <h3>{position}</h3>
                        <ul>
                            {candidates[position].map((candidate) => (
                                <li key={candidate.id}>
                                    <label>
                                        <input
                                            type="radio"
                                            name={position}
                                            value={candidate.id}
                                            checked={
                                                selectedCandidates[position] === candidate.id
                                            }
                                            onChange={() =>
                                                handleCandidateSelect(position, candidate.id)
                                            }
                                        />
                                        {candidate.name}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
            {!voted && (
                <button type="button" className="form-button" onClick={handleSubmitVote}>
                    Submit Vote
                </button>
            )}
            {voted && (
                <div>
                    <h2>Current Leading Candidates</h2>
                    <ul>
                        {positions.map((position) => (
                            <li key={position}>
                                <h3>{position}</h3>
                                <p>
                                    {candidates[position].find(
                                        (candidate) => candidate.id === selectedCandidates[position]
                                    ).name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CandidateList;
