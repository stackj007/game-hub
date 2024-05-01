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
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </BoxContainer>
  )
}

export default GameCard
