import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface BoxContainerProps {
  children: ReactNode
}

const BoxContainer = ({ children }: BoxContainerProps) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  )
}

export default BoxContainer
