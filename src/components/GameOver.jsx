export function GameOver({ restart,score }) {
  return (
    <div>
      <h1
      className="mt-8 text-3xl "
      >Fim de jogo
      </h1>
      <h2
      className="mt-16 text-xl "
      >A sua pontuação foi: <span className=" text-xl "> {score}</span></h2>
      <button
      className="mt-28  text-xl bg-black hover:bg-gray-900 transition duration-180 ease-out hover:ease-in px-10 py-4 rounded-full text-white shadow border-solid border-2 border-gray-400"  
      onClick={restart}>clique pra jogar novamente</button>
    </div>
  )
}
