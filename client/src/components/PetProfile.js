import React, { useState } from 'react';
import axios from 'axios';

function PetProfile() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('breed', breed);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('photo', photo);

    try {
      await axios.post('/api/pets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Pet Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Breed:
          <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <label>
          Gender:
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <label>
          Photo:
          <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
        </label>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
}

export default PetProfile;