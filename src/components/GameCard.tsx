import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'

interface props {
  game: Game
}
const GameCard = ({ game }: props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack marginTop={2} color="gray.500">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (p) => p.platform
            )}
          />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard
