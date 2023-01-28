import React from 'react';
import styles from './Card.module.css'


export default function Card(props) {
   return (
      <div className= {styles.card}>
         <button className= {styles.closebtn} onClick={props.onClose}>X</button>
         <h2 className= {styles.name}>{props.name}</h2>
         <img  src={props.image} alt="" />
         <h2>
            <span className= {styles.description}>{props.species}</span>
            <span className= {styles.description}>{props.gender}</span>
         </h2>
      </div>
   );
 }
 