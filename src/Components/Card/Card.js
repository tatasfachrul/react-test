import React from "react";
import { Link } from 'react-router-dom'
import './Card.style.css'

const Card = ({user}) => (
  <Link to={`/profile/${user.id}`}>
  <div className="card">
    <img src={`https://robohash.org/${user.id}?set=set4`} />
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
  </Link>
);

export default Card
