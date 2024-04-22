import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react'
import BoxContainer from './BoxContainer'

const GameCardSkeleton = () => {
  return (
    <BoxContainer>
      <Card>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </BoxContainer>
  )
}
export default GameCardSkeleton
