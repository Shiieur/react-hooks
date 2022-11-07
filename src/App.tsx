import React, { useState } from 'react';
import './App.css';
import { useGetSynonyms } from './hooks/useGetSynonyms';
import LoadingBar from './component/loadingBar';

function App() {

  const [word, setWord] = useState("");
  const {isLoading, synonyms,  getSynonyms} = useGetSynonyms();
  // const ref : React.RefObject<HTMLInputElement> = React.createRef();


  const handleFetchSynonyms = (e: React.FormEvent) => {
    e.preventDefault();
    getSynonyms(word);
  }

  const handleClickedSynonyms = (newWord : string) => {
    setWord(newWord);
    getSynonyms(newWord);
  }

  return (
    <div className="App">
      <form onSubmit={handleFetchSynonyms}>
        <label htmlFor="word-input">Your Word</label><br/>
        <input value={word} type="text" id="word-input" /*ref={ref}*/ onChange={(e) => setWord(e.target.value)}></input><br/>        
      </form>
      <button onClick={handleFetchSynonyms}>Submit</button>
      {isLoading ?
        <div>LOADING...</div>
        : synonyms.length > 0 ?
          <ul className="synonyms">        
            {synonyms.map((syn) =>           
              <li key={syn.word}>            
                  Word: <a onClick={ () => {  handleClickedSynonyms(syn.word);/*ref.current?.focus()*/}}>{syn.word}</a>, Score: {syn.score}            
              </li>
            )}
          </ul> :
          <></>
      }
      
    </div>
  )
}

export default App
