// components/CollegeManagement.js

import { useState } from 'react';

const CollegeManagement = ({ colleges, onAddCollege, onEditCollege, onDeleteCollege }) => {
    const [newCollege, setNewCollege] = useState('');
    const [editCollegeId, setEditCollegeId] = useState(null);
    const [editedCollege, setEditedCollege] = useState('');

    const handleAddCollege = () => {
        if (newCollege.trim() !== '') {
            onAddCollege(newCollege);
            setNewCollege('');
        }
    };

    const handleEditCollege = () => {
        if (editedCollege.trim() !== '') {
            onEditCollege(editCollegeId, editedCollege);
            setEditCollegeId(null);
            setEditedCollege('');
        }
    };

    const handleDeleteCollege = (collegeId) => {
        onDeleteCollege(collegeId);
    };

    return (
        <div className="college-management">
            <h2>Manage Colleges</h2>
            <div>
                <input
                    type="text"
                    value={newCollege}
                    onChange={(e) => setNewCollege(e.target.value)}
                    placeholder="Enter new college name"
                />
                <button onClick={handleAddCollege}>Add College</button>
            </div>
            <ul>
                {colleges.map((college) => (
                    <li key={college.id}>
                        {editCollegeId === college.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editedCollege}
                                    onChange={(e) => setEditedCollege(e.target.value)}
                                    placeholder="Enter edited college name"
                                />
                                <button onClick={handleEditCollege}>Save</button>
                            </div>
                        ) : (
                            <div>
                                <span>{college.name}</span>
                                <button onClick={() => setEditCollegeId(college.id)}>Edit</button>
                                <button onClick={() => handleDeleteCollege(college.id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CollegeManagement;
