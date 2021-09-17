import { animals } from './animals';
import React from 'react';
import './App.css';

function App() {
  const title = "";

  const showBackground = true;
  
  const background = (
    <img 
      className="background"
      alt="ocean"
      src='/images/ocean.jpg'
    />
  );
  
  const images = [];
  for (const animal in animals){
    images.push(
      <img 
        key = {animal}
        className = 'animal'
        alt = {animal}
        src = {animals[animal].image}
        ariaLabel = {animal}
        role = 'button'
        onClick = {displayFact}
      />
    )
  }
  
  function displayFact (e){
    const selectedAnimal = e.target.alt;
    const animalInfo = animals[selectedAnimal];
    const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  
    const funfact = animalInfo.facts[optionIndex];
    document.getElementById('fact').innerHTML = funfact;
  }
  
  return (
      <div>
        <h1>{title || "Click an animal for a fun fact"}</h1>
        {showBackground && background}
        <p id= 'fact'></p>
        <div className = 'animals'>
          {images}
        </div>
      </div>
    );
}

export default App;
