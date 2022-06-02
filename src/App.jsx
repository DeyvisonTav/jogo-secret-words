//react
import { useCallback, useEffect, useState } from 'react'

//data
import { wordsList } from './data/word'

//components
import { StartScreen } from './components/StartScreen'
import { Game } from './components/Game'
import { GameOver } from './components/GameOver'

const stage = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
]

export function App() {
  const [gameStage, setGameStage] = useState(stage[0].name)
  const [word] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letter, setLetter] = useState([])

  const [guessedLetter, setGuessedLetter] = useState([])
  const [wrongLetter, setWrongLetter] = useState([])
  const [guesses, setGuesses] = useState(5)
  const [score, setScore] = useState(-100)

  const pickWordandCategory = useCallback(() => {
    const categories = Object.keys(word)
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category)

    const wordss =
      word[category][Math.floor(Math.random() * word[category].length)]

    console.log(wordss)
    return { wordss, category }
  }, [word])

  const startGame = useCallback(() => {
    clearLetterStates()

    const { wordss, category } = pickWordandCategory()
    let wordLetter = wordss.split('')

    wordLetter = wordLetter.map(l => l.toLowerCase())

    console.log(wordss, category)
    console.log(wordLetter)

    setPickedWord(wordss)
    setPickedCategory(category)
    setLetter(wordLetter)
    setGameStage(stage[1].name)
  }, [pickWordandCategory])

  const verifyLetter = letters => {
    const normalizedLetter = letters.toLowerCase()

    if (
      guessedLetter.includes(normalizedLetter) ||
      wrongLetter.includes(normalizedLetter)
    ) {
      return
    }
    if (letter.includes(normalizedLetter)) {
      setGuessedLetter(actualGuessedLetter => [
        ...actualGuessedLetter,
        normalizedLetter
      ])
    } else {
      setWrongLetter(actualWrongLetter => [
        ...actualWrongLetter,
        normalizedLetter
      ])

      setGuesses(actualGuesses => actualGuesses - 1)
    }
  }
  const clearLetterStates = () => {
    setGuessedLetter([])
    setWrongLetter([])
  }

  useEffect(() => {
    if (score === 0) {
      setGameStage(stage[0].name)
    }
  }, [score])

  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates()
      setGameStage(stage[2].name)
    }
  }, [guesses])

  useEffect(() => {
    const uniqueLetters = [...new Set(letter)]

    if (guessedLetter.length == uniqueLetters.length) {
      let actuaScore = score
      setScore(actualScore => actualScore)
      actuaScore = actuaScore + 100
      startGame()
      setScore(actuaScore)
    }
  }, [guessedLetter, letter, startGame])

  const restart = () => {
    setScore(0)

    setGuesses(3)

    setGameStage(stage[0].name)
  }

  return (
    <div className="flex flex-center justify-center items-center text-center ">
      <div className="w-screen h-screen bg-gradient-to-b from-black to-zinc-900 text-white font-serif">
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && (
          <Game
            verifyLetter={verifyLetter}
            pickedWord={pickedWord}
            pickedCategory={pickedCategory}
            letter={letter}
            guessedLetter={guessedLetter}
            wrongLetter={wrongLetter}
            guesses={guesses}
            score={score}
          />
        )}
        {gameStage === 'end' && <GameOver restart={restart} score={score} />}
      </div>
    </div>
  )
}
