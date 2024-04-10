import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

const Nav = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={'80px'} />
      <Text>Gamer's hub</Text>
    </HStack>
  )
}

export default Nav
