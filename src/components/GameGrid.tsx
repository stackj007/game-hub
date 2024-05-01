import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import useGames from '../hooks/useGames'
import BoxContainer from './BoxContainer'
import { GameQuery } from '../App'

interface props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: props) => {
  const { data, error, isLoading } = useGames(gameQuery)

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} padding="10px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <BoxContainer key={skeleton}>
              <GameCardSkeleton />
            </BoxContainer>
          ))}

        {data.map((game) => (
          <BoxContainer key={game.id}>
            <GameCard game={game} />
          </BoxContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
