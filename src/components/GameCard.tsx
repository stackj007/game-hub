import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import cropImageUrl from '../services/image-url'
import BoxContainer from './BoxContainer'

interface props {
  game: Game
}

const GameCard = ({ game }: props) => {
  return (
    <BoxContainer>
      <Card>
        <Image src={cropImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (p) => p.platform
              )}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </BoxContainer>
  )
}

export default GameCard
