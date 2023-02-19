import React from 'react';
import card from './Card.module.css'


export default function Card(props) {
   return (
      <div className= {card.card}>
         <div>
            <button className={card.closebtn} onClick={() => props.onClose(props.id)}>X</button>
            <img  src={props.image} alt="Could not load image" />
            <h2 className={card.name}>{props.name}</h2>
         </div>
         <div>
            <h2 className={card.description}>{props.species}</h2>
            <h2 className={card.description}>{props.gender}</h2>
         </div>
      </div>
   );
 }
 