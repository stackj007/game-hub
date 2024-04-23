import {
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'

const GenresList = () => {
  const { data } = useGenres()

  return (
    <List>
      {data.map((genre) => (
        <ListItem
          key={genre.id}
          paddingY={1}
          borderRadius={5}
        >
          <HStack>
            <Image
              src={genre.image_background}
              boxSize="35px"
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenresList
