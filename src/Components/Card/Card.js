import React from "react";
import './Card.style.css'

const Card = (props) => (
  <div className="card">
    <img src={`https://robohash.org/${props.user.id}?set=set4`} />
    <h2>{props.user.name}</h2>
    <p>{props.user.email}</p>
  </div>
);

export default Card
