import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface props {
  onSearch: (searchText: string) => void
}

const Nav = ({ onSearch }: props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize={'80px'} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Nav
