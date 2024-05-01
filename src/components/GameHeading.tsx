import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: props) => {
  return (
    <Heading as="h1" marginY={5}>
      {`${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`}
    </Heading>
  )
}

export default GameHeading
