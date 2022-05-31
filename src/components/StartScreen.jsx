export function StartScreen({startGame}) {
  return (
    <div>
      <h1 className="mt-32 text-6xl">Secret Word</h1>
      <p className="mt-12 text-xl text-gray-400">
        Clique no botão abaixo para começar a jogar!
      </p>
      <div>
        <button
          onClick={startGame}
          className="mt-28 text-xl bg-black hover:bg-gray-900 transition duration-180 ease-out hover:ease-in px-14 py-4 rounded-full text-white shadow border-solid border-2 border-gray-400 "
        >
          Começar
        </button>
      </div>
    </div>
  )
}
