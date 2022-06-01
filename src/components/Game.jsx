import { useState, useRef } from "react"

export function Game({ verifyLetter, pickedWord, pickedCategory, letter, guessedLetter, wrongLetter, guesses, score }) {

  const [letters, setLetters] =useState('')
  const letterInputRef = useRef(null)
  const handleSubmit = (e) => { 
  e.preventDefault();
   
  verifyLetter(letters)

  setLetters('')
  letterInputRef.current.focus()
  }

  return (
    <div className="font-sans">
      <p className="mt-4 text-lg font-bold text-gray-400">
        <span
        
        >pontuação: {score}</span>
      </p>
      <h1
      className="text-2xl mt-8 font-bold"
      > Adivinhe a Palavra Secreta </h1>
      <h3
      className="text-xl mt-8"
      >Dica sobre a palavra:  
        <span
        className="text-gray-400 pl-1"
        >
        {pickedCategory}
        </span>
      </h3>
      <p
      className="mt-2 text-base"
      >numero de tentativa(s):</p>{guesses}
      <div
      className="flex flex-center justify-center items-center text-center"
      >
        <div
          className="font-bold px-4 h-36 mt-5 border-solid border-8 border-white flex"
         >
           {letter.map((letter, i) => 
            guessedLetter.includes(letter) ? (
              <span key={i} className="bg-white text-black mt-4  text-7xl  pt-2 w-24 h-24  border-solid border-4 border-black "> {letter} </span>
            ) : ( <span key={i} className="bg-white text-black mt-4 w-24 h-24  pt-2 text-7xl border-solid border-4 border-black"></span>)
           )}
          
         </div>

        </div>
      
      <div
      className="mt-4 text-xl "
      >
        <p>Tente adivinha uma letra da palavra:</p>
        <form
        onSubmit={handleSubmit} 
        className="mt-4 flex items-center justify-center"
        >
           <input 
           ref={letterInputRef}
           value={letters}
           onChange={(e)=> setLetters(e.target.value)}
           className=" px-1 py-1 text-center w-20 h-20 text-6xl text-black "
           type="text" name="letter" maxLength='1' required />
           <button
           className=" ml-4  text-xl bg-black hover:bg-gray-900 transition duration-180 ease-out hover:ease-in px-14 py-4 rounded-full text-white shadow border-solid border-2 border-gray-400 "
           >Jogar</button> 
        </form>
      </div>
      <div
      className="mt-6"
      >
        <p 
        className="text-xl mb-2"
        >Letras já utilizadas:{wrongLetter.map((letter,i)=> (

          <span key={i} className="text-xl text-white font-bold"
          >  {letter},</span>))}   </p> 
       
      
      </div>
    </div>
  )
}
