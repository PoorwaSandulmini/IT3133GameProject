import React, { useState } from "react";
import '../assests/css/animal.css';
import { animals } from "../data/AnimalsDb";


export default function AnimalTable() {
    const [currentAnimal, setCurrentAnimal] = useState(animals[Math.floor(Math.random() * animals.length)]);
    const [result, setResult] = useState('');
  
    const handleAnimalClick = (animalName) => {
      if (animalName === currentAnimal.name) {
        setResult('Win');
      } else {
        setResult('Lose');
      }
    };
  
    const resetGame = () => {
      setCurrentAnimal(animals[Math.floor(Math.random() * animals.length)]);
      setResult('');
    };
  
    return (
      <div className="animal-game">
        <div className="div"><h1>Animal Matching Game</h1></div>
        
        <div className="game-container">
          <div className="left-panel">
            <h2>Result</h2>
            <p className={result.toLowerCase()}>{result}</p>
          </div>
          
          
          <div className="center-panel">
            <h2>Animal Name</h2>
            <p>{currentAnimal.name}</p>
          </div>
  
         
          <div className="right-panel">
            <h2>Select the Animal</h2>
            <div className="grid">
              {animals.map((animal) => (
                <div
                  key={animal.name}
                  className="animal-card"
                  onClick={() => handleAnimalClick(animal.name)}
                >
                  <img src={require(`../assests/img/${animal.img}`)} alt={animal.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <button className="reset-button" onClick={resetGame}>Reset Game</button>
      </div>
    );
  }