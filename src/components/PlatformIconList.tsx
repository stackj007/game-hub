import { Icon } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { IconType } from 'react-icons'

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa'

import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'

interface Props {
  platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    playstation: FaPlaystation,
    ios: MdPhoneIphone,
    web: BsGlobe,
  }

  return (
    <>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} />
      ))}
    </>
  )
}

export default PlatformIconList
