import React from 'react';
import './Meanings.css';

const Meanings = ({ card, ind, isShown, desk }) => {
    if (!isShown) return (<div className="meanings">
            <h4>{ind+1}. kártya</h4>
            <p>{Object.values(desk.kulcsszavak[ind])[0]}</p></div>)
    else
    
    return (
        <div className="meanings">
            <h4>{card.name}</h4>
            <ul className="ul_li_columns"
             >
                {card.keywords.map((keyword, i) => (
                    <li key={i} data-index={Object.values(desk.kulcsszavak[ind])[0]}>{keyword}</li>
                ))}
            </ul>
        </div>
    );
};

export default Meanings;