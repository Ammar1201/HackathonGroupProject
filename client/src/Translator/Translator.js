import { useState } from "react";
import './Translator.css';
import React from 'react';

const Translator = (originalText,outputLang) => {
    
    const [translatedText, setTranslatedText] = useState('');
    const [isTranslated, setIsTranslated] = useState();
    
      const translate = () => {

        const options = {
            method: 'POST',
            headers: {
              'content-type': 'application/json',
              'X-RapidAPI-Key': process.env.REACT_APP_RapidAPI_Key,
              'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
            },
            body: `[{"Text":"${originalText}"}]`
          };
          fetch(`${process.env.REACT_APP_Base_URL}${outputLang}${process.env.REACT_APP_Query_Params}`, options)
          .then(response => {
            if (response.status !== 200) {
              setIsTranslated(false);
              console.log("there's an error");
              return;
            }
            setIsTranslated(true);
            response.json()
              .then(response => {
                const translated = response[0].translations[0].text;
                setTranslatedText(translated);
                console.log(translated);
              })
          })
          .catch(err => {
            setIsTranslated(false);
            console.error(err)
          });
      }
    
            
     
  
    return (
        
        <div className="translatedText">
            {translate()}
            {isTranslated ? translatedText : null}  
        </div>
    );
}

export default Translator;
