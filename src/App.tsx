import { Grid, GridItem, Show } from '@chakra-ui/react'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/useGames'
function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  const handleGenreSelect = (genre: Genre) => {
    setSelectedGenre(genre)
  }

  return (
    <Grid
      templateAreas={{
        base: `" nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '270px 1fr',
      }}
    >
      <GridItem area={'nav'}>
        <Nav />
      </GridItem>

      <Show above="lg">
        <GridItem area={'aside'} paddingX={5}>
          <GenresList selectedGenre={selectedGenre} onGenreSelect={handleGenreSelect} />
        </GridItem>
      </Show>

      <GridItem area={'main'}>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  )
}

export default App
