import React from 'react';

import './Card.css';


const Card = ({card, desk, ind, isShown , onClick}) => {

 let cardMoreStyles= {
   top: `${40+desk.koords[ind].top}px`,
   left: `${50+desk.koords[ind].left}px`,
   position: 'absolute',
   border: '1px solid lavender',
  
 } ;



 if (desk.id == 2 ) { cardMoreStyles.transform=`scale(0.75) rotate(0deg)`;
  if ( ind == 6 ) { cardMoreStyles.transform=`scale(0.75) rotate(30deg) `}
  else if (ind == 2) { cardMoreStyles.transform=`scale(0.75) rotate(-30deg)`}} ;
 

 
 if (desk.id == 6 ) {cardMoreStyles.transform=`scale(0.75)`;
      if (ind== 1) {cardMoreStyles.transform='scale(0.75) rotate(-90deg)'}}
 if (desk.id == 7 ) cardMoreStyles.transform=`scale(0.75)`;
 if (desk.id == 7 && ind == 8 ) cardMoreStyles.transform=`rotate(270deg) scale(0.75)`;
 if (desk.id == 7 && ind == 3 ) cardMoreStyles.transform=`rotate(-15deg) scale(0.75)`;
 if (desk.id == 7 && ind == 4 ) cardMoreStyles.transform=`rotate(15deg) scale(0.75)`; 
 if (desk.id == 7 && ind == 0 ) cardMoreStyles.transform=`rotate(-15deg) scale(0.75)`;
 if (desk.id == 7 && ind == 1 ) cardMoreStyles.transform=`rotate(15deg) scale(0.75)`;   


    return (
      <>
        <div 
             className="card" 
             style={cardMoreStyles}
             >
            <h4 className="card_title">{card ? 
                (isShown ? card.name : ind+1)
                 : ''}</h4> 
          
            <img src={isShown ? `./src/assets/cards/${card.img}` 
                                       : './src/assets/greencardback.png'} 
               onClick={onClick}
               alt={card ? card.name : 'Placeholder'} />
           
        </div>
        
        </>
    );
};

export default Card;