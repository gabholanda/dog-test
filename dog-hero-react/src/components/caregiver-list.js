import React, { useState, useEffect } from "react";
import axios from 'axios'

const CaregiverList = () => {
  const getCaregivers = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/caregivers`)
      .then(responseFromApi => {
        setCaregivers(responseFromApi.data)
      })
      .catch(error => console.log(error));
  }
  const [caregivers, setCaregivers] = useState([{ name: '', age: 0, email: '', image: '', address: '', dogs: [] }])
  const [got, setGot] = useState(true)
  useEffect(() => {
    if (got) {
      getCaregivers()
      setGot(false);
    }
  }, [got])
  return (
    <div>
      <ul>
        {caregivers.map((caregiver, index) => {

          return <li key={index} className='card'>
            <p>Nome: {caregiver.name}</p>
            <p>Idade: {caregiver.age}</p>
            <p>Email: {caregiver.email}</p>
            <p>Endereço: {caregiver.address}</p>
          </li>
        })}
      </ul>
    </div>
  )
}

export default CaregiverList