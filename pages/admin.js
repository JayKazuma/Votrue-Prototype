// pages/admin.js

import { useState } from 'react';
import Head from 'next/head';
import CollegeManagement from '../components/CollegeManagement';
import CandidateManagement from '../components/CandidateManagement';
import ElectionSchedule from '../components/ElectionSchedule';
import styles from '../styles/AdminPage.module.css';

const AdminPage = () => {
    const [colleges, setColleges] = useState([]);
    const [candidates, setCandidates] = useState([]);
    const [electionSchedule, setElectionSchedule] = useState({ start: null, end: null });

    const handleAddCollege = (newCollege) => {
        const newColleges = [...colleges, { id: Date.now(), name: newCollege }];
        setColleges(newColleges);
    };

    const handleEditCollege = (collegeId, editedCollege) => {
        const updatedColleges = colleges.map(college =>
            college.id === collegeId ? { ...college, name: editedCollege } : college
        );
        setColleges(updatedColleges);
    };

    const handleDeleteCollege = (collegeId) => {
        const filteredColleges = colleges.filter(college => college.id !== collegeId);
        setColleges(filteredColleges);
    };

    const handleSetSchedule = (startDate, endDate) => {
        setElectionSchedule({ start: startDate, end: endDate });
    };

    return (
        <div className="container">
            <Head>
                <title>Admin Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="watermark">VoTrue</div>
            <div className="card">
                <h1 className="card-title">Admin Page</h1>
                <div className="card-content">
                    <CollegeManagement
                        colleges={colleges}
                        onAddCollege={handleAddCollege}
                        onEditCollege={handleEditCollege}
                        onDeleteCollege={handleDeleteCollege}
                    />
                    <CandidateManagement candidates={candidates} />
                    <ElectionSchedule
                        electionSchedule={electionSchedule}
                        onSetSchedule={handleSetSchedule}
                    />
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.actionButton}>Add Position</button>
                <button className={styles.actionButton}>Edit Position</button>
                <button className={styles.actionButton}>Delete Position</button>
                <button className={styles.startElectionButton}>Start Election</button>
            </div>
        </div>
    );
};

export default AdminPage;
