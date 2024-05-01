import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react'
import useGenres, { Genre } from '../hooks/useGenres'


interface props {
  onGenreSelect: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenresList = ({ selectedGenre, onGenreSelect }: props) => {
  const { data } = useGenres()

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2} borderRadius={5}>
          <HStack spacing={3}>
            <Image
              src={genre.image_background}
              borderRadius={6}
              boxSize="42px"
              objectFit="cover"
            />

            <Button
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              onClick={() => onGenreSelect(genre)}
              variant={'link'}
              whiteSpace="normal"
              textAlign="left"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}

export default GenresList
