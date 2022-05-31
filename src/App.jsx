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

  const startGame = () => {
    setGameStage(stage[1].name)
  }

  const verifyLetter = () => {
    setGameStage(stage[2].name)
  }

  const restart = () => {
    setGameStage(stage[0].name)
  }

  return (
    <div className="flex flex-center justify-center items-center text-center ">
      <div className="w-screen h-screen bg-gradient-to-b from-black to-zinc-900">
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game verifyLetter={verifyLetter} />}
        {gameStage === 'end' && <GameOver restart={restart} />}
      </div>
    </div>
  )
}
