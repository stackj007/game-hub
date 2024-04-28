import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'

// prop for passing a callback function
interface props {
  onGenreSelect: (genre: Genre) => void
}

const GenresList = ({ onGenreSelect }: props) => {
  const { data } = useGenres()

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1} borderRadius={5}>
          <HStack>
            <Image src={genre.image_background} borderRadius={8} boxSize="34px" />
            <Button onClick={() => onGenreSelect(genre)} variant={'link'} fontSize="lg">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenresList
