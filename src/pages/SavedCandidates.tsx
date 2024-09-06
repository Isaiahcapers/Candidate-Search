import React, { useState, useEffect } from 'react';
import Candidate from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) {
      setCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  const removeUser = (username: string) => {
    const updatedCandidates = candidates.filter(candidate => candidate.Name !== username);
    setCandidates(updatedCandidates);
    localStorage.setItem('candidates', JSON.stringify(updatedCandidates));
  };

  return (
    <>
      <h1>Potential Candidates</h1>
      <div>
        <h1>Candidate List</h1>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Bio</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => (
              <tr key={candidate.Name}>
                <td><img src={candidate.Image ?? ''} alt={candidate.Name ?? ''} /></td>
                <td>{candidate.Name}</td>
                <td>{candidate.Location}</td>
                <td>{candidate.Email}</td>
                <td>{candidate.Company}</td>
                <td>{candidate.Bio}</td>
                <td>
                  <button onClick={() => removeUser(candidate.Name!)}>Reject</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SavedCandidates;
