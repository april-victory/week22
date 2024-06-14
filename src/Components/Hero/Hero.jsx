import React from "react";
import "./Hero.css";

export default function Hero(props) {
  console.log(props);
  return (
    <div className="superhero-wrapper">
      <h3>{props.name}</h3>
      <p>Вселенная: {props.universe}</p>
      <p>Альтерэго: {props.alterego}</p>
      <p>Чем занимается: {props.occupation}</p>
      <p>Друзья: {props.friends}</p>
      <p>В чем сила: {props.superpowers}</p>
      <img className="imgHero" src={props.url} alt={props.name} />
    </div>
  );
}
