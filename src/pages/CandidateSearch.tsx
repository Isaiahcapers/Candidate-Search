import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from "../interfaces/Candidate.interface";
import plus from '../assets/images/plus.png';
import minus from '../assets/images/minus.png';
import 'bootstrap/dist/css/bootstrap.min.css';
const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate>({
    Image: '',
    Name: '',
    Location: '',
    Email: '',
    Company:'',
    Bio: '',
});


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

  const addToStorage = () => {
    let storage = localStorage.getItem('candidates');
    if (storage) {
      let candidates = JSON.parse(storage);
      candidates.push(candidate);
      localStorage.setItem('candidates', JSON.stringify(candidates));
    } else {
      localStorage.setItem('candidates', JSON.stringify([candidate]));
    }
  };

  const nextCandidate = async () => { 
    const users = await searchGithub();
    const username = users[Math.floor(Math.random() * users.length)].login;
    const userDetails = await searchGithubUser(username);
    setCandidate({
      Image: userDetails.avatar_url,
      Name: userDetails.name,
      Location: userDetails.location,
      Email: userDetails.email,
      Company: userDetails.company,
      Bio: userDetails.bio,
    });
  };

  return (
  <div className="mDiv">
    <h1>CandidateSearch</h1>
    <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" src={`${candidate.Image}`} alt="Card image cap"/>
      <div className="card-body">
        <h3>Username: {candidate.Name}</h3>
      </div>
      <ul className='list-group list-group-flush list-unstyled'>
        <li className='list-group-item'>Location: 
        {candidate.Location}
        </li>
        <li className='list-group-item'>Email: 
        {candidate.Email}
        </li>
        <li className='list-group-item'>Company: 
        {candidate.Company}
        </li>
      </ul>
      <div className="card-body">
      <p className="card-text">Bio:{candidate.Bio}</p>
      </div>
    </div>
    <div style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"}}>
      <button className='btn' id='btn1'  onClick={nextCandidate}><img src={minus} alt="" /></button>
      <button className='btn' id='btn2' onClick={addToStorage}><img src={plus} alt="" /></button>
    </div>
  </div>
  );
};

export default CandidateSearch;
