import React, { useEffect, useState } from 'react';
import '../Style/candidates.css';

function Candidates() {
    const [candidates, setCandidates] = useState([]);
    const [expandedCandidateId, setExpandedCandidateId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await fetch('https://localhost:7072/api/candidates');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCandidates(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCandidates();
    }, []);

    const toggleExpand = (id) => {
        setExpandedCandidateId(expandedCandidateId === id ? null : id);
    };

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="candidates-container">
            <h1 className="title">Candidates</h1>
            <div className="candidates-grid">
                {candidates.map(candidate => (
                    <div
                        key={candidate.id}
                        className={`candidate-card ${expandedCandidateId === candidate.id ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(candidate.id)}
                    >
                        <h2 className="candidate-name">{candidate.name}</h2>
                        <p className="candidate-party">Party: {candidate.partyName}</p>
                        {expandedCandidateId === candidate.id && (
                            <div className="candidate-description">
                                {candidate.description.split('\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Candidates;
