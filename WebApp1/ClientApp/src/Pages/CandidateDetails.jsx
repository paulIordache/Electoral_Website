import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import '../Style/candidateDetails.css';

function CandidateDetails() {
    const { id } = useParams();
    const location = useLocation();
    const [candidate, setCandidate] = useState(location.state?.candidate || null);
    const [loading, setLoading] = useState(!candidate);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!candidate) {
            const fetchCandidate = async () => {
                try {
                    const response = await fetch(`https://localhost:7072/api/candidates`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setCandidate(data);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchCandidate();
        }
    }, [candidate, id]);

    if (loading) {
        return <div className="loading">Loading candidate details...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    if (!candidate) {
        return <div className="error">Candidate not found.</div>;
    }


    return (
        <div className="candidate-details-container">
            <div className="article">
                <div className="article-header">
                    <h1 className="article-title">{candidate.name}</h1>
                    <p className="article-meta">By Staff Writer | {new Date().toLocaleDateString()}</p>
                </div>

                {candidate.photoUrl && (
                    <div className="article-image">
                        <img src={candidate.photoUrl} alt={candidate.name} />
                    </div>
                )}

                <div className="article-content">
                    <p className="article-party"><strong>Party:</strong> {candidate.partyName}</p>
                    <div className="article-description">
                        {candidate.description.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CandidateDetails;
