import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  // useState hook to manage state for the Quran data
  const [ayah, setAyah] = useState('');

  // useEffect hook to fetch Quran data after the component is mounted
  useEffect(() => {
    FetchQuran();
  }, []); // The empty array makes this run only once, similar to componentDidMount

  // Function to fetch Quran data using axios
  function FetchQuran() {
    axios.get('http://api.alquran.cloud/v1/quran/quran-uthmani')
      .then((response) => {
        console.log('API Response:', response.data);
        // Optionally set the data to a state variable if needed
        setAyah(response.data); // Set the fetched data to state
      })
      .catch((error) => {
        console.log('Error fetching Quran:', error);
      });
  }

  return (
    <div>
      <h1>Quran Data</h1>
      {/* Render fetched Quran data */}
      <pre>{JSON.stringify(ayah, null, 2)}</pre>
    </div>
  );
}

export default App;
