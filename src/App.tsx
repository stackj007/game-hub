import { Grid, GridItem, Show } from '@chakra-ui/react'
import Nav from './components/Nav'
import GameGrid from './components/GameGrid'
import GenresList from './components/GenresList'

function App() {
  return (
    <Grid
      templateAreas={{
        base: `" nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={'nav'}>
        <Nav />
      </GridItem>

      <Show above="lg">
        <GridItem area={'aside'}>
          <GenresList />
        </GridItem>
      </Show>

      <GridItem area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
