// components/VoteForm.js

const VoteForm = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(); // Call the onSubmit function passed from the parent component
    };

    return (
        <form onSubmit={handleSubmit} className="vote-form">
            <button type="submit" className="form-button">
                Done Voting
            </button>
        </form>
    );
};

export default VoteForm;
