import React, { useState } from 'react';
import '../assets/PetProfile.css'; 

const PetProfile = () => {
  const [petName, setPetName] = useState('');
  const [breed, setBreed] = useState('');
  const [customBreed, setCustomBreed] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [picture, setPicture] = useState(null);
  const [petProfiles, setPetProfiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPetProfile = {
      petName,
      breed: breed === 'other' ? customBreed : breed,
      age,
      gender,
      picture: picture ? URL.createObjectURL(picture) : null
    };
    setPetProfiles([...petProfiles, newPetProfile]);
    setPetName('');
    setBreed('');
    setCustomBreed('');
    setAge('');
    setGender('');
    setPicture(null);
  };

  const handleBreedChange = (e) => {
    setBreed(e.target.value);
    if (e.target.value !== 'other') {
      setCustomBreed('');
    }
  };

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    setPicture(file);
  };

  return (
    <div className="pet-profile">
      <h2 className="title">Pet Profile</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="petName" className="label">Pet Name:</label>
        <input
          type="text"
          id="petName"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className="input"
        />

        <label htmlFor="breed" className="label">Breed:</label>
        <select id="breed" value={breed} onChange={handleBreedChange} className="select">
          <option value="">Select a Breed</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="other">Other</option>
        </select>

        {breed === 'other' && (
          <input
            type="text"
            placeholder="Enter custom breed"
            value={customBreed}
            onChange={(e) => setCustomBreed(e.target.value)}
            className="input"
          />
        )}

        <label htmlFor="age" className="label">Age:</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input"
        />

        <label htmlFor="gender" className="label">Gender:</label>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="select">
          <option value="">Select a Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="picture" className="label">Picture:</label>
        <input type="file" id="picture" onChange={handlePictureChange} className="file-input" />

        <button type="submit" className="submit-btn">Create Pet Profile</button>
      </form>

      <div className="pet-cards">
        <h3 className="card-title">Your Pets:</h3>
        {petProfiles.map((profile, index) => (
          <div key={index} className="card">
            <h4 className="card-header">{profile.petName}</h4>
            <p className="card-info">Breed: {profile.breed}</p>
            <p className="card-info">Age: {profile.age}</p>
            <p className="card-info">Gender: {profile.gender}</p>
            {profile.picture && <img src={profile.picture} alt="Pet" className="card-image" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetProfile;