import React from 'react';
import { useState, useEffect } from 'react';  

import Desk from './Desk';

import './App.css';


const App = () => {

  const [cards, setCards] = useState([]);
  const [desks, setDesks] = useState([]);
  const [deskOption, setDeskOption] = useState('');
  const [deskNum, setDeskNum] = useState(-1);
  const [selectedCards, setSelectedCards] = useState([]);


  useEffect(() => {
    import('./json/cards.json')
      .then((data) => setCards(data.cards))  
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);

  useEffect(() => {
    import('./json/desks.json')
      .then((data) => setDesks(data.desks))  
      .catch((error) => console.error('Error loading JSON:', error));
  }, []);


const handleSelectChange = (event) => {
  event.preventDefault();
  setDeskOption(event.target.value);
  console.log(event.target.value);
  let deskIndex = desks.findIndex(desk => desk.name === event.target.value);
  setDeskNum(deskIndex);
  console.log(deskIndex);

  if (deskIndex !== -1) {
    
    randomCards(desks[deskIndex].numOfCards);
};
};


const randomCards = (num) => {
  let randomNum = 0;
  let indexes = []; 
  let lapok =  [];
  for (let i = 0; i < num; i++) {
    do {
      randomNum = Math.floor(Math.random() * cards.length);
    } while (indexes.includes(randomNum));
    indexes.push(randomNum);

    lapok.push(cards[randomNum]);
  }
  setSelectedCards(lapok);
  lapok = [];
}


 

  return (
    <div >  
           <div >
            <select id="desks-options" 
                    onChange={handleSelectChange}
                    value={deskOption}>
              <option value="" disabled>Válassz táblát</option>
              { desks.map(( desk, i) => 
                   <option key={i} value={desk.name}>{desk.name}</option>
              )}
            </select>
            
          </div>
      
      {selectedCards  ? <Desk cards={selectedCards} desk={desks[deskNum]}
                              />
               : <p>Loading...</p>}
    </div>
  );
};

export default App;