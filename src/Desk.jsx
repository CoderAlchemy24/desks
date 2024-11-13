import React, { useState, useEffect } from 'react';
import './Desk.css';
import Card from './Card';
import Meanings from './Meanings';

const Desk = ({ desk, cards }) => {
    const [cardIsShown, setCardIsShown] = useState(new Array(desk?.numOfCards).fill(false));

    useEffect(() => {
        setCardIsShown(new Array(desk?.numOfCards).fill(false));
    }, [desk]);

    const handleClick = (ind) => {
        setCardIsShown(prevState => {
            const newState = [...prevState];
            newState[ind] = !newState[ind];
            return newState;
        });
    };

    return (
        <div id="desk" >
            
             <div id="spread">
            {cards.map((card, i) => (
            
                <div key={i} >
                    <Card 
                        card={card} 
                        desk={desk} 
                        ind={i} 
                        isShown={cardIsShown[i]} 
                        onClick={() => handleClick(i)}
                    />
                    
                </div>))}
             </div>   
            <div id="keywords">
                {cards.map((card, i) => (
               
                <div key={'M'+i} >    

                    <Meanings card={card} ind={i} isShown={cardIsShown[i]} 
                            desk={desk}/>
                
                </div>)
                )}
             </div>    
            
            
          
        </div>
    );
};

export default Desk;