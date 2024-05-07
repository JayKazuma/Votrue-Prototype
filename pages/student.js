// pages/student.js

import { useState } from 'react';
import Head from 'next/head';
import CandidateList from '../components/CandidateList';

const StudentPage = () => {
    const [selectedCandidates, setSelectedCandidates] = useState({});
    const [positions] = useState([
        'President',
        'Vice President',
        'Secretary',
        'Auditor',
        'Sergeant at Arms',
    ]);
    const [candidates] = useState({
        President: [{ id: 1, name: 'Candidate A' }, { id: 2, name: 'Candidate B' }, { id: 3, name: 'Candidate C' }],
        'Vice President': [{ id: 4, name: 'Candidate D' }, { id: 5, name: 'Candidate E' }, { id: 6, name: 'Candidate F' }],
        Secretary: [{ id: 7, name: 'Candidate G' }, { id: 8, name: 'Candidate H' }, { id: 9, name: 'Candidate I' }],
        Auditor: [{ id: 10, name: 'Candidate J' }, { id: 11, name: 'Candidate K' }, { id: 12, name: 'Candidate L' }],
        'Sergeant at Arms': [{ id: 13, name: 'Candidate M' }, { id: 14, name: 'Candidate N' }, { id: 15, name: 'Candidate O' }],
    });

    const handleSubmitVote = (selectedCandidates) => {
        // Handle submission of votes
        console.log('Selected candidates:', selectedCandidates);
    };

    return (
        <div className="container">
            <Head>
                <title>Student Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="card">
                <h1 className="card-title">Student Page</h1>
                <div className="card-content">
                    <CandidateList
                        positions={positions}
                        candidates={candidates}
                        onSubmitVote={handleSubmitVote}
                    />
                </div>
            </div>
        </div>
    );
};

export default StudentPage;
