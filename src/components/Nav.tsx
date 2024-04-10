import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'

const Nav = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize={'80px'} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default Nav
