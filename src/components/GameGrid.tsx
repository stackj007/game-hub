import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface Game {
  id: number
  name: string
}
interface FetchGamesRespones {
  count: number
  results: Game[]
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    apiClient
      .get<FetchGamesRespones>('./games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message))
  })

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  )
}

export default GameGrid
