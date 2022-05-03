import React, {useState} from 'react';
import quotes from '../quotes.json'

const colors = ["lightcoral","lightblue", "lightgreen", "lightgrey", "lightpink" ]

const Phrase = () => {

    const [phrase, changePhrase] = useState(Math.floor(Math.random() * quotes.length));
    const changeAuthor = () => {
      const randomPhrase = Math.floor(Math.random() * quotes.length)
      changePhrase(randomPhrase)
      
    }
    const randomColor = Math.floor(Math.random() * colors.length);

    document.body.style = `background: ${colors[randomColor]}`

    return (
        <div className="containerPhrase">
            <div className="quotes-icon"><i class="fa-solid fa-quote-left"></i></div>
            <h1 style={{color: colors[randomColor]}}>{quotes[phrase].quote}</h1>
            <h2 style={{color: colors[randomColor]}}>{quotes[phrase].author}</h2>
            <button onClick={changeAuthor} style={{background: colors[randomColor]}}><i class="fa-solid fa-greater-than"></i></button>
        </div>
        
    );
};

export default Phrase;