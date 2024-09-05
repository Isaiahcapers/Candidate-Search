import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from "../interfaces/Candidate.interface";
import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';
const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>({
    Image: '',
    Name: '',
    Location: '',
    Email: '',
    Company:'',
    Bio: '',
});

const [searchGithub, setSearchGithub] = useState<string>('');

useEffect(() => {
  const fetchCandidates = async () => {
    try { 
      const users = await searchGithub();
      if (users.length > 0) {
        const username = users[0].login;
        const userDetails = await searchGithubUser(username);
        setCandidate({
          Image: userDetails.avatar_url,
          Name: userDetails.name,
          Location: userDetails.location,
          Email: userDetails.email,
          Company: userDetails.company,
          Bio: userDetails.bio,
        });
      }
      } catch (err) {
      console.log('Error fetching Candidates', err);
      }
    };
  fetchCandidates();
  }, []);


  return (
  <div className="d-flex">
    <h1>CandidateSearch</h1>
    <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" src={`${candidate.Image}`} alt="Card image cap"/>
      <div className="card-body">
        <h3>Username</h3>
      </div>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
        {candidate.Location}
        </li>
        <li className='list-group-item'>
        {candidate.Email}
        </li>
        <li className='list-group-item'>
        {candidate.Company}
        </li>
      </ul>
      <div className="card-body">
      <p className="card-text">{candidate.Bio}</p>
      </div>
    </div>
    <div style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"}}>
      <button><img src={minus} alt="" /></button>
      <button><img src={plus} alt="" /></button>
    </div>
  </div>
  );
};

export default CandidateSearch;
