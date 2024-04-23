import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import useGames from '../hooks/useGames'
import BoxContainer from './BoxContainer'

const GameGrid = () => {
  const { data, error, isLoading } = useGames()

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <BoxContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </BoxContainer>
          ))}

        {data.map((game) => (
          <BoxContainer key={game.id}>
            <GameCard key={game.id} game={game} />
          </BoxContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
