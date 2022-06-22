import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Profil() {
  const [details, setDetails] = useState({});

  const loadData = async () => {
    try {
      const response = await axios.get();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/profil`);
        setDetails(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  });

  return (
    <div>
      <h1>Profil</h1>
      <></>
    </div>
  );
}
