import React, { useState, useEffect } from "react";
import axios from "axios";
import '../App.css'

const OwnerList = () => {
  const getOwners = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/owners`)
      .then(responseFromApi => {
        setOwners(responseFromApi.data)
      })
      .catch(error => console.log(error));
  }
  const [owners, setOwners] = useState([{ name: '', age: 0, email: '', image: '', address: '', dogs: [] }])
  const [got, setGot] = useState(true)
  useEffect(() => {
    if (got) {
      getOwners()
      setGot(false);
    }
  }, [got])
  return (
    <div className="dog-image">
      <ul>
        {owners.map((owner, index) => {

          return <li key={index} className='card'>
            <p>Nome: {owner.name}</p>
            <p>Idade: {owner.age}</p>
            <p>Email: {owner.email}</p>
            <p>Endereço: {owner.address}</p>
          </li>
        })}
      </ul>
    </div>
  )
}

export default OwnerList